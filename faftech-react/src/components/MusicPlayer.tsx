import { useState, useEffect, useRef } from "react";
import { getCurrentTrack, getMusicList, next, play } from "../services/music";

export function useMusicPlayer(audio: HTMLAudioElement) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressPercent, setProgressPercent] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(getCurrentTrack());
    const [musicList, setMusicList] = useState<any[]>([]);
    const [showMusicOverlay, setShowMusicOverlay] = useState(false);
    const [musicChoiceMade, setMusicChoiceMade] = useState(false);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        (async () => {
            try {
                const list = await getMusicList();
                setMusicList(list);
                setShowMusicOverlay(true);
            } catch (err) {
                console.error("❌ Gagal ambil daftar lagu:", err);
            }
        })();
    }, []);

    const handlePlayMusic = () => {
        const autoPlayIndex = musicList.findIndex((m: any) => m.title === "@andhh2k Musicaldown.com 1728575555");
        if (autoPlayIndex !== -1) {
            play(autoPlayIndex);
        }
        setShowMusicOverlay(false);
        setMusicChoiceMade(true);
    };

    const handleWithoutMusic = () => {
        setShowMusicOverlay(false);
        setMusicChoiceMade(true);
    };

    
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

    return { 
        currentTrack, 
        currentTime, 
        duration, 
        progressPercent, 
        musicList,
        showMusicOverlay,
        handlePlayMusic,
        handleWithoutMusic,
        musicChoiceMade
    };
}
