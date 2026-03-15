import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

export default function HeroLanding({ onEnter }) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Scene3D showLogo={true} />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070f1a]/40 to-[#070f1a] z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,43,43,0.06)_0%,transparent_70%)] z-[1]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center h-full pt-20">
                <div className="max-w-2xl text-left">
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-6 flex items-center gap-4"
                >
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#c42b2b] to-transparent" />
                    <span
                        className="text-[10px] md:text-xs tracking-[0.4em] text-[#4dc9f6]/50 uppercase font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Marvel Cinematic Universe
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-2"
                >
                    <span
                        className="block text-6xl md:text-8xl lg:text-[140px] leading-none font-black tracking-tighter"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            background: 'linear-gradient(135deg, #c42b2b 0%, #e04040 30%, #d4a017 70%, #c42b2b 100%)',
                            backgroundSize: '300% 300%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'border-flow 6s ease infinite',
                        }}
                    >
                        AVENGERS
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-3xl md:text-5xl lg:text-7xl font-light tracking-[0.2em] text-[#e0e0e0]/50 mb-10 ml-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    UNIVERSE
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-base md:text-lg text-[#7a8a9a] max-w-lg mb-12 leading-relaxed ml-2 border-l-2 border-[#c42b2b]/30 pl-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Explore the legendary heroes, iconic moments, and the entire cinematic saga
                    that defined a generation.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="ml-2"
                >
                    <motion.button
                        onClick={onEnter}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-10 py-4 border border-[#c42b2b]/40 bg-[#c42b2b]/8 text-[#c42b2b] text-base tracking-[0.2em] font-bold uppercase rounded-xl overflow-hidden transition-all duration-400 hover:bg-[#c42b2b]/20 hover:border-[#c42b2b]/80 hover:shadow-[0_0_30px_rgba(196,43,43,0.3)] hover:text-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Initiate Protocol
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c42b2b]/30 to-transparent"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </motion.button>
                </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] tracking-widest text-[#7a8a9a]/30 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                            SCROLL
                        </span>
                        <div className="w-px h-6 bg-gradient-to-b from-[#c42b2b]/30 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
