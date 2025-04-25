import { motion } from 'framer-motion';
import clsx from 'clsx';

interface Section {
  id: string;
  title: string;
}

interface Props {
  sections: Section[];
  activeId: string;
}

export default function ScrollSpySidebar({ sections, activeId }: Props) {
  const handleClick = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 overflow-y-auto bg-slate-900/90 p-6 text-sm text-slate-200 border-r border-slate-700 backdrop-blur-lg">
      {sections.map(({ id, title }) => {
        const active = activeId === id;
        return (
          <div key={id} className="relative mb-3 pl-4">
            {active && (
              <motion.span
                layoutId="bullet"

                className="absolute -left-1 top-0 h-full w-1 rounded bg-cyan-400"
              />
            )}
            <button
              onClick={() => handleClick(id)}
              className={clsx(
                'text-left transition-colors',
                active ? 'text-white font-semibold' : 'hover:text-white'
        )}
            >
              {title}
            </button>
          </div>
        );
      })}

      <hr className="my-4 border-slate-700" />

      {['contact', 'faq'].map((id) => (
        <div key={id} className="pl-4">
          <button
            onClick={() => handleClick(id)}
            className="mb-2 text-left text-slate-400 hover:text-white"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        </div>
      ))}
    </aside>
  );
}
