import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import experiencesData from "../data/experiences.json";

const experiences = experiencesData;

export default function ExperienceSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-left">Experience</h2>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <a 
              href={exp.companyUrl || "#experience"} 
              target={exp.companyUrl ? "_blank" : "_self"}
              rel={exp.companyUrl ? "noopener noreferrer" : undefined}
              className="block p-4 sm:p-6 rounded-lg hover:bg-accent/50 hover:shadow-lg transition-all duration-300 -mx-4 sm:-mx-6"
            >
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-base font-semibold text-primary">{exp.company}</p>
                  </div>
                  {exp.companyUrl && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 mt-1" />
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:hidden" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-teal-500 flex-shrink-0 leading-none mt-1">→</span>
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
