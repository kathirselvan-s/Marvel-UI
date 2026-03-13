import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { phases } from '../data/movies';

function MovieCard({ movie, phaseColor, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="relative rounded-lg overflow-hidden border border-[rgba(226,54,54,0.1)] bg-[#0a1628]/80 hover:border-opacity-100 transition-all duration-500"
                style={{ borderColor: `${phaseColor}30` }}
            >
                {/* Movie poster area */}
                <div className="relative h-44 overflow-hidden">
                    <div
                        className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
                        style={{
                            background: `linear-gradient(135deg, ${phaseColor}25, #0a1628 50%, ${phaseColor}15)`,
                        }}
                    />
                    {/* Year badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span
                            className="text-3xl font-black"
                            style={{
                                fontFamily: 'Orbitron, sans-serif',
                                color: phaseColor,
                                textShadow: `0 0 20px ${phaseColor}40`,
                            }}
                        >
                            {movie.year}
                        </span>
                    </div>
                    {/* Rating */}
                    <div
                        className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] tracking-wider border"
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            background: `${phaseColor}15`,
                            borderColor: `${phaseColor}30`,
                            color: phaseColor,
                        }}
                    >
                        ★ {movie.rating}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

                    {/* Movie title on poster */}
                    <div className="absolute bottom-3 left-3 right-3">
                        <h4
                            className="text-sm font-bold tracking-wider leading-tight"
                            style={{
                                fontFamily: 'Orbitron, sans-serif',
                                color: '#e8e8e8',
                            }}
                        >
                            {movie.title}
                        </h4>
                    </div>
                </div>

                {/* Movie info */}
                <div className="p-4">
                    <p className="text-xs text-[#8899aa] leading-relaxed mb-3 line-clamp-2">
                        {movie.plot}
                    </p>

                    {/* Heroes in movie */}
                    {movie.heroes.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {movie.heroes.slice(0, 4).map((hero, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] px-2 py-0.5 rounded border tracking-wider"
                                    style={{
                                        borderColor: `${phaseColor}25`,
                                        color: `${phaseColor}`,
                                        background: `${phaseColor}08`,
                                        fontFamily: 'Rajdhani, sans-serif',
                                    }}
                                >
                                    {hero}
                                </span>
                            ))}
                            {movie.heroes.length > 4 && (
                                <span
                                    className="text-[10px] px-2 py-0.5 rounded text-[#8899aa]/50"
                                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                                >
                                    +{movie.heroes.length - 4} more
                                </span>
                            )}
                        </div>
                    )}

                    {/* Expand indicator */}
                    <motion.div
                        className="mt-3 text-center"
                        animate={{ opacity: isExpanded ? 0 : 1 }}
                    >
                        <span className="text-[10px] tracking-[0.2em] text-[#8899aa]/40" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            TAP FOR DETAILS
                        </span>
                    </motion.div>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t"
                            style={{ borderColor: `${phaseColor}15` }}
                        >
                            <div className="p-4">
                                <p className="text-xs text-[#8899aa] leading-relaxed">{movie.plot}</p>
                                {movie.heroes.length > 0 && (
                                    <div className="mt-3">
                                        <p className="text-[10px] tracking-wider text-[#00d4ff]/50 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                            ALL HEROES
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {movie.heroes.map((hero, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] px-2 py-0.5 rounded border tracking-wider"
                                                    style={{
                                                        borderColor: `${phaseColor}25`,
                                                        color: `${phaseColor}`,
                                                        background: `${phaseColor}08`,
                                                        fontFamily: 'Rajdhani, sans-serif',
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

                {/* Hover glow */}
                <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${phaseColor}, transparent)` }}
                />
            </div>
        </motion.div>
    );
}

export default function MovieTimeline() {
    const scrollRefs = useRef({});

    const scroll = (phaseIndex, direction) => {
        const container = scrollRefs.current[phaseIndex];
        if (container) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="timeline" className="relative py-24 px-4 md:px-8 lg:px-12">
            {/* Section header */}
            <div className="w-full max-w-[1600px] mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <span
                        className="text-[10px] tracking-[0.5em] text-[#00d4ff]/50 uppercase"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        ◆ The Infinity Saga ◆
                    </span>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-wider mt-4 mb-4 glow-text"
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            background: 'linear-gradient(135deg, #f0b323, #ff6b6b, #00d4ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        TIMELINE
                    </h2>
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#f0b323] to-transparent mx-auto mb-6" />
                    <p className="text-sm text-[#8899aa] max-w-xl mx-auto tracking-wide">
                        Journey through the complete Marvel Cinematic Universe, from the first Iron Man to Endgame.
                    </p>
                </motion.div>
            </div>

            {/* Phases */}
            <div className="w-full max-w-[1600px] mx-auto space-y-16">
                {phases.map((phase, phaseIndex) => (
                    <motion.div
                        key={phase.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                    >
                        {/* Phase header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className="px-4 py-2 rounded border text-sm tracking-[0.3em] font-bold"
                                style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    borderColor: `${phase.color}40`,
                                    color: phase.color,
                                    background: `${phase.color}10`,
                                    textShadow: `0 0 15px ${phase.color}30`,
                                }}
                            >
                                {phase.name}
                            </div>
                            <div className="flex-1 h-[1px]" style={{ background: `linear-gradient(90deg, ${phase.color}30, transparent)` }} />
                            <span className="text-xs text-[#8899aa]/50 tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                {phase.subtitle}
                            </span>
                            {/* Scroll buttons */}
                            <div className="hidden md:flex gap-2">
                                <button
                                    onClick={() => scroll(phaseIndex, 'left')}
                                    className="w-8 h-8 rounded border flex items-center justify-center text-sm transition-all hover:bg-opacity-20"
                                    style={{ borderColor: `${phase.color}30`, color: phase.color }}
                                >
                                    ◁
                                </button>
                                <button
                                    onClick={() => scroll(phaseIndex, 'right')}
                                    className="w-8 h-8 rounded border flex items-center justify-center text-sm transition-all hover:bg-opacity-20"
                                    style={{ borderColor: `${phase.color}30`, color: phase.color }}
                                >
                                    ▷
                                </button>
                            </div>
                        </div>

                        {/* Movies horizontal scroll */}
                        <div
                            ref={(el) => (scrollRefs.current[phaseIndex] = el)}
                            className="flex gap-4 overflow-x-auto pb-4 timeline-scroll snap-x snap-mandatory"
                            style={{ scrollbarColor: `${phase.color} #0a1628` }}
                        >
                            {phase.movies.map((movie, movieIndex) => (
                                <MovieCard
                                    key={movie.title}
                                    movie={movie}
                                    phaseColor={phase.color}
                                    index={movieIndex}
                                />
                            ))}
                        </div>

                        {/* Timeline line */}
                        <div className="relative mt-4 mx-4">
                            <div className="h-[2px] rounded-full" style={{ background: `linear-gradient(90deg, ${phase.color}50, ${phase.color}10)` }} />
                            <div className="flex justify-between mt-2">
                                <span className="text-[10px] tracking-wider" style={{ color: `${phase.color}60`, fontFamily: 'Orbitron, sans-serif' }}>
                                    {phase.movies[0].year}
                                </span>
                                <span className="text-[10px] tracking-wider" style={{ color: `${phase.color}60`, fontFamily: 'Orbitron, sans-serif' }}>
                                    {phase.movies[phase.movies.length - 1].year}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
