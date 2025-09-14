import * as React from "react";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = async() => {
    // e.preventDefault();
    const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
});

  }
  return (
    <section id="contact" className="container relative overflow-hidden rounded-lg border bg-background/10 backdrop-blur-md p-6 shadow-lg py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Looking to improve your system's reliability or need expertise in observability solutions? I'm open to discussing interesting opportunities and collaborations in the SRE space.
            </p>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <a href="mailto:aravindr597@gmail.com">
                <Mail className="h-4 w-4" />
                aravindr597@gmail.com
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <a href="tel:+918129883015">
                <Mail className="h-4 w-4" />
                +91 8129883015
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <a href="https://github.com/aravindr31" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Github Profile
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <a href="https://www.linkedin.com/in/aravind-r-954451118/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* New Resume Section */}
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold">Resume</h2>
            <p className="text-xl text-muted-foreground">
              Download my complete resume to learn more about my experience and skills in SRE, DevOps, and observability.
            </p>
            <Button className="w-full justify-start gap-2" asChild>
              <a href="https://drive.google.com/file/d/14mfTUPZ2ga8H5n602R8-IY2O2bfaD9A2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <h3 className="font-semibold text-xl mb-4">Quick Connect</h3>
          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
              <textarea
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message"
              />
            </div>
            <Button onClick={handleSubmit} className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}