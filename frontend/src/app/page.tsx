import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-2 text-center gap-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
          Hi, I&apos;m <span className="text-accent" style={{ color: '#ededed', fontFamily: 'Arial, sans-serif' }}>Your Giridharan</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-foreground/85">
          I build modern, user-centric web applications with exceptional quality, accessibility, and design. 
          This is my portfolio, handcrafted with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/projects"
          className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-full text-lg shadow transition-colors"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="border border-accent text-accent hover:bg-accent/10 px-6 py-2 rounded-full text-lg transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
