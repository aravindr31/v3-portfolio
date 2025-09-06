import * as React from "react";
import { Code2, Rocket, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-lg border bg-background/30 backdrop-blur-md p-6 shadow-lg">
      <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Results-driven Senior Site Reliability Engineer at Ford Motor Company with demonstrated expertise in architecting enterprise-scale observability solutions and optimizing infrastructure performance. Specializing in implementing comprehensive observability frameworks utilizing Dynatrace and Google Cloud Platform, while championing SLO adoption for enhanced reliability metrics.
            </p>
            <p>
              Proven track record of developing innovative AI-powered solutions for incident management, resulting in a 30% reduction in Mean Time To Resolution (MTTR). Extensive experience in infrastructure automation using Terraform and Ansible, coupled with the implementation of robust monitoring solutions that drive operational excellence.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <Code2 className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Technical Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Python • JavaScript • Go • Bash<br />
                  Docker • Kubernetes • OpenShift<br />
                  Terraform • Ansible • Jenkins
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <Rocket className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Monitoring & Cloud</h3>
                <p className="text-muted-foreground text-sm">
                  Dynatrace • ELK Stack • Grafana<br />
                  Azure Cloud • GCP • Akamai<br />
                  SLOs • Error Budgets
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 lg:col-span-2">
              <div className="space-y-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Current Focus</h3>
                <p className="text-muted-foreground text-sm">Developing AI-powered tools for SRE automation, implementing robust observability solutions, and driving SLO adoption across enterprise applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
