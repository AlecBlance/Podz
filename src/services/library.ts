import { SearchResult } from "../types";

const getParsedLibrary = (): SearchResult[] | void => {
  const library = localStorage.getItem("library");
  if (library) return JSON.parse(library);
  new Error("Problem getting tasks");
};

const saveLibrary = (library: SearchResult[]) => {
  localStorage.setItem("library", JSON.stringify(library));
};

const deleteInLibrary = (id: string): void => {
  let parsedLibrary = getParsedLibrary();
  if (!parsedLibrary) return;
  parsedLibrary = parsedLibrary.filter((liked) => liked.id !== id);
  saveLibrary(parsedLibrary);
};

const addInLibrary = (playing: SearchResult): SearchResult[] | void => {
  let parsedLibrary = getParsedLibrary();
  if (!parsedLibrary) return;
  parsedLibrary = parsedLibrary.concat(playing);
  saveLibrary(parsedLibrary);
  return parsedLibrary;
};

export default { deleteInLibrary, addInLibrary, getParsedLibrary };
