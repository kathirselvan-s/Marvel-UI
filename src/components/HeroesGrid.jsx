import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroCard from './HeroCard';
import HeroPanel from './HeroPanel';
import { heroes } from '../data/heroes';

export default function HeroesGrid() {
    const [selectedHero, setSelectedHero] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredHeroes = useMemo(() => {
        if (!searchQuery.trim()) return heroes;
        const q = searchQuery.toLowerCase();
        return heroes.filter(
            (h) =>
                h.name.toLowerCase().includes(q) ||
                h.realName.toLowerCase().includes(q) ||
                h.actor.toLowerCase().includes(q) ||
                h.powers.some((p) => p.toLowerCase().includes(q))
        );
    }, [searchQuery]);

    return (
        <section id="heroes" className="relative py-24 px-4 md:px-8 lg:px-12">
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
                        S.H.I.E.L.D. Personnel Database
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold tracking-wide mt-3 mb-3"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            background: 'linear-gradient(135deg, #c42b2b, #e04040, #d4a017)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Heroes
                    </h2>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c42b2b]/40 to-transparent mx-auto mb-5" />
                    <p className="text-sm text-[#7a8a9a] max-w-lg mx-auto leading-relaxed">
                        Earth's Mightiest Heroes assembled to protect the world from threats beyond any single hero's capability.
                    </p>
                </motion.div>

                {/* Search bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="max-w-md mx-auto mt-8 relative z-50"
                >
                    <div className="relative group">
                        <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#c42b2b]/20 via-[#4dc9f6]/10 to-[#c42b2b]/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
                        <div className="relative flex items-center bg-[#0d1b2a]/90 border border-white/[0.08] rounded-lg overflow-hidden group-focus-within:border-white/[0.15] transition-all duration-300">
                            <span className="pl-4 text-[#7a8a9a]/40">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search heroes by name, actor, or powers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 py-3 bg-transparent text-sm text-[#e0e0e0] placeholder-[#7a8a9a]/30 outline-none tracking-wide"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="px-4 text-[#c42b2b]/40 hover:text-[#c42b2b] transition-colors"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                    {searchQuery && (
                        <p className="text-[10px] tracking-wider text-[#7a8a9a]/40 mt-2 text-center font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {filteredHeroes.length} HEROES FOUND
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Heroes grid — simple, no parallax offset */}
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                    {filteredHeroes.map((hero, index) => (
                        <HeroCard
                            key={hero.id}
                            hero={hero}
                            index={index}
                            onClick={setSelectedHero}
                        />
                    ))}
                </div>

                {filteredHeroes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <span className="text-3xl mb-4 block opacity-50">🔍</span>
                        <p className="text-[#7a8a9a] tracking-wide text-sm">
                            No heroes found matching "{searchQuery}"
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Hero detail panel */}
            {selectedHero && (
                <HeroPanel hero={selectedHero} onClose={() => setSelectedHero(null)} />
            )}
        </section>
    );
}
