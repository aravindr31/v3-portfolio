import * as React from "react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">#05 ——</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-left mb-4">Get In Touch</h2>
        <p className="text-base text-muted-foreground leading-relaxed text-left">
          Looking to improve your system's reliability or need expertise in observability solutions? I'm open to discussing interesting opportunities and collaborations in the SRE space.
        </p>
        <div className="mt-4">
            <a href="https://assets.aravindr.in/resume/aravindr_sre_devops.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="transparent" className="gap-2 hover:text-primary transition-all duration-300 font-mono text-xs tracking-widest uppercase border border-primary/40 hover:border-primary px-4 py-2">
                  Checkout My Full Resume
                  </Button>
            </a>
        </div>
      </div>
    </div>
  );
}
