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
      <h2 className="text-3xl font-bold tracking-tight text-left">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
