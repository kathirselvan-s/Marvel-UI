import { motion } from 'framer-motion';
import { heroes } from '../data/heroes';
import { phases } from '../data/movies';

export default function Footer() {
    const totalMovies = phases.reduce((acc, phase) => acc + phase.movies.length, 0);

    const stats = [
        { label: 'HEROES', value: heroes.length },
        { label: 'MOVIES', value: totalMovies },
        { label: 'PHASES', value: phases.length },
        { label: 'YEARS', value: '2008–2019' },
    ];

    return (
        <footer id="about" className="relative py-20 px-4 md:px-8 lg:px-12 border-t border-white/[0.04]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#070f1a] via-[#0a1420] to-transparent" />

            <div className="relative w-full max-w-[1400px] mx-auto">
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center p-5 rounded-xl border border-white/[0.05] bg-[#0d1b2a]/30 hover:border-white/[0.1] transition-all duration-400 group"
                        >
                            <p
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#c42b2b] mb-2"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-xs md:text-sm tracking-[0.3em] text-[#7a8a9a]/70 font-bold"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Insignia */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-block">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-[#c42b2b]/30 flex items-center justify-center mx-auto mb-5 bg-[#c42b2b]/5 shadow-[0_0_20px_rgba(196,43,43,0.1)]">
                            <span className="text-2xl md:text-3xl font-bold text-[#c42b2b]" style={{ fontFamily: 'Inter, sans-serif' }}>A</span>
                        </div>
                        <h3
                            className="text-base md:text-lg tracking-[0.3em] text-[#c42b2b]/60 mb-3 font-semibold"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            AVENGERS INITIATIVE
                        </h3>
                        <p className="text-sm md:text-base text-[#7a8a9a]/60 max-w-lg mx-auto leading-relaxed italic font-medium">
                            "There was an idea to bring together a group of remarkable people, to see if they could become something more."
                        </p>
                    </div>
                </motion.div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-6" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3 py-4">
                    <span className="text-[11px] md:text-sm tracking-[0.25em] text-[#7a8a9a]/40 font-semibold text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                        STRATEGIC HOMELAND INTERVENTION ENFORCEMENT LOGISTICS DIVISION
                    </span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                            <span className="text-xs md:text-sm tracking-[0.2em] text-emerald-500/70 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ONLINE
                            </span>
                        </div>
                        <span className="text-sm text-white/[0.08]">|</span>
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#7a8a9a]/40 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                            © {new Date().getFullYear()} AVENGERS UNIVERSE
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
