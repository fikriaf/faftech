import { Suspense, lazy, useEffect, useState } from 'react';
import Loader from './components/LoadingPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout from './components/Layout';
import { useMusicPlayer } from './components/MusicPlayer';
import MusicOverlay from './components/MusicOverlay';
import { audio } from './services/music';
import { useDeviceStore } from './services/useDeviceStore';

// lazy pages
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Project = lazy(() => import('./pages/project/Project'));
const Achievements = lazy(() => import('./pages/achievement/Achievements'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {

  useEffect(() => {
      const checkMobile = () => {
      const current = window.innerWidth <= 480
      useDeviceStore.getState().setIsMobile(current)
      }

      checkMobile()
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const location = useLocation();
  const [ready, setReady] = useState(false);
  const [dotIndex, setDotIndex] = useState(1);
  const { musicList, showMusicOverlay, handlePlayMusic, handleWithoutMusic, musicChoiceMade } = useMusicPlayer(audio);
  const [fakeLength, setFakeLength] = useState(0);

  useEffect(() => {
    const onLoad = () => setReady(true);

    if (document.readyState === 'complete') {
        setReady(true);
      } else {
        window.addEventListener('load', onLoad);
        
        return () => window.removeEventListener('load', onLoad);
      }
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDotIndex(prev => (prev % 3) + 1);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   let current = 0;
  //   let intervalTime = 600;
  //   let interval: ReturnType<typeof setInterval>;

  //   interval = setInterval(() => {
  //     if (musicList.length) {
  //       if (current < musicList.length) {
  //         current += Math.ceil((musicList.length - current) / 4);
  //         setFakeLength(current);
  //       } else {
  //         clearInterval(interval);
  //         setFakeLength(musicList.length);
  //       }
  //     } else {
  //       if (current == 5) {
  //         clearInterval(interval);
  //       }
  //       current += 1;
  //       setFakeLength(current);
  //       intervalTime = Math.max(100, intervalTime * 0.9);
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [musicList]);

  const dots = '.'.repeat(dotIndex);
  const isMusicReady = musicList.length > 0;

  // if (!ready || !isMusicReady)
  //   return <Loader text={`Initialyzing${dots} [${fakeLength}]`} />;
  if (!ready)
    return <Loader text={`Initialyzing${dots}`} />

  return (
    <>
      <MusicOverlay 
        show={showMusicOverlay && !musicChoiceMade} 
        onPlayMusic={handlePlayMusic}
        onWithoutMusic={handleWithoutMusic}
      />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
