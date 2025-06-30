"use client";

import React, { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("auto");

  useEffect(() => {
    // Load theme from localStorage, fallback to auto
    const stored = window.localStorage.getItem("theme");
    if (
      stored === "light" ||
      stored === "dark" ||
      stored === "auto"
    ) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      setTheme("auto");
      applyTheme("auto");
    }
  }, []);

  function applyTheme(next: "light" | "dark" | "auto") {
    // Remove any set theme classes and data-theme attr
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.removeAttribute("data-theme");
    if (next === "light") {
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
    } else if (next === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "auto");
      // listen for OS changes
      if (window.matchMedia) {
        const m = window.matchMedia("(prefers-color-scheme: dark)");
        if (m.matches) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }
    }
  }

  function handleChange(next: "light" | "dark" | "auto") {
    setTheme(next);
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <div className="flex gap-1 items-center">
      <button
        aria-label="Light mode"
        title="Light mode"
        className={`rounded p-1 hover:bg-accent/10 transition-colors ${
          theme === "light" ? "text-accent" : ""
        }`}
        onClick={() => handleChange("light")}
      >
        {/* sun icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="5.64" y1="5.64" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="18.36" y2="18.36" />
            <line x1="5.64" y1="18.36" x2="7.05" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="18.36" y2="5.64" />
          </g>
        </svg>
      </button>
      <button
        aria-label="Dark mode"
        title="Dark mode"
        className={`rounded p-1 hover:bg-accent/10 transition-colors ${
          theme === "dark" ? "text-accent" : ""
        }`}
        onClick={() => handleChange("dark")}
      >
        {/* moon icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button
        aria-label="Auto (system) mode"
        title="Auto mode"
        className={`rounded p-1 hover:bg-accent/10 transition-colors ${
          theme === "auto" ? "text-accent" : ""
        }`}
        onClick={() => handleChange("auto")}
      >
        {/* auto icon (circle with half moon) */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 21A9 9 0 0 0 12 3v18Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
