import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">#04 ——</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-left">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="px-2.5 py-1 text-xs font-mono tracking-wide border border-primary/30 text-primary/80 dark:text-primary/80 hover:border-primary hover:text-primary transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
