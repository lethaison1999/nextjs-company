"use client";

import { useEffect, useState } from "react";

export function TableOfContents({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0% -60% 0%" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24 space-y-2 text-sm">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`block ${
            active === section.id
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
