type Music = {
  id: number;
  title: string;
  file: string;
  url: string;
  duration: string;
};

const apiUrl = import.meta.env.VITE_API_MUSIC;

let musicList: Music[] = [];
let currentIndex = 0;
export const audio = new Audio();

/** Ambil list lagu dari API */
export async function getMusicList() {
  const res = await fetch(`${apiUrl}/api/music`);
  musicList = await res.json();
  return musicList;
}

/** Mainkan lagu berdasarkan index */
export function play(index: number = currentIndex) {
  if (musicList.length === 0) return;
  currentIndex = index;
  audio.src = `${apiUrl}${musicList[currentIndex].url}`;
  audio.play();
}

/** Mainkan lagu selanjutnya */
export function next() {
  if (musicList.length === 0) return;
  currentIndex = (currentIndex + 1) % musicList.length;
  play(currentIndex);
}


/** Mainkan lagu sebelumnya */
export function prev() {
  if (musicList.length === 0) return;
  currentIndex = (currentIndex - 1 + musicList.length) % musicList.length;
  play(currentIndex);
}

/** Pause lagu */
export function pause() {
  audio.pause();
}

/** Dapatkan info lagu yang sedang diputar */
export function getCurrentTrack(): Music | null {
  return musicList[currentIndex] || null;
}
