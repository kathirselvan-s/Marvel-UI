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
        setRotateX((y - centerY) / 25);
        setRotateY((centerX - x) / 25);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={() => onClick(hero)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group cursor-pointer relative"
            style={{ perspective: '1000px' }}
        >
            <div
                className="relative rounded-xl overflow-hidden transition-all duration-500 ease-out"
                style={{
                    transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'translateY(-6px)' : 'translateY(0)'}`,
                    transformStyle: 'preserve-3d',
                    boxShadow: isHovered
                        ? `0 20px 40px -12px ${hero.color}30, 0 12px 24px -8px rgba(0,0,0,0.4)`
                        : '0 4px 16px -4px rgba(0,0,0,0.3)',
                }}
            >
                {/* Border glow */}
                <div
                    className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                    style={{
                        background: `linear-gradient(135deg, ${hero.color}50, transparent 50%, ${hero.accentColor}40)`,
                        filter: 'blur(1px)',
                    }}
                />

                {/* Card body */}
                <div className="relative bg-[#0d1b2a]/95 backdrop-blur-md border border-white/[0.06] group-hover:border-white/[0.12] rounded-xl overflow-hidden transition-all duration-500 z-[1]">
                    {/* Hero image */}
                    <div className="relative h-72 overflow-hidden">
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Gradient overlays */}
                        <div
                            className="absolute inset-0 opacity-15 mix-blend-color transition-opacity duration-500 group-hover:opacity-5"
                            style={{ background: `linear-gradient(135deg, ${hero.color}, transparent)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/20 to-transparent" />

                        {/* Badge */}
                        <div
                            className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] tracking-wider border backdrop-blur-sm"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                background: `${hero.color}20`,
                                borderColor: `${hero.color}35`,
                                color: 'rgba(255,255,255,0.9)',
                                letterSpacing: '0.08em',
                            }}
                        >
                            {hero.emoji} AVENGER
                        </div>

                        {/* Subtle scanline on hover */}
                        {isHovered && (
                            <motion.div
                                className="absolute left-0 right-0 h-px z-10 pointer-events-none"
                                style={{ background: `linear-gradient(90deg, transparent, ${hero.color}80, transparent)` }}
                                initial={{ top: '0%' }}
                                animate={{ top: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                        )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                        <h3
                            className="text-base font-semibold tracking-wide mb-1 transition-colors duration-300"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                color: isHovered ? hero.color : '#e0e0e0',
                            }}
                        >
                            {hero.name}
                        </h3>
                        <p className="text-xs text-[#4dc9f6]/60 tracking-wide mb-2.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                            {hero.realName}
                        </p>
                        <p className="text-xs text-[#7a8a9a] mb-4 line-clamp-2 leading-relaxed">
                            {hero.shortDesc}
                        </p>

                        {/* Power tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {hero.powers.slice(0, 3).map((power, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] px-2 py-0.5 rounded-md border tracking-wide transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? `${hero.color}50` : `${hero.color}25`,
                                        color: isHovered ? hero.color : `${hero.color}cc`,
                                        background: isHovered ? `${hero.color}15` : `${hero.color}08`,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    {power}
                                </span>
                            ))}
                        </div>

                        {/* Metadata row */}
                        <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                            <div>
                                <p className="text-[10px] text-[#7a8a9a]/50 tracking-wider font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>ACTOR</p>
                                <p className="text-xs text-[#e0e0e0]/80">{hero.actor}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-[#7a8a9a]/50 tracking-wider font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>DEBUT</p>
                                <p className="text-[10px] text-[#4dc9f6]/50">{hero.firstAppearance}</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div
                            className="mt-3 text-center overflow-hidden transition-all duration-400 ease-out"
                            style={{
                                maxHeight: isHovered ? '40px' : '0px',
                                opacity: isHovered ? 1 : 0,
                            }}
                        >
                            <span
                                className="inline-block text-[10px] tracking-widest px-4 py-1.5 border rounded-md font-medium"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    borderColor: `${hero.color}30`,
                                    color: hero.color,
                                    background: `${hero.color}08`,
                                }}
                            >
                                VIEW DOSSIER →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
