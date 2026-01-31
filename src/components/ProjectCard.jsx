import * as React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight, Link } from "lucide-react";

export default function ProjectCard({ title, description, liveUrl = "", githubUrl, highlight = false, slug }) {
  const cardClasses = `group relative p-4 sm:p-6 rounded-lg hover:bg-accent/50 hover:shadow-lg transition-all duration-300 -mx-4 sm:-mx-6 flex flex-col justify-between ${!highlight ? 'h-56' : ''}`;

  return (
    <div className={cardClasses}>
      <a href={`/projects/${slug}`} className="absolute inset-0 z-10" aria-label={`View project: ${title}`}></a>
      <div className="space-y-3">
        <h3 className="font-bold tracking-tight text-lg group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{description}</p> 
      </div>
      <div className="flex justify-between items-center pt-4 z-20 relative">
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="transparent" asChild className="gap-2 hover:text-teal-500 transition-all duration-300">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Link className="h-4 w-4"/>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="transparent" asChild className="gap-2 hover:text-teal-500 transition-all duration-300">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Github className="h-4 w-4" />
                {/* Code */}
              </a>
            </Button>
          )}
        </div>
        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
            <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}