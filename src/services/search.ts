import axios from "axios";
import { SearchResult } from "../types";

const search = async (query: string) => {
  const result = await axios.get<SearchResult[]>(
    import.meta.env.MODE === "development"
      ? `http://localhost:3001/api/search/?query=${query}`
      : `/api/search/?query=${query}`
  );
  return result.data;
};

export default { search };
