"use client";

import React, { useEffect, useState, useCallback } from "react";

/**
 * PUBLIC_INTERFACE
 * ThemeToggle component provides light/dark/auto theme switching.
 * It manages theme persistence via localStorage and updates the root <html> element and Tailwind dark mode classes.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("auto");

  // Handler that applies the appropriate classes and attributes
  const applyTheme = useCallback((next: "light" | "dark" | "auto") => {
    const html = document.documentElement;

    // Remove all possible theme-related classes
    html.classList.remove("light", "dark");
    html.removeAttribute("data-theme");

    if (next === "light") {
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
    } else if (next === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      // Auto: follow system, explicit "auto" attribute for debug/tailwind
      html.setAttribute("data-theme", "auto");
      // Remove both to rely on prefers-color-scheme for Tailwind auto mode support
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, []);

  // Effect: on mount, restore persisted theme OR system-preferred theme
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    let restored: "light" | "dark" | "auto" = "auto";
    if (stored === "light" || stored === "dark" || stored === "auto") {
      restored = stored;
    }
    setTheme(restored);
    applyTheme(restored);

    // For "auto" mode: watch for system color scheme changes
    let m: MediaQueryList | null = null;
    const osChange = () => {
      if (window.localStorage.getItem("theme") === "auto") {
        applyTheme("auto");
      }
    };
    if (window.matchMedia) {
      m = window.matchMedia("(prefers-color-scheme: dark)");
      m.addEventListener("change", osChange);
    }
    return () => {
      // Clean up event listener
      if (m) {
        m.removeEventListener("change", osChange);
      }
    };
  }, [applyTheme]);

  // Function: when user explicitly changes theme
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
        type="button"
      >
        {/* sun icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
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
        type="button"
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
        type="button"
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
