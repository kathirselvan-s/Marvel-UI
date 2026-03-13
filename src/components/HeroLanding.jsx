import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

export default function HeroLanding({ onEnter }) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Scene3D showLogo={true} />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020810]/30 to-[#020810] z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,54,54,0.08)_0%,transparent_70%)] z-[1]" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-6"
                >
                    <span
                        className="text-xs md:text-sm tracking-[0.5em] text-[#00d4ff]/70 uppercase"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        ◆ Marvel Cinematic Universe ◆
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4"
                >
                    <span
                        className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-wider glow-text"
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            background: 'linear-gradient(135deg, #e23636 0%, #ff6b6b 30%, #f0b323 60%, #e23636 100%)',
                            backgroundSize: '300% 300%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'border-flow 4s ease infinite',
                        }}
                    >
                        AVENGERS
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.4em] text-[#e8e8e8]/60 mb-8"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    UNIVERSE
                </motion.h2>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
                    className="mx-auto mb-8 h-[1px] w-64 bg-gradient-to-r from-transparent via-[#e23636] to-transparent"
                />

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-sm md:text-base text-[#8899aa] max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                    Explore the legendary heroes, iconic moments, and the entire cinematic saga
                    that defined a generation. Your journey through the Marvel Cinematic Universe begins here.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    onClick={onEnter}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(226, 54, 54, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-4 border border-[#e23636]/50 bg-[#e23636]/10 text-[#e23636] text-sm tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#e23636]/20 hover:border-[#e23636]"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    <span className="relative z-10">Enter the Avengers Initiative</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#e23636]/0 via-[#e23636]/20 to-[#e23636]/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#e23636]" />
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#e23636]" />
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#e23636]" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#e23636]" />
                </motion.button>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] tracking-[0.3em] text-[#8899aa]/50" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            SCROLL
                        </span>
                        <div className="w-[1px] h-8 bg-gradient-to-b from-[#e23636]/50 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>

            {/* HUD corners */}
            <div className="absolute top-20 left-6 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.3, x: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <div className="w-24 h-[1px] bg-gradient-to-r from-[#e23636] to-transparent mb-2" />
                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#e23636] to-transparent" />
                </motion.div>
            </div>
            <div className="absolute top-20 right-6 z-10">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.3, x: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex flex-col items-end"
                >
                    <div className="w-24 h-[1px] bg-gradient-to-l from-[#e23636] to-transparent mb-2" />
                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#e23636] to-transparent ml-auto" />
                </motion.div>
            </div>
        </section>
    );
}
