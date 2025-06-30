import React from "react";

// PUBLIC_INTERFACE
export function Footer() {
  return (
    <footer className="w-full py-4 border-t border-black/5 dark:border-white/10 flex items-center justify-center bg-background text-foreground text-sm">
      <p>
        &copy; {new Date().getFullYear()} Your Name &ndash; Powered by{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Next.js
        </a>
      </p>
    </footer>
  );
}
