import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'heroes', label: 'Heroes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'about', label: 'About' },
];

export default function Navbar({ activeSection, onNavigate }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#070f1a]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-5 md:py-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={() => onNavigate('home')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#c42b2b]/40 flex items-center justify-center bg-[#c42b2b]/10">
                        <span className="text-[#c42b2b] font-bold text-xl md:text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>A</span>
                    </div>
                    <div>
                        <h1 className="text-base md:text-xl font-bold tracking-[0.2em] md:tracking-widest text-[#c42b2b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            AVENGERS
                        </h1>
                        <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] text-[#7a8a9a]/60 font-medium">UNIVERSE</p>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-0.5">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`relative px-5 py-2.5 text-sm md:text-base tracking-[0.15em] font-medium rounded-lg transition-all duration-300 ${activeSection === item.id
                                ? 'text-[#c42b2b]'
                                : 'text-[#7a8a9a] hover:text-[#e0e0e0]'
                                }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-2 right-2 h-[1.5px] rounded-full bg-[#c42b2b]"
                                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Status */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-xs md:text-sm tracking-[0.2em] text-emerald-500/80 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                            ONLINE
                        </span>
                    </div>
                </div>

                {/* Mobile menu button */}
                <motion.button
                    className="md:hidden text-[#c42b2b]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="flex flex-col gap-1.5">
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-[#c42b2b]"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                            className="block w-5 h-[1.5px] bg-[#c42b2b]"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-[#c42b2b]"
                        />
                    </div>
                </motion.button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden bg-[#070f1a]/95 backdrop-blur-2xl border-t border-white/[0.06]"
                    >
                        <div className="px-6 py-3 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                                    className={`text-left px-4 py-2.5 text-sm tracking-wide font-medium rounded-lg transition-all ${activeSection === item.id
                                        ? 'text-[#c42b2b] bg-[#c42b2b]/8'
                                        : 'text-[#7a8a9a] hover:text-white hover:bg-white/[0.03]'
                                        }`}
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
