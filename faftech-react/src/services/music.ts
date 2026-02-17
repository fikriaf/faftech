import { usePlayerStore } from "../components/UsePlayerStore";

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
  try {
    const res = await fetch(`${apiUrl}/api/music`);

    if (!res.ok) {
      console.error("❌ Gagal fetch:", res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    musicList = json.sort((a: Music, b: Music) => a.title.localeCompare(b.title));
    return musicList;
  } catch (err) {
    console.error("💥 Error saat fetch list:", err);
    return [];
  }
}


/** Mainkan lagu berdasarkan index */
export function play(index: number = currentIndex) {
  if (musicList.length === 0) {
    console.warn("⚠️ Music list masih kosong");
    return;
  }

  currentIndex = index;
  audio.src = `${apiUrl}${musicList[currentIndex].url}`;
  console.log("🎵 Playing:", musicList[currentIndex].title);

  audio.play().then(() => {
    usePlayerStore.getState().setIsPlaying(true);
  }).catch((err) => {
    console.error("❌ Gagal play:", err);
  });
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
  usePlayerStore.getState().setIsPlaying(false);
}

/** Dapatkan info lagu yang sedang diputar */
export function getCurrentTrack(): Music | null {
  return musicList[currentIndex] || null;
}
