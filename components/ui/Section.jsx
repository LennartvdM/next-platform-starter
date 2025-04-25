'use client';
import { motion } from 'framer-motion';

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="scroll-mt-32 rounded-xl bg-white/70 p-10 backdrop-blur min-h-[80vh] flex flex-col justify-center"
    >
      {children}
    </motion.section>
  );
}
