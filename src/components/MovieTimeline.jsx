import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Users } from 'lucide-react';
import { phases } from '../data/movies';

function MovieNode({ movie, phaseColor, index, isLeft }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`relative flex w-full my-8 md:my-16 ${isLeft ? 'justify-end md:justify-start' : 'justify-end'}`}>
            
            {/* Center Line Dot (Desktop only) */}
            <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex flex-col items-center justify-center top-8 z-10 w-12 h-12">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-4 h-4 rounded-full border-[3px] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 z-10"
                    style={{ 
                        backgroundColor: '#070f1a', 
                        borderColor: phaseColor,
                        boxShadow: isHovered || isExpanded ? `0 0 20px ${phaseColor}` : 'none',
                        transform: isHovered || isExpanded ? 'scale(1.5)' : 'scale(1)'
                    }}
                />
            </div>

            {/* Mobile Node Dot */}
            <div className="absolute left-[15px] md:hidden flex flex-col items-center top-8 z-10">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                    style={{ 
                        backgroundColor: '#070f1a', 
                        borderColor: phaseColor,
                        boxShadow: isHovered || isExpanded ? `0 0 15px ${phaseColor}` : 'none'
                    }}
                />
            </div>

            {/* Content Card Container */}
            <motion.div 
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative w-[85%] md:w-[45%] flex flex-col ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Connector Line (Desktop) */}
                <div 
                    className={`hidden md:block absolute top-[2.2rem] w-12 h-[2px] transition-all duration-500`}
                    style={{ 
                        backgroundColor: isHovered || isExpanded ? phaseColor : `${phaseColor}40`,
                        [isLeft ? 'right' : 'left']: 0,
                        opacity: isHovered || isExpanded ? 1 : 0.5
                    }}
                />

                <div 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="relative w-full rounded-2xl overflow-hidden cursor-pointer group bg-[#0d1b2a]/60 backdrop-blur-md border border-white/[0.05] transition-all duration-500 hover:bg-[#0d1b2a]/80"
                    style={{
                        boxShadow: isHovered || isExpanded ? `0 10px 40px -10px ${phaseColor}30` : '0 4px 20px -10px rgba(0,0,0,0.5)',
                        borderColor: isExpanded ? `${phaseColor}60` : (isHovered ? `${phaseColor}40` : 'rgba(255,255,255,0.05)')
                    }}
                >
                    {/* Top Accent Line */}
                    <div 
                        className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500"
                        style={{ backgroundColor: phaseColor, opacity: isHovered || isExpanded ? 1 : 0.3 }}
                    />

                    <div className="p-6">
                        {/* Header Info */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1 transition-colors duration-300 group-hover:text-[#e0e0e0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {movie.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span 
                                        className="text-2xl font-black opacity-80"
                                        style={{ fontFamily: 'Inter, sans-serif', color: phaseColor }}
                                    >
                                        {movie.year}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Rating Badge */}
                            <div 
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border backdrop-blur-sm"
                                style={{ 
                                    backgroundColor: `${phaseColor}15`, 
                                    borderColor: `${phaseColor}30`,
                                    color: phaseColor 
                                }}
                            >
                                <Star size={14} className="fill-current" />
                                <span className="text-xs font-bold tracking-wider">{movie.rating}</span>
                            </div>
                        </div>

                        {/* Description Preview */}
                        <p className={`text-sm text-[#7a8a9a] leading-relaxed transition-all duration-300 ${isExpanded ? 'line-clamp-none mb-4' : 'line-clamp-2'}`}>
                            {movie.plot}
                        </p>

                        {/* Expandable Content */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 mt-4 border-t border-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Users size={16} style={{ color: phaseColor }} />
                                            <span className="text-xs font-bold tracking-widest text-white/50 uppercase">Key Characters</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {movie.heroes.length > 0 ? movie.heroes.map((hero, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-2.5 py-1 text-xs rounded-md font-medium border transition-colors duration-300"
                                                    style={{ 
                                                        backgroundColor: `${phaseColor}10`,
                                                        borderColor: `${phaseColor}20`,
                                                        color: '#e0e0e0'
                                                    }}
                                                >
                                                    {hero}
                                                </span>
                                            )) : (
                                                <span className="text-xs text-[#7a8a9a]/60 italic">No specific heroes listed.</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Expand Toggle Hint */}
                        <div className="mt-4 flex justify-end items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#7a8a9a]" style={{ color: isHovered ? phaseColor : '' }}>
                                {isExpanded ? 'COLLAPSE' : 'EXPAND'}
                            </span>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown size={14} color={isHovered ? phaseColor : '#7a8a9a'} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function MovieTimeline() {
    return (
        <section id="timeline" className="relative py-24 px-4 md:px-8 lg:px-12 overflow-hidden">
            
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full pointer-events-none opacity-20 hidden md:block">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c42b2b] rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4dc9f6] rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Section Header */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-[#c42b2b] animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] text-[#e0e0e0] uppercase">The Infinity Saga</span>
                    </motion.div>
                    
                    <h2
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            background: 'linear-gradient(135deg, #fff 20%, #7a8a9a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Cinematic Timeline
                    </h2>
                    <p className="text-base md:text-lg text-[#7a8a9a] max-w-2xl mx-auto leading-relaxed font-medium">
                        Relive the monumental journey of the Marvel Cinematic Universe. 
                        A decade of storytelling, leading to the ultimate battle for the universe.
                    </p>
                </motion.div>
            </div>

            {/* Alternating Timeline Layout */}
            <div className="relative w-full max-w-[1200px] mx-auto z-10">
                
                {/* Central Continuous Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
                
                {/* Mobile Continuous Line */}
                <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" />

                <div className="flex flex-col gap-12 md:gap-0">
                    {phases.map((phase, phaseIndex) => {
                        // Calculate total movies before this phase to properly alternate left/right sides
                        const previousMoviesCount = phases.slice(0, phaseIndex).reduce((acc, p) => acc + p.movies.length, 0);

                        return (
                            <div key={phase.name} className="relative mb-8 md:mb-16">
                                
                                {/* Phase Divider */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex justify-center py-10 md:py-16 my-4 w-full"
                                >
                                    <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-white opacity-5 blur-[100px] pointer-events-none" style={{ backgroundColor: phase.color }} />
                                    <div 
                                        className="inline-flex flex-col items-center bg-[#070f1a] px-8 py-4 rounded-3xl border-2 z-20 shadow-2xl backdrop-blur-xl"
                                        style={{ borderColor: `${phase.color}30` }}
                                    >
                                        <span 
                                            className="text-2xl md:text-3xl font-black tracking-widest uppercase mb-1"
                                            style={{ color: phase.color }}
                                        >
                                            {phase.name}
                                        </span>
                                        <span className="text-xs md:text-sm text-white/50 tracking-[0.2em] font-semibold uppercase text-center">
                                            {phase.subtitle}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Movies in Phase */}
                                <div>
                                    {phase.movies.map((movie, movieIndex) => {
                                        const globalIndex = previousMoviesCount + movieIndex;
                                        // Left if even, right if odd
                                        const isLeft = globalIndex % 2 === 0;
                                        
                                        return (
                                            <MovieNode 
                                                key={movie.title}
                                                movie={movie}
                                                phaseColor={phase.color}
                                                index={movieIndex}
                                                isLeft={isLeft}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
