import * as React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, demoUrl = "", githubUrl }) {
  return (
    <div className="group relative p-4 sm:p-6 rounded-lg hover:bg-accent/50 hover:shadow-lg transition-all duration-300 -mx-4 sm:-mx-6">
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="font-bold tracking-tight text-lg group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex gap-3 pt-2">
          {demoUrl && (
            <Button variant="outline" asChild className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" asChild className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
