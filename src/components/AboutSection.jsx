import * as React from "react";

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-left">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground text-base leading-relaxed text-left">
        <p>
          As a strategic technologist with over <span className="text-primary font-semibold">6 years of experience</span>, I specialize in architecting and governing scalable, highly-reliable enterprise platforms. My expertise lies in driving a reliability culture through data-driven SLO adoption and empowering engineering teams with Platform-as-a-Service (PaaS) principles.
        </p>
        <p>
          I have a deep understanding of observability design using tools like <span className="font-semibold">Dynatrace</span> and <span className="font-semibold">GCP</span>, and I am proficient in Infrastructure-as-Code (IaC) with <span className="font-semibold">Terraform</span> and <span className="font-semibold">Ansible</span>. I am also passionate about leveraging AI and automation to define and execute resilient system strategies.
        </p>
      </div>
    </div>
  );
}

