import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { phases } from '../data/movies';

function MovieCard({ movie, phaseColor, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex gap-5 group cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Timeline node */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div
                    className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                        borderColor: phaseColor,
                        background: isExpanded ? phaseColor : `${phaseColor}30`,
                        boxShadow: isExpanded ? `0 0 8px ${phaseColor}50` : 'none',
                    }}
                />
                <div
                    className="w-px flex-1 mt-1"
                    style={{ background: `linear-gradient(180deg, ${phaseColor}30, transparent)` }}
                />
            </div>

            {/* Card content */}
            <div className="flex-1 pb-8">
                <div
                    className="rounded-xl border bg-[#0d1b2a]/80 backdrop-blur-sm overflow-hidden transition-all duration-400 ease-out group-hover:border-opacity-100"
                    style={{
                        borderColor: isExpanded ? `${phaseColor}40` : 'rgba(255,255,255,0.06)',
                        boxShadow: isExpanded ? `0 4px 20px -4px ${phaseColor}15` : 'none',
                    }}
                >
                    {/* Header */}
                    <div className="flex items-start gap-4 p-4">
                        {/* Year */}
                        <div className="flex-shrink-0 text-center">
                            <span
                                className="text-2xl font-bold block"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    color: phaseColor,
                                }}
                            >
                                {movie.year}
                            </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <h4
                                className="text-sm font-semibold tracking-wide leading-snug text-[#e0e0e0] group-hover:text-white transition-colors duration-300"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {movie.title}
                            </h4>
                            <p className="text-xs text-[#7a8a9a] mt-1 line-clamp-2 leading-relaxed">
                                {movie.plot}
                            </p>
                        </div>

                        {/* Rating */}
                        <div
                            className="flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-semibold tracking-wider border"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                background: `${phaseColor}10`,
                                borderColor: `${phaseColor}20`,
                                color: phaseColor,
                            }}
                        >
                            ★ {movie.rating}
                        </div>
                    </div>

                    {/* Hero tags row */}
                    {movie.heroes.length > 0 && (
                        <div className="px-4 pb-3 flex flex-wrap gap-1">
                            {movie.heroes.slice(0, isExpanded ? movie.heroes.length : 4).map((hero, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] px-2 py-0.5 rounded-md border tracking-wide font-medium"
                                    style={{
                                        borderColor: `${phaseColor}20`,
                                        color: `${phaseColor}cc`,
                                        background: `${phaseColor}08`,
                                        fontFamily: 'Inter, sans-serif',
                                    }}
                                >
                                    {hero}
                                </span>
                            ))}
                            {!isExpanded && movie.heroes.length > 4 && (
                                <span
                                    className="text-[10px] px-2 py-0.5 rounded-md text-[#7a8a9a]/40 font-medium"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    +{movie.heroes.length - 4}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Expand details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="overflow-hidden border-t"
                                style={{ borderColor: `${phaseColor}10` }}
                            >
                                <div className="p-4">
                                    <p className="text-xs text-[#7a8a9a] leading-relaxed">{movie.plot}</p>
                                    {movie.heroes.length > 4 && (
                                        <div className="mt-3">
                                            <p className="text-[10px] tracking-wider text-[#4dc9f6]/40 mb-2 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                ALL HEROES
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {movie.heroes.map((hero, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] px-2 py-0.5 rounded-md border tracking-wide font-medium"
                                                        style={{
                                                            borderColor: `${phaseColor}20`,
                                                            color: `${phaseColor}`,
                                                            background: `${phaseColor}08`,
                                                            fontFamily: 'Inter, sans-serif',
                                                        }}
                                                    >
                                                        {hero}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Expand hint */}
                    <div className="px-4 pb-2.5 flex items-center justify-between">
                        <div className="flex-1" />
                        <span className="text-[10px] tracking-wider text-[#7a8a9a]/30 font-medium transition-colors duration-300 group-hover:text-[#7a8a9a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {isExpanded ? 'COLLAPSE' : 'EXPAND'}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function MovieTimeline() {
    return (
        <section id="timeline" className="relative py-24 px-4 md:px-8 lg:px-12">
            {/* Section header */}
            <div className="w-full max-w-[1400px] mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center"
                >
                    <span
                        className="text-[10px] tracking-[0.4em] text-[#4dc9f6]/40 uppercase font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        The Infinity Saga
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold tracking-wide mt-3 mb-3"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            background: 'linear-gradient(135deg, #d4a017, #e04040, #4dc9f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Timeline
                    </h2>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4a017]/40 to-transparent mx-auto mb-5" />
                    <p className="text-sm text-[#7a8a9a] max-w-lg mx-auto leading-relaxed">
                        Journey through the complete Marvel Cinematic Universe, from the first Iron Man to Endgame.
                    </p>
                </motion.div>
            </div>

            {/* Phases — vertical timeline */}
            <div className="w-full max-w-[900px] mx-auto space-y-16">
                {phases.map((phase, phaseIndex) => (
                    <motion.div
                        key={phase.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: phaseIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Phase header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className="px-4 py-1.5 rounded-md border text-xs tracking-widest font-semibold"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    borderColor: `${phase.color}30`,
                                    color: phase.color,
                                    background: `${phase.color}08`,
                                }}
                            >
                                {phase.name}
                            </div>
                            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${phase.color}20, transparent)` }} />
                            <span className="text-[10px] text-[#7a8a9a]/40 tracking-wider font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {phase.subtitle}
                            </span>
                        </div>

                        {/* Movies — vertical list */}
                        <div className="ml-2">
                            {phase.movies.map((movie, movieIndex) => (
                                <MovieCard
                                    key={movie.title}
                                    movie={movie}
                                    phaseColor={phase.color}
                                    index={movieIndex}
                                />
                            ))}
                        </div>

                        {/* Year range */}
                        <div className="flex justify-between mt-2 ml-7">
                            <span className="text-[10px] tracking-wider font-medium" style={{ color: `${phase.color}50`, fontFamily: 'Inter, sans-serif' }}>
                                {phase.movies[0].year}
                            </span>
                            <span className="text-[10px] tracking-wider font-medium" style={{ color: `${phase.color}50`, fontFamily: 'Inter, sans-serif' }}>
                                {phase.movies[phase.movies.length - 1].year}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
