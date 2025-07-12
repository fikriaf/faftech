import { useEffect, useState } from "react";
import { getCurrentTrack, getMusicList, next } from "../services/music";

export function useMusicPlayer(audio: HTMLAudioElement) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressPercent, setProgressPercent] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(getCurrentTrack());
    const [musicList, setMusicList] = useState<any[]>([]);

    useEffect(() => {
    (async () => {
        try {
        const list = await getMusicList();
        setMusicList(list);
        } catch (err) {
        console.error("❌ Gagal ambil daftar lagu:", err);
        }
    })();
    }, []);

    
    useEffect(() => {
        const update = () => {
            setCurrentTime(audio.currentTime || 0);
            setDuration(audio.duration || 0);
            setProgressPercent((audio.currentTime / (audio.duration || 1)) * 100);
            setCurrentTrack(getCurrentTrack());
        };

        const handleEnded = () => {
            next();
        };

        audio.addEventListener("timeupdate", update);
        audio.addEventListener("loadedmetadata", update);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", update);
            audio.removeEventListener("loadedmetadata", update);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [audio]);

    return { currentTrack, currentTime, duration, progressPercent, musicList };
}
