import React from "react";

// PUBLIC_INTERFACE
export default function About() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-primary mb-2">About Me</h1>
      <p className="text-lg leading-relaxed text-foreground">
        Hi, I&apos;m <span className="text-accent font-medium">Your Name</span>, a passionate developer dedicated to building high-quality, modern web experiences. 
        <br />
        <br />
        I specialize in frontend engineering, accessibility, and creating beautiful, functional UI with a minimalistic aesthetic.
      </p>
      <div className="pt-2">
        <ul className="list-disc ml-4 space-y-1 text-foreground/80 font-mono text-base">
          <li>🌱 Enthusiastic about learning new technologies</li>
          <li>🛠️ Experienced with TypeScript, Next.js, Tailwind CSS</li>
          <li>⭐ Focused on clean, maintainable code</li>
        </ul>
      </div>
    </section>
  );
}
