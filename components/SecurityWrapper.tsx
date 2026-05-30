"use client";

import { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable common developer tools keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C", "i", "j", "c"].includes(e.key)) {
        e.preventDefault();
      }
      // Cmd+Option+I, Cmd+Option+J, Cmd+Option+C (Mac)
      if (e.metaKey && e.altKey && ["I", "J", "C", "i", "j", "c"].includes(e.key)) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
      }
      // Cmd+U (View Source Mac)
      if (e.metaKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
      }
    };

    if (process.env.NODE_ENV === "production") {
      document.addEventListener("contextmenu", handleContextMenu);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (process.env.NODE_ENV === "production") {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return <>{children}</>;
}
