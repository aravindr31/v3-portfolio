import * as React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, demoUrl = "", githubUrl }) {
  return (
    <div className="group relative overflow-hidden rounded-sm border bg-background p-6 transition-all hover:shadow-xl">
      {/* <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-t from-green-400/90 to-transparent" /> */}
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold tracking-tight text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-4">
          {demoUrl && (
            <Button variant="outline" asChild className="gap-2">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" asChild className="gap-2">
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
