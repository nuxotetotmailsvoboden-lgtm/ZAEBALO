'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '200+', label: 'готовых решений' },
  { number: '1000+', label: 'довольных клиентов' },
  { number: '50+', label: 'функций в боте' },
  { number: '24/7', label: 'поддержка' },
];

export default function Stats() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="stat-card"
        >
          <div className="text-2xl md:text-3xl font-bold neon-text">{stat.number}</div>
          <div className="text-xs md:text-sm text-purple-200/50">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
