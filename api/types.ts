export interface SearchResult {
  id: string;
  title: string;
  author: string;
  image: string;
}

export interface SearchResponse {
  id: string;
  title: {
    text: string;
  };
  author: {
    name: string;
  };
  thumbnails: {
    url: string;
  }[];
}
