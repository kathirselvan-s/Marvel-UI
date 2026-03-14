import { motion, AnimatePresence } from 'framer-motion';

export default function HeroPanel({ hero, onClose }) {
    if (!hero) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#070f1a]/95 backdrop-blur-2xl"
                />

                {/* Panel */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/[0.08] bg-[#0d1b2a]/95 backdrop-blur-2xl"
                    style={{
                        boxShadow: `0 0 40px ${hero.color}10, 0 25px 50px -12px rgba(0,0,0,0.5)`,
                    }}
                >
                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.1] bg-[#0d1b2a]/90 text-[#7a8a9a] hover:text-white hover:bg-white/[0.05] transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ✕
                    </motion.button>

                    {/* Banner image */}
                    <div className="relative h-56 md:h-72 lg:h-80 overflow-hidden rounded-t-xl">
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        <div
                            className="absolute inset-0"
                            style={{ background: `linear-gradient(135deg, ${hero.color}20, transparent 60%, ${hero.accentColor}10)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/40 via-transparent to-[#0d1b2a]/40" />

                        {/* HUD */}
                        <div className="absolute top-4 left-4 flex flex-col gap-0.5 z-10">
                            <span className="text-[10px] tracking-widest text-[#4dc9f6]/50 font-medium drop-shadow" style={{ fontFamily: 'Inter, sans-serif' }}>
                                S.H.I.E.L.D. PERSONNEL FILE
                            </span>
                            <span className="text-[10px] tracking-wider text-[#7a8a9a]/50 font-medium drop-shadow" style={{ fontFamily: 'Inter, sans-serif' }}>
                                CLASSIFICATION: AVENGER
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="mb-7"
                        >
                            <h2
                                className="text-2xl md:text-4xl font-bold tracking-wide mb-1.5"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    color: hero.color,
                                }}
                            >
                                {hero.name}
                            </h2>
                            <p className="text-base text-[#4dc9f6]/50 tracking-wide font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {hero.realName}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-2.5 text-xs text-[#7a8a9a]">
                                <span>Portrayed by <strong className="text-[#e0e0e0]/80">{hero.actor}</strong></span>
                                <span className="w-1 h-1 rounded-full bg-white/10" />
                                <span>First: <strong className="text-[#e0e0e0]/80">{hero.firstAppearance}</strong></span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left */}
                            <div className="space-y-5">
                                {/* Bio */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="p-4 rounded-xl border border-white/[0.06] bg-[#070f1a]/40"
                                >
                                    <h3 className="text-xs tracking-widest text-[#c42b2b] mb-2.5 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c42b2b]" />
                                        BIOGRAPHY
                                    </h3>
                                    <p className="text-sm text-[#7a8a9a] leading-relaxed">{hero.bio}</p>
                                </motion.div>

                                {/* Powers */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-4 rounded-xl border border-white/[0.06] bg-[#070f1a]/40"
                                >
                                    <h3 className="text-xs tracking-widest text-[#4dc9f6] mb-2.5 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4dc9f6]" />
                                        POWERS & ABILITIES
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {hero.powers.map((power, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.35 + i * 0.04 }}
                                                className="text-xs px-3 py-1.5 rounded-md border border-[#4dc9f6]/15 bg-[#4dc9f6]/5 text-[#4dc9f6]/80 font-medium tracking-wide hover:border-[#4dc9f6]/40 hover:bg-[#4dc9f6]/10 hover:text-[#4dc9f6] transition-all duration-300 cursor-default"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {power}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Weapons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-4 rounded-xl border border-white/[0.06] bg-[#070f1a]/40"
                                >
                                    <h3 className="text-xs tracking-widest text-[#d4a017] mb-2.5 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017]" />
                                        WEAPONS & EQUIPMENT
                                    </h3>
                                    <ul className="space-y-2">
                                        {hero.weapons.map((weapon, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.45 + i * 0.04 }}
                                                className="text-sm text-[#7a8a9a] flex items-center gap-2.5 py-1 hover:text-[#d4a017] transition-colors duration-300"
                                            >
                                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: hero.color }} />
                                                {weapon}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Right */}
                            <div className="space-y-5">
                                {/* Key Moments */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-4 rounded-xl border border-white/[0.06] bg-[#070f1a]/40"
                                >
                                    <h3 className="text-xs tracking-widest text-[#c42b2b] mb-3 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c42b2b]" />
                                        KEY MOMENTS
                                    </h3>
                                    <div className="space-y-2.5">
                                        {hero.keyMoments.map((moment, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.35 + i * 0.06 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex flex-col items-center mt-1.5">
                                                    <div className="w-2 h-2 rounded-full border-[1.5px]" style={{ borderColor: hero.color, background: `${hero.color}20` }} />
                                                    {i < hero.keyMoments.length - 1 && (
                                                        <div className="w-px h-4 mt-0.5" style={{ background: `${hero.color}15` }} />
                                                    )}
                                                </div>
                                                <p className="text-sm text-[#e0e0e0]/70">{moment}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Filmography */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                    className="p-4 rounded-xl border border-white/[0.06] bg-[#070f1a]/40"
                                >
                                    <h3 className="text-xs tracking-widest text-[#4dc9f6] mb-2.5 flex items-center gap-2 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#4dc9f6]" />
                                        FILMOGRAPHY
                                    </h3>
                                    <div className="grid grid-cols-1 gap-1.5">
                                        {hero.movies.map((movie, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 + i * 0.03 }}
                                                className="px-3 py-1.5 rounded-md border border-white/[0.04] bg-white/[0.02] text-sm text-[#7a8a9a] hover:text-[#4dc9f6] hover:border-[#4dc9f6]/20 transition-all duration-300 flex items-center gap-2"
                                            >
                                                <span className="text-[#4dc9f6]/30 text-xs">▸</span>
                                                {movie}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-7 flex items-center justify-center gap-8 pt-5 border-t border-white/[0.06]"
                        >
                            {[
                                { value: hero.movies.length, label: 'MOVIES' },
                                { value: hero.powers.length, label: 'POWERS' },
                                { value: hero.weapons.length, label: 'WEAPONS' },
                            ].map((stat, i) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-xl font-bold" style={{ color: hero.color, fontFamily: 'Inter, sans-serif' }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] tracking-wider text-[#7a8a9a]/50 font-medium mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
