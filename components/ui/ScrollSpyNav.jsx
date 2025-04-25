'use client';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function ScrollSpyNav({ sections }) {
  const active = useActiveSection(sections.map(s => s.id));

  const jump = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="w-56 rounded-lg bg-slate-900/90 p-6 text-sm text-slate-300 backdrop-blur">
      {sections.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => jump(id)}
          className={`block w-full text-left mb-2 pl-3 transition-colors ${
            active === id ? 'text-white font-semibold' : 'hover:text-white'
          }`}
        >
          {title}
        </button>
      ))}
    </nav>
  );
}
