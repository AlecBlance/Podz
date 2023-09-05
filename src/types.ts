import React from "react";

export interface MusicCardProps {
  title: string;
  artist: string;
  image?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  title: string;
}
