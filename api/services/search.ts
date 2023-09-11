import { Innertube } from "youtubei.js";
import { SearchResult } from "../types";

const search = async (
  query: string
): Promise<SearchResult[] | { error: string }> => {
  const youtube = await Innertube.create();
  const musicResults = await youtube.search(query, {
    type: "video",
    sort_by: "relevance",
  });
  if (!musicResults.results) return { error: "No results found" };
  return musicResults.results.map((result) => ({
    id: result["id"],
    title: result["title"]?.["text"],
    author: result["author"]?.["name"],
    image: result["thumbnails"]?.[0]["url"],
  }));
};

export default { search };
