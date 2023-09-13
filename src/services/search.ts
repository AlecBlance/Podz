import axios from "axios";
import { SearchResult } from "../types";

const search = async (query: string, filter?: { single: boolean }) => {
  let url =
    import.meta.env.MODE === "development"
      ? `http://localhost:3001/api/search/?query=${query}`
      : `/api/search/?query=${query}`;
  if (filter?.single) url = `${url}&single`;
  const result = await axios.get<SearchResult[]>(url);
  return result.data;
};

export default { search };
