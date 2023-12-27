import { createSignal } from 'solid-js';

export type Track = {
  id: string;
  title: string;
  position: number;
  length: string;
};

export type PlayerTrack = Track & {
  albumId: string;
  albumName: string;
  artist: string;
  imageUrl: string;
};

export const [isPlaying, setIsPlaying] = createSignal(false);
export const [currentTrack, setCurrentTrack] = createSignal<PlayerTrack | null>(null);
