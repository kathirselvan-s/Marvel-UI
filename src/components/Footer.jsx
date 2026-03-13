import { motion } from 'framer-motion';
import { heroes } from '../data/heroes';
import { phases } from '../data/movies';

export default function Footer() {
    const totalMovies = phases.reduce((acc, phase) => acc + phase.movies.length, 0);

    const stats = [
        { label: 'HEROES', value: heroes.length, icon: '⬡' },
        { label: 'MOVIES', value: totalMovies, icon: '◈' },
        { label: 'PHASES', value: phases.length, icon: '◇' },
        { label: 'YEARS', value: '2008-2019', icon: '◆' },
    ];

    return (
        <footer id="about" className="relative py-20 px-4 md:px-8 lg:px-12 border-t border-[rgba(226,54,54,0.1)]">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#050d1a] to-transparent" />

            <div className="relative w-full max-w-[1600px] mx-auto">
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 rounded-lg border border-[rgba(226,54,54,0.1)] bg-[#0a1628]/30 hover:border-[rgba(226,54,54,0.3)] transition-all duration-300 group"
                        >
                            <span className="text-lg mb-2 block opacity-50 group-hover:opacity-100 transition-opacity">
                                {stat.icon}
                            </span>
                            <p
                                className="text-2xl md:text-3xl font-black text-[#e23636] mb-1"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-[10px] tracking-[0.3em] text-[#8899aa]/50"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Avengers insignia */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block">
                        <div className="w-16 h-16 rounded-full border-2 border-[#e23636]/30 flex items-center justify-center mx-auto mb-4 relative">
                            <span
                                className="text-xl font-black text-[#e23636]"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                A
                            </span>
                            <div className="absolute inset-0 rounded-full animate-ping bg-[#e23636]/10" style={{ animationDuration: '4s' }} />
                        </div>
                        <h3
                            className="text-sm tracking-[0.5em] text-[#e23636]/60 mb-2"
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                            AVENGERS INITIATIVE
                        </h3>
                        <p className="text-xs text-[#8899aa]/40 tracking-wider max-w-md mx-auto">
                            "There was an idea to bring together a group of remarkable people, to see if they could become something more."
                        </p>
                    </div>
                </motion.div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e23636]/20 to-transparent mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] tracking-wider text-[#8899aa]/30" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            ◆ STRATEGIC HOMELAND INTERVENTION ENFORCEMENT LOGISTICS DIVISION ◆
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                            <span className="text-[10px] tracking-wider text-[#00ff88]/50" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                ONLINE
                            </span>
                        </div>
                        <span className="text-[10px] text-[#8899aa]/20">|</span>
                        <span className="text-[10px] tracking-wider text-[#8899aa]/30" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            © {new Date().getFullYear()} AVENGERS UNIVERSE
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
