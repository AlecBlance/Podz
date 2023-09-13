import { SearchResult } from "../types";

const getParsedRecent = (): SearchResult[] | void => {
  const recent = localStorage.getItem("recent");
  if (recent) return JSON.parse(recent);
  new Error("Problem getting tasks");
};

const saveRecent = (recent: SearchResult[]) => {
  localStorage.setItem("recent", JSON.stringify(recent));
};

const addInRecent = (playing: SearchResult): SearchResult[] | void => {
  let parsedRecent = getParsedRecent();
  if (!parsedRecent) return;
  parsedRecent = parsedRecent.concat(playing);
  if (parsedRecent.length > 20) parsedRecent = parsedRecent.slice(-20);
  saveRecent(parsedRecent);
  return parsedRecent;
};

const isPresent = (playing: SearchResult): boolean | void => {
  const parsedRecent = getParsedRecent();
  if (!parsedRecent) return;
  return parsedRecent.some((recent) => recent.id === playing.id);
};

export default { addInRecent, getParsedRecent, isPresent };
