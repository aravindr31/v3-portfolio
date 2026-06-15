import * as React from "react";

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">#01 ——</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-left">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-left">
        <p>
          I'm a site reliability engineer with a deep focus on <span className="text-foreground font-semibold">observability and platform engineering</span>. I take pride in building systems that give developers clear, actionable insight into their applications — from well-tuned SLOs and dashboards to auto-instrumented traces. My best work lives at the intersection of infrastructure and developer experience, where reliable systems meet self-service automation.
        </p>
        <p>
          Currently at <span className="text-foreground font-semibold">Ford Motor Company</span>, where I work on the Vehicle Commerce SRE team. I lead observability engineering across our eCommerce platform — scaling <span className="text-foreground font-semibold">Dynatrace</span> coverage to 250+ applications, and recently leading a FinOps-driven migration to a fully open-source stack built on <span className="text-foreground font-semibold">Grafana, Beyla, Tempo, Mimir, Loki, and Cilium</span>. I also sole-engineered an internal developer platform that consolidated Akamai and Redis operations into a self-service tool, eliminating over 100 daily manual requests.
        </p>
        <p>
          Prior to Ford, I spent <span className="text-foreground font-semibold">4.5 years embedded as an SRE at QVC</span> through Cognizant — a high-traffic live commerce platform operating across 5 international markets. Before that I worked as a freelance backend engineer building ecommerce systems for local businesses. These experiences across broadcast commerce, large-scale infrastructure, and early freelance work shaped how I think about building resilient platforms that serve real users under real pressure.
        </p>
        <p>
          Outside of work, I'm usually digging into new observability tooling, experimenting with AI-assisted automation, or unwinding with a good game.
        </p>
      </div>
    </div>
  );
}

