import * as React from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-left mb-4">Get In Touch</h2>
        <p className="text-base text-muted-foreground leading-relaxed text-left">
          Looking to improve your system's reliability or need expertise in observability solutions? I'm open to discussing interesting opportunities and collaborations in the SRE space.
        </p>
        <div className="mt-4">
            <a href="/resume.md" target="_blank" rel="noopener noreferrer">
                <Button variant="transparent" className="gap-2 hover:text-teal-500 transition-all duration-300">
                  Checkout My Full Resume
                  </Button>
            </a>
        </div>
      </div>
    </div>
  );
}
