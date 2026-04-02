export const prerender = true;

import { parse } from "toml";

export const load = async ({ fetch }) => {
  const response = await fetch("/data.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  return {
    info: data["info"],
    news: data["news"],
    papers: data["papers"],
    projects: data["projects"],
  };
};
