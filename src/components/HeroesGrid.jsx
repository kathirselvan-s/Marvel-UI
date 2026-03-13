import { useState, useMemo } from 'react';
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
                        ◆ S.H.I.E.L.D. Personnel Database ◆
                    </span>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-wider mt-4 mb-4 glow-text"
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            background: 'linear-gradient(135deg, #e23636, #ff6b6b, #f0b323)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        HEROES
                    </h2>
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#e23636] to-transparent mx-auto mb-6" />
                    <p className="text-sm text-[#8899aa] max-w-xl mx-auto tracking-wide">
                        Earth's Mightiest Heroes assembled to protect the world from threats beyond any single hero's capability.
                    </p>
                </motion.div>

                {/* Search bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-lg mx-auto mt-8"
                >
                    <div className="relative group">
                        <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#e23636]/30 via-[#00d4ff]/20 to-[#e23636]/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-[1px]" />
                        <div className="relative flex items-center bg-[#0a1628]/80 border border-[rgba(226,54,54,0.15)] rounded-lg overflow-hidden group-focus-within:border-[rgba(226,54,54,0.4)] transition-all duration-300">
                            <span className="pl-4 text-[#8899aa]/50">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search heroes by name, actor, or powers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 bg-transparent text-sm text-[#e8e8e8] placeholder-[#8899aa]/40 outline-none tracking-wider"
                                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="px-4 text-[#e23636]/50 hover:text-[#e23636] transition-colors"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                    {searchQuery && (
                        <p className="text-[10px] tracking-wider text-[#8899aa]/50 mt-2 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {filteredHeroes.length} HEROES FOUND
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Heroes grid */}
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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
                        <span className="text-4xl mb-4 block">🔍</span>
                        <p className="text-[#8899aa] tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
