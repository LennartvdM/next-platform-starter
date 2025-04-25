// components/ui/ScrollSpyNav.jsx
'use client';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function ScrollSpyNav({ sections }) {
  const active = useActiveSection(sections.map(s => s.id));
  return (
    <nav className="flex flex-col gap-2">
      {sections.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm transition ${
            active === id ? 'font-semibold' : 'text-gray-500'
          }`}
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
