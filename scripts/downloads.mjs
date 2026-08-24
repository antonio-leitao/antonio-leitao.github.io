/**
 * Fetches all-time PyPI download totals and writes them to static/stats.json.
 *
 * Runs automatically before `npm run build` (see the "prebuild" script), so the
 * numbers are baked into the prerendered pages and nothing is fetched in the
 * visitor's browser. The file is gitignored — it is generated, never committed.
 *
 * Source is shields.io's JSON endpoint, which fronts pepy.tech and handles the
 * API key. pepy's own v2 API returns 401 without one, and pypistats.org only
 * exposes last-day/week/month rather than all-time totals.
 *
 * Failure is not fatal: a package that cannot be read is simply left out, and
 * its cell in the manifest renders empty.
 */
import { readFile, writeFile } from "node:fs/promises";
import { parse } from "toml";

const DATA = "static/data.toml";
const OUT = "static/stats.json";

const { projects = [] } = parse(await readFile(DATA, "utf8"));
const packages = [...new Set(projects.map((p) => p.pip).filter(Boolean))];

const stats = {};

await Promise.all(
  packages.map(async (name) => {
    try {
      const response = await fetch(
        `https://img.shields.io/pepy/dt/${encodeURIComponent(name)}.json`,
        {
          headers: { "User-Agent": "antonio-leitao.github.io" },
          signal: AbortSignal.timeout(10000),
        },
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const { message } = await response.json();
      // shields answers with "invalid"/"not found" rather than an error status
      if (!message || !/\d/.test(message)) throw new Error(message ?? "empty");

      stats[name] = message;
    } catch (error) {
      console.warn(`  ${name}: skipped (${error.message})`);
    }
  }),
);

await writeFile(OUT, `${JSON.stringify(stats, null, 2)}\n`);
console.log(`${OUT}: ${Object.keys(stats).length}/${packages.length} packages`);
