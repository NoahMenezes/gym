"use client";

import { useEffect } from "react";

export default function HardNavigation() {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      // If it's an internal link and not opening in a new tab
      if (
        anchor && 
        anchor.href && 
        anchor.href.startsWith(window.location.origin) &&
        anchor.target !== "_blank" &&
        !anchor.hasAttribute("download")
      ) {
        e.preventDefault();
        window.location.href = anchor.href;
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return null;
}
