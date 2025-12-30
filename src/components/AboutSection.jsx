import * as React from "react";

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-left">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground text-base leading-relaxed text-left">
        <p>
          Senior Site Reliability Engineer at <span className="text-primary font-semibold">Ford Motor Company</span> with <span className="font-semibold">6 years of experience</span> architecting enterprise-scale observability solutions and driving operational excellence.
        </p>
        <p>
          I specialize in implementing comprehensive monitoring frameworks with <span className="font-semibold">Dynatrace</span> and <span className="font-semibold">Google Cloud Platform</span>, while championing <span className="font-semibold">SLO adoption</span> and error budget policies to enhance system reliability.
        </p>
        <p>
          Passionate about leveraging <span className="font-semibold">AI/LLMs</span> for automation—I've developed innovative solutions that reduced incident resolution time by <span className="text-primary font-semibold">30%</span>. Expert in infrastructure-as-code with <span className="font-semibold">Terraform</span> and <span className="font-semibold">Ansible</span>.
        </p>
      </div>
    </div>
  );
}

