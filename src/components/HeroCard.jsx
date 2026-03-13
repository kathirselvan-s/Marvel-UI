import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroCard({ hero, index, onClick }) {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX((y - centerY) / 15);
        setRotateY((centerX - x) / 15);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onClick={() => onClick(hero)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group cursor-pointer"
            style={{ perspective: '1000px' }}
        >
            <div
                className="relative rounded-lg overflow-hidden transition-all duration-300"
                style={{
                    transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Card glow effect */}
                <div
                    className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                        background: `linear-gradient(135deg, ${hero.color}40, transparent, ${hero.accentColor}40)`,
                        filter: 'blur(2px)',
                    }}
                />

                {/* Card content */}
                <div className="relative bg-[#0a1628]/90 backdrop-blur-sm border border-[rgba(226,54,54,0.15)] group-hover:border-[rgba(226,54,54,0.4)] rounded-lg overflow-hidden transition-all duration-500 z-[1]">
                    {/* Hero image area */}
                    <div className="relative h-72 overflow-hidden">
                        {/* Actual hero image */}
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            style={{
                                imageRendering: 'auto',
                            }}
                            loading="lazy"
                        />
                        {/* Color overlay for consistency */}
                        <div
                            className="absolute inset-0 opacity-20 mix-blend-color transition-opacity duration-500 group-hover:opacity-10"
                            style={{
                                background: `linear-gradient(135deg, ${hero.color}, transparent)`,
                            }}
                        />
                        {/* Bottom gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
                        {/* Vignette effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />

                        {/* Top badge */}
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] tracking-wider border backdrop-blur-md"
                            style={{
                                fontFamily: 'Orbitron, sans-serif',
                                background: `${hero.color}30`,
                                borderColor: `${hero.color}50`,
                                color: '#fff',
                            }}
                        >
                            {hero.emoji} AVENGER
                        </div>

                        {/* Scan line effect on hover */}
                        {isHovered && (
                            <motion.div
                                className="absolute left-0 right-0 h-[2px] z-10"
                                style={{ background: `linear-gradient(90deg, transparent, ${hero.color}, transparent)` }}
                                initial={{ top: '0%' }}
                                animate={{ top: '100%' }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </div>

                    {/* Info section */}
                    <div className="p-5">
                        <h3
                            className="text-lg font-bold tracking-wider mb-1 transition-colors duration-300"
                            style={{
                                fontFamily: 'Orbitron, sans-serif',
                                color: isHovered ? hero.color : '#e8e8e8',
                            }}
                        >
                            {hero.name}
                        </h3>
                        <p className="text-xs text-[#00d4ff]/70 tracking-wider mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {hero.realName}
                        </p>
                        <p className="text-xs text-[#8899aa] mb-4 line-clamp-2 leading-relaxed">
                            {hero.shortDesc}
                        </p>

                        {/* Power tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {hero.powers.slice(0, 3).map((power, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] px-2 py-1 rounded border tracking-wider"
                                    style={{
                                        borderColor: `${hero.color}30`,
                                        color: `${hero.color}`,
                                        background: `${hero.color}10`,
                                        fontFamily: 'Rajdhani, sans-serif',
                                    }}
                                >
                                    {power}
                                </span>
                            ))}
                        </div>

                        {/* Actor and appearance */}
                        <div className="flex items-center justify-between border-t border-[rgba(226,54,54,0.1)] pt-3">
                            <div>
                                <p className="text-[10px] text-[#8899aa]/60 tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>ACTOR</p>
                                <p className="text-xs text-[#e8e8e8]">{hero.actor}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-[#8899aa]/60 tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>DEBUT</p>
                                <p className="text-[10px] text-[#00d4ff]/70">{hero.firstAppearance}</p>
                            </div>
                        </div>

                        {/* View details indicator */}
                        <motion.div
                            className="mt-4 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span
                                className="text-[10px] tracking-[0.3em] px-4 py-2 border rounded-full"
                                style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    borderColor: `${hero.color}40`,
                                    color: hero.color,
                                    background: `${hero.color}10`,
                                }}
                            >
                                VIEW DOSSIER →
                            </span>
                        </motion.div>
                    </div>

                    {/* Corner accents */}
                    <span
                        className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ borderColor: hero.color }}
                    />
                    <span
                        className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ borderColor: hero.color }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
