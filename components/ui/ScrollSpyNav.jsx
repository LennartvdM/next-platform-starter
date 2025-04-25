'use client';
import { useActiveSection } from '@/hooks/useActiveSection';
export default function ScrollSpyNav({ sections }) {
  const active = useActiveSection(sections.map(s=>s.id));
  return (
    <nav className="flex flex-col gap-2 text-sm">
      {sections.map(({id,title})=>(
        <a key={id} href={`#${id}`}
           className={`transition ${active===id?'font-semibold text-white':'text-gray-400 hover:text-white'}`}>
          {title}
        </a>
      ))}
    </nav>
  );
}
