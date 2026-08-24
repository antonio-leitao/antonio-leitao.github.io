export const prerender = true;

import { parse } from "toml";

export const load = async ({ fetch }) => {
  const response = await fetch("/data.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);

  // written by scripts/downloads.mjs before the build; absent in plain `npm run dev`
  let stats = {};
  try {
    const statsResponse = await fetch("/stats.json");
    if (statsResponse.ok) stats = await statsResponse.json();
  } catch {
    // no counts this build — the manifest just leaves those cells empty
  }

  return {
    stats,
    info: data["info"],
    news: data["news"],
    papers: data["papers"],
    projects: data["projects"],
  };
};
