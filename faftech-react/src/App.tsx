import { Suspense, lazy, useEffect, useState } from 'react';
import Loader from './components/LoadingPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout from './components/Layout';
import { useMusicPlayer } from './components/MusicPlayer';
import { audio } from './services/music';

// lazy pages
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  const [ready, setReady] = useState(false);
  const [dotIndex, setDotIndex] = useState(1);
  const { musicList } = useMusicPlayer(audio);
  const [fakeLength, setFakeLength] = useState(0);

  useEffect(() => {
    const onLoad = () => setReady(true);

    if (document.readyState === 'complete') {
        // Sudah selesai loading (misalnya buka dari tab baru)
        setReady(true);
      } else {
        // Tunggu sampai semua resource benar-benar selesai
        window.addEventListener('load', onLoad);
        
        return () => window.removeEventListener('load', onLoad);
      }
  }, []);

  // 🔁 Update titik setiap 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex(prev => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let current = 0;
    let intervalTime = 600;
    let timer: ReturnType<typeof setTimeout>;

    function updateFake() {
      // Jika data asli sudah datang
      if (musicList.length > 0) {
        // Percepat animasi hingga mencapai jumlah asli
        if (current < musicList.length) {
          current += Math.ceil((musicList.length - current) / 4); // percepat!
          setFakeLength(current);
          timer = setTimeout(updateFake, 50); // super cepat
        } else {
          setFakeLength(musicList.length);
        }
      } else {
        // Kalau masih loading asli, buat fake-nya naik lambat → cepat
        current += 1;
        setFakeLength(current);
        intervalTime = Math.max(100, intervalTime * 0.9); // semakin cepat
        timer = setTimeout(updateFake, intervalTime);
      }
    }

    updateFake();

    return () => clearTimeout(timer);
  }, [musicList]);

  const dots = '.'.repeat(dotIndex);
  const isMusicReady = musicList.length > 0;

  if (!ready || !isMusicReady)
    return <Loader text={`Initialyzing [${fakeLength}]${dots}`} />;


  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
