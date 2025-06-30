import React from "react";

// PUBLIC_INTERFACE
export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-primary mb-2">Contact</h1>
      <p className="text-lg text-foreground">
        Interested in working together or have any questions? Reach out!
      </p>
      <div className="flex flex-col gap-2 text-foreground/90 font-mono">
        <div>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:your@email.com"
            className="text-accent hover:underline"
          >
            your@email.com
          </a>
        </div>
        <div>
          <span className="font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/yourname"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourname
          </a>
        </div>
        <div>
          <span className="font-medium">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/yourname"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourname
          </a>
        </div>
      </div>
    </section>
  );
}
