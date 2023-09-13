import { Innertube } from "youtubei.js";
import { SearchResponse, SearchResult } from "../types";

const search = async (
  query: string
): Promise<SearchResult[] | { error: string }> => {
  const youtube = await Innertube.create();
  const musicResults = await youtube.search(query, {
    type: "video",
    sort_by: "relevance",
  });
  if (!musicResults.results) return { error: "No results found" };
  const newResults = musicResults.results as unknown as SearchResponse[];
  return newResults
    .filter(
      (result) =>
        result.title?.text &&
        result.thumbnails?.[0].url &&
        result.author?.name &&
        result.title?.text !== "Shorts"
    )
    .map((result) => {
      return {
        id: result.id,
        title: result.title.text,
        author: result.author.name,
        image: result.thumbnails[0].url,
        duration: result.duration.seconds,
      };
    });
};

export default { search };
