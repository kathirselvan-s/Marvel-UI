import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import HeroesGrid from './components/HeroesGrid';
import MovieTimeline from './components/MovieTimeline';
import Footer from './components/Footer';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070f1a]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-6"
      >
        <div className="w-16 h-16 rounded-xl border border-[#c42b2b]/30 flex items-center justify-center bg-[#c42b2b]/8">
          <span
            className="text-2xl font-bold text-[#c42b2b]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A
          </span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-xl tracking-[0.4em] text-[#c42b2b] mb-1 font-bold"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        AVENGERS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[10px] tracking-[0.4em] text-[#7a8a9a]/40 mb-10 font-medium"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        UNIVERSE
      </motion.p>

      {/* Progress bar */}
      <div className="w-56">
        <div className="h-[2px] bg-white/[0.04] rounded-full overflow-hidden mb-2.5">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #c42b2b, #d4a017)',
              transition: 'width 0.15s ease-out',
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] tracking-wider text-[#7a8a9a]/30 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            INITIALIZING
          </span>
          <span className="text-[10px] tracking-wider text-[#c42b2b]/50 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>
      </div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-[10px] tracking-wider text-[#4dc9f6]/20 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
          {progress < 30 && 'Loading database...'}
          {progress >= 30 && progress < 60 && 'Scanning hero profiles...'}
          {progress >= 60 && progress < 90 && 'Initializing protocol...'}
          {progress >= 90 && 'System ready'}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = useCallback((section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleEnter = useCallback(() => {
    handleNavigate('heroes');
  }, [handleNavigate]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'heroes', 'timeline', 'about'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scan-overlay">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

          <main>
            <HeroLanding onEnter={handleEnter} />

            <div className="relative py-2 px-4 md:px-8 lg:px-12 w-full max-w-[1400px] mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>

            <HeroesGrid />

            <div className="relative py-2 px-4 md:px-8 lg:px-12 w-full max-w-[1400px] mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>

            <MovieTimeline />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
