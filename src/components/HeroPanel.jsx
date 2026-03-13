import { motion, AnimatePresence } from 'framer-motion';

export default function HeroPanel({ hero, onClose }) {
    if (!hero) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#020810]/95 backdrop-blur-xl"
                />

                {/* Panel content */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg border border-[rgba(226,54,54,0.2)] bg-[#0a1628]/95 backdrop-blur-xl"
                    style={{
                        boxShadow: `0 0 60px ${hero.color}20, 0 0 120px ${hero.color}10`,
                    }}
                >
                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-[#e23636]/30 bg-[#0a1628]/80 text-[#e23636] hover:bg-[#e23636]/20 transition-all backdrop-blur-md"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ✕
                    </motion.button>

                    {/* Top hero banner with real image */}
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                            style={{ imageRendering: 'auto' }}
                        />
                        {/* Cinematic overlays */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(135deg, ${hero.color}30, transparent 50%, ${hero.accentColor}20)`,
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/60" />
                        {/* Vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />

                        {/* HUD elements */}
                        <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
                            <span className="text-[10px] tracking-[0.3em] text-[#00d4ff]/70 drop-shadow-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                ◆ S.H.I.E.L.D. PERSONNEL FILE
                            </span>
                            <span className="text-[10px] tracking-wider text-[#8899aa]/70 drop-shadow-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                CLASSIFICATION: AVENGER
                            </span>
                        </div>

                        {/* Corner accents */}
                        <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 z-10" style={{ borderColor: hero.color }} />
                        <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 z-10" style={{ borderColor: hero.color }} />
                    </div>

                    {/* Hero info */}
                    <div className="p-6 md:p-10">
                        {/* Name and identity */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <h2
                                className="text-3xl md:text-5xl font-black tracking-wider mb-2"
                                style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    color: hero.color,
                                    textShadow: `0 0 20px ${hero.color}40`,
                                }}
                            >
                                {hero.name}
                            </h2>
                            <p className="text-lg text-[#00d4ff]/70 tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                {hero.realName}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mt-3">
                                <span className="text-xs text-[#8899aa]">Portrayed by <strong className="text-[#e8e8e8]">{hero.actor}</strong></span>
                                <span className="w-1 h-1 rounded-full bg-[#e23636]" />
                                <span className="text-xs text-[#8899aa]">First: <strong className="text-[#e8e8e8]">{hero.firstAppearance}</strong></span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left column */}
                            <div className="space-y-6">
                                {/* Biography */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-5 rounded-lg border border-[rgba(226,54,54,0.1)] bg-[#050d1a]/50"
                                >
                                    <h3
                                        className="text-sm tracking-[0.2em] text-[#e23636] mb-3 flex items-center gap-2"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#e23636]" />
                                        BIOGRAPHY
                                    </h3>
                                    <p className="text-sm text-[#8899aa] leading-relaxed">{hero.bio}</p>
                                </motion.div>

                                {/* Powers */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-5 rounded-lg border border-[rgba(0,212,255,0.1)] bg-[#050d1a]/50"
                                >
                                    <h3
                                        className="text-sm tracking-[0.2em] text-[#00d4ff] mb-3 flex items-center gap-2"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                                        POWERS & ABILITIES
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {hero.powers.map((power, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.05 }}
                                                className="text-xs px-3 py-1.5 rounded border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] text-[#00d4ff]/80 tracking-wider"
                                                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                                            >
                                                {power}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Weapons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-5 rounded-lg border border-[rgba(240,179,35,0.1)] bg-[#050d1a]/50"
                                >
                                    <h3
                                        className="text-sm tracking-[0.2em] text-[#f0b323] mb-3 flex items-center gap-2"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#f0b323]" />
                                        WEAPONS & EQUIPMENT
                                    </h3>
                                    <ul className="space-y-2">
                                        {hero.weapons.map((weapon, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + i * 0.05 }}
                                                className="text-sm text-[#8899aa] flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 rounded-full" style={{ background: hero.color }} />
                                                {weapon}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-6">
                                {/* Key Moments */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-5 rounded-lg border border-[rgba(226,54,54,0.1)] bg-[#050d1a]/50"
                                >
                                    <h3
                                        className="text-sm tracking-[0.2em] text-[#e23636] mb-4 flex items-center gap-2"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#e23636]" />
                                        KEY MOMENTS
                                    </h3>
                                    <div className="space-y-3">
                                        {hero.keyMoments.map((moment, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.08 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex flex-col items-center mt-1">
                                                    <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: hero.color, background: `${hero.color}30` }} />
                                                    {i < hero.keyMoments.length - 1 && (
                                                        <div className="w-[1px] h-6 mt-1" style={{ background: `${hero.color}20` }} />
                                                    )}
                                                </div>
                                                <p className="text-sm text-[#e8e8e8]/80">{moment}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Related Movies */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-5 rounded-lg border border-[rgba(0,212,255,0.1)] bg-[#050d1a]/50"
                                >
                                    <h3
                                        className="text-sm tracking-[0.2em] text-[#00d4ff] mb-3 flex items-center gap-2"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                                        FILMOGRAPHY
                                    </h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {hero.movies.map((movie, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.7 + i * 0.03 }}
                                                className="px-3 py-2 rounded border border-[rgba(0,212,255,0.1)] bg-[rgba(0,212,255,0.03)] text-sm text-[#8899aa] hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.3)] transition-all cursor-default flex items-center gap-2"
                                            >
                                                <span className="text-[#00d4ff]/50">▸</span>
                                                {movie}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex items-center justify-center gap-6 pt-6 border-t border-[rgba(226,54,54,0.1)]"
                        >
                            <div className="text-center">
                                <p className="text-2xl font-bold" style={{ color: hero.color, fontFamily: 'Orbitron, sans-serif' }}>
                                    {hero.movies.length}
                                </p>
                                <p className="text-[10px] tracking-wider text-[#8899aa]" style={{ fontFamily: 'Orbitron, sans-serif' }}>MOVIES</p>
                            </div>
                            <div className="w-px h-8 bg-[rgba(226,54,54,0.2)]" />
                            <div className="text-center">
                                <p className="text-2xl font-bold" style={{ color: hero.color, fontFamily: 'Orbitron, sans-serif' }}>
                                    {hero.powers.length}
                                </p>
                                <p className="text-[10px] tracking-wider text-[#8899aa]" style={{ fontFamily: 'Orbitron, sans-serif' }}>POWERS</p>
                            </div>
                            <div className="w-px h-8 bg-[rgba(226,54,54,0.2)]" />
                            <div className="text-center">
                                <p className="text-2xl font-bold" style={{ color: hero.color, fontFamily: 'Orbitron, sans-serif' }}>
                                    {hero.weapons.length}
                                </p>
                                <p className="text-[10px] tracking-wider text-[#8899aa]" style={{ fontFamily: 'Orbitron, sans-serif' }}>WEAPONS</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom corner accents */}
                    <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: hero.color }} />
                    <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: hero.color }} />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
