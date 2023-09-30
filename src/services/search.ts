import axios, { CancelTokenSource } from "axios";
import { SearchResult } from "../types";

let cancelToken: CancelTokenSource;

const search = async (query: string, filter?: { single: boolean }) => {

  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }

  cancelToken = axios.CancelToken.source();


  let url =
    import.meta.env.MODE === "development"
      ? `http://localhost:3001/api/search/?query=${query}`
      : `/api/search/?query=${query}`;
  if (filter?.single) url = `${url}&single`;
  const result = await axios.get<SearchResult[] | SearchResult>(url, { cancelToken: cancelToken.token });
  return result.data;
};

export default { search };
