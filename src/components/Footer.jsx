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
                                className="text-2xl font-bold text-[#c42b2b] mb-1"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-[10px] tracking-widest text-[#7a8a9a]/40 font-medium"
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
                        <div className="w-12 h-12 rounded-lg border border-[#c42b2b]/25 flex items-center justify-center mx-auto mb-3 bg-[#c42b2b]/5">
                            <span className="text-base font-bold text-[#c42b2b]" style={{ fontFamily: 'Inter, sans-serif' }}>A</span>
                        </div>
                        <h3
                            className="text-xs tracking-widest text-[#c42b2b]/40 mb-2 font-medium"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            AVENGERS INITIATIVE
                        </h3>
                        <p className="text-xs text-[#7a8a9a]/30 max-w-sm mx-auto leading-relaxed italic">
                            "There was an idea to bring together a group of remarkable people, to see if they could become something more."
                        </p>
                    </div>
                </motion.div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-6" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <span className="text-[10px] tracking-wider text-[#7a8a9a]/20 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        STRATEGIC HOMELAND INTERVENTION ENFORCEMENT LOGISTICS DIVISION
                    </span>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                            <span className="text-[10px] tracking-wider text-emerald-500/40 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ONLINE
                            </span>
                        </div>
                        <span className="text-[10px] text-white/[0.06]">|</span>
                        <span className="text-[10px] tracking-wider text-[#7a8a9a]/20 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                            © {new Date().getFullYear()} AVENGERS UNIVERSE
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
