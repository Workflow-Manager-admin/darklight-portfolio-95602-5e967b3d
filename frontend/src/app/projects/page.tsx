import React from "react";

// Publicly defined interface for portfolio projects
type Project = {
  name: string;
  description: string;
  url?: string;
};

// Sample projects (replace with your own!)
const projects: Project[] = [
  {
    name: "Modern Portfolio Website",
    description:
      "A responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://github.com/yourname/modern-portfolio",
  },
  {
    name: "Open Source Contribution",
    description: "Contributing accessibility & design improvements to OSS.",
    url: "",
  },
  {
    name: "Side Project – Task Tracker",
    description:
      "Minimal task tracking app focused on productivity and ease of use.",
    url: "",
  },
];

// PUBLIC_INTERFACE
export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-primary mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            className="p-6 border border-black/5 dark:border-white/10 rounded-lg shadow-sm bg-background hover:shadow-lg transition-shadow"
            key={project.name}
          >
            <h2 className="font-semibold text-accent text-xl mb-2">
              {project.url ? (
                <a
                  href={project.url}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="text-foreground/90 mb-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
