import { Suspense, lazy } from 'react';
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
  return (
    <Suspense fallback={<Loader/>}>
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
