'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface Section { id: string; title: string }

export default function ScrollSpySidebar({ sections }:{sections:Section[]}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        const hit = entries.find(e => e.isIntersecting);
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      el && obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <aside className="sticky top-24 w-52 self-start space-y-2">
      {sections.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            'block pl-3 text-sm hover:text-cyan-500 transition',
            active === id ? 'font-semibold text-cyan-500' : 'text-slate-500'
          )}
        >
          {title}
        </a>
      ))}
    </aside>
  );
}
