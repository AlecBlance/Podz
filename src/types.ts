import React from "react";

export interface MusicCardProps {
  title: string;
  artist: string;
  image?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export interface SpotifyClientCredentials {
  accessToken: string;
  accessTokenExpirationTimestampMs: number;
  isAnonymous: boolean;
  clientId: string;
}

export interface RecommendationsResponse {
  playlists: {
    items: [
      {
        id: string;
        name: string;
      }
    ];
  };
}

export interface Recommendations {
  name: string;
  tracks: RecommendationsTracks[];
  id: string;
}

export interface RecommendationsTracksResponse {
  items: [
    {
      track: {
        name: string;
        album: {
          images: [
            {
              url: string;
            }
          ];
          id: string;
        };
        artists: [
          {
            name: string;
          }
        ];
      };
    }
  ];
}

export interface RecommendationsTracks {
  name: string;
  imageUrl: string;
  artistName: string[];
  id: string;
}

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  image?: string;
  duration: number;
}
