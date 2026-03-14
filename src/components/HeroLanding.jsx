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
            <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-5"
                >
                    <span
                        className="text-[10px] md:text-xs tracking-[0.4em] text-[#4dc9f6]/50 uppercase font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Marvel Cinematic Universe
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-3"
                >
                    <span
                        className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-wider"
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
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-[#e0e0e0]/40 mb-8"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    UNIVERSE
                </motion.h2>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.3, ease: 'easeOut' }}
                    className="mx-auto mb-8 h-px w-48 bg-gradient-to-r from-transparent via-[#c42b2b]/30 to-transparent"
                />

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-sm md:text-base text-[#7a8a9a] max-w-xl mx-auto mb-10 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Explore the legendary heroes, iconic moments, and the entire cinematic saga
                    that defined a generation.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={onEnter}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-8 py-3 border border-[#c42b2b]/40 bg-[#c42b2b]/8 text-[#c42b2b] text-sm tracking-widest font-medium uppercase rounded-lg overflow-hidden transition-all duration-400 hover:bg-[#c42b2b]/15 hover:border-[#c42b2b]/60 hover:shadow-lg hover:shadow-[#c42b2b]/10"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <span className="relative z-10">Explore Heroes</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#c42b2b]/0 via-[#c42b2b]/10 to-[#c42b2b]/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.button>

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
