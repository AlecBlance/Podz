import {
  Recommendations,
  RecommendationsResponse,
  RecommendationsTracks,
  RecommendationsTracksResponse,
  SpotifyClientCredentials,
} from "../types";
import axios from "axios";

let token: string | null = null;

const setToken = (userToken: string) => {
  token = `Bearer ${userToken}`;
};

const loginSpotify = async (): Promise<SpotifyClientCredentials> => {
  const re =
    /<script id="session" data-testid="session" type="application\/json">({.*})<\/script>/;
  const result = await axios.get(
    "https://api.allorigins.win/get?url=https://open.spotify.com"
  );
  return JSON.parse(result.data.contents.match(re)[1]);
};

const getTracks = async (id: string): Promise<RecommendationsTracks[]> => {
  const config = {
    headers: { Authorization: token },
  };
  const result = await axios.get<RecommendationsTracksResponse>(
    `https://api.spotify.com/v1/playlists/${id}/tracks?market=PH&fields=items%28track%28name%2Calbum%28images%2Cid%28url%29%29%2Cartists%28name%29%29%29&limit=10`,
    config
  );
  return result.data.items.map((track) => ({
    name: track.track.name,
    imageUrl: track.track.album.images[0].url,
    artistName: track.track.artists.map((artist) => artist.name),
    id: track.track.album.id,
  }));
};

const getRecommendations = async (
  country: string
): Promise<Recommendations[]> => {
  const config = {
    headers: { Authorization: token },
  };
  const result = await axios.get<RecommendationsResponse>(
    `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&limit=5`,
    config
  );
  return await Promise.all(
    result.data.playlists.items.map(async (playlist) => ({
      name: playlist.name,
      tracks: await getTracks(playlist.id),
      id: playlist.id,
    }))
  );
};

export default { loginSpotify, setToken, getRecommendations };
