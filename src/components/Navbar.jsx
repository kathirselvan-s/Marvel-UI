import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'HOME', icon: '◆' },
    { id: 'heroes', label: 'HEROES', icon: '⬡' },
    { id: 'timeline', label: 'TIMELINE', icon: '◈' },
    { id: 'about', label: 'ABOUT', icon: '◇' },
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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#020810]/90 backdrop-blur-xl border-b border-[rgba(226,54,54,0.2)] shadow-[0_0_30px_rgba(226,54,54,0.1)]'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => onNavigate('home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border-2 border-[#e23636] flex items-center justify-center bg-[#e23636]/10">
                            <span className="text-[#e23636] font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>A</span>
                        </div>
                        <div className="absolute inset-0 rounded-full animate-ping bg-[#e23636]/20" style={{ animationDuration: '3s' }} />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold tracking-[0.3em] text-[#e23636]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            AVENGERS
                        </h1>
                        <p className="text-[10px] tracking-[0.5em] text-[#00d4ff]/60">UNIVERSE</p>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`relative px-5 py-2 text-xs tracking-[0.2em] transition-all duration-300 ${activeSection === item.id
                                ? 'text-[#e23636]'
                                : 'text-[#8899aa] hover:text-[#e8e8e8]'
                                }`}
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-2 opacity-50">{item.icon}</span>
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e23636] to-transparent"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* HUD indicator */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                        <span className="text-[10px] tracking-wider text-[#00ff88]/70" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            SYSTEM ONLINE
                        </span>
                    </div>
                    <div className="w-px h-4 bg-[#e23636]/30" />
                    <span className="text-[10px] tracking-wider text-[#8899aa]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        S.H.I.E.L.D.
                    </span>
                </div>

                {/* Mobile menu button */}
                <motion.button
                    className="md:hidden text-[#e23636]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="flex flex-col gap-1.5">
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-[2px] bg-[#e23636]"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                            className="block w-6 h-[2px] bg-[#e23636]"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-[2px] bg-[#e23636]"
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
                        className="md:hidden bg-[#020810]/95 backdrop-blur-xl border-t border-[rgba(226,54,54,0.2)]"
                    >
                        <div className="px-6 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                                    className={`text-left px-4 py-3 text-sm tracking-[0.2em] rounded-lg transition-all ${activeSection === item.id
                                        ? 'text-[#e23636] bg-[#e23636]/10 border border-[#e23636]/20'
                                        : 'text-[#8899aa] hover:text-white hover:bg-white/5'
                                        }`}
                                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="mr-3 opacity-50">{item.icon}</span>
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
