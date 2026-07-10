import * as React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function BlogCard({ title, excerpt, url, pubDate, categories, coverImage }) {
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 sm:p-6 border border-border hover:border-primary/40 hover:bg-accent/30 transition-all duration-300 -mx-4 sm:-mx-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3 flex-1 min-w-0">
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            {categories.length > 0 && (
              <span className="flex items-center gap-2">
                {categories.slice(0, 3).map((cat) => (
                  <span key={cat} className="text-primary/80 text-[10px] tracking-wider uppercase">
                    {cat}
                  </span>
                ))}
              </span>
            )}
          </div>
          <h3 className="font-bold tracking-tight text-base group-hover:text-primary transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
        <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors duration-300">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}