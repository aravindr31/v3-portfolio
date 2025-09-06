import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon: Icon, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border">
        <Icon className="w-6 h-6" />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{name}</span>
    </motion.div>
  );
};

export default SkillIcon;
