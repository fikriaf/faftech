import { Suspense, lazy, useEffect, useState } from 'react';
import Loader from './components/LoadingPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout from './components/Layout';

// lazy pages
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  const [ready, setReady] = useState(false);

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


  // Tampilkan loader sampai semua siap
  if (!ready) return <Loader />;

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
