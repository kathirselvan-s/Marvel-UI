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
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#020810]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-full border-2 border-[#e23636]/50 flex items-center justify-center relative">
          <span
            className="text-4xl font-black text-[#e23636]"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            A
          </span>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#e23636]/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-[#00d4ff]/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ borderRadius: '50%', borderStyle: 'dashed' }}
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl tracking-[0.5em] text-[#e23636] mb-2"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        AVENGERS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xs tracking-[0.5em] text-[#8899aa]/50 mb-12"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        UNIVERSE
      </motion.p>

      {/* Progress bar */}
      <div className="w-64">
        <div className="h-[2px] bg-[#0a1628] rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #e23636, #f0b323)',
              boxShadow: '0 0 10px rgba(226, 54, 54, 0.5)',
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] tracking-wider text-[#8899aa]/40" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INITIALIZING SYSTEM
          </span>
          <span className="text-[10px] tracking-wider text-[#e23636]/60" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>
      </div>

      {/* Status messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-[10px] tracking-wider text-[#00d4ff]/30" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {progress < 30 && '◆ LOADING S.H.I.E.L.D. DATABASE...'}
          {progress >= 30 && progress < 60 && '◆ SCANNING HERO PROFILES...'}
          {progress >= 60 && progress < 90 && '◆ INITIALIZING AVENGERS PROTOCOL...'}
          {progress >= 90 && '◆ SYSTEM READY'}
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

  // Track scroll position for active section
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
          transition={{ duration: 1 }}
        >
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

          <main>
            <HeroLanding onEnter={handleEnter} />

            {/* Divider */}
            <div className="relative py-4 px-4 md:px-8 lg:px-12 w-full max-w-[1600px] mx-auto">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e23636]/30 to-transparent" />
            </div>

            <HeroesGrid />

            {/* Divider */}
            <div className="relative py-4 px-4 md:px-8 lg:px-12 w-full max-w-[1600px] mx-auto">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#f0b323]/30 to-transparent" />
            </div>

            <MovieTimeline />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
