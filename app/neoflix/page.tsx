import Section from '@/components/ui/Section';
import ScrollSpySidebar from '@/components/ui/ScrollSpySidebar';

export const metadata = { title: 'Neoflix' };

const sections = [
  { id: 'intro',     title: 'Time-Sensitive Care'   },
  { id: 'dance',     title: 'Like a Dance'          },
  { id: 'pressure',  title: 'Pressure & Cohesion'   },
  { id: 'skills',    title: 'Sharpening Skills'     },
  { id: 'team',      title: 'Team Dynamics'         },
  { id: 'persp',     title: 'Broadening Perspective'}
];

export default function Page() {
  return (
    <div className="flex max-w-6xl mx-auto gap-10 pt-24">
      <ScrollSpySidebar sections={sections} />
      <main className="flex-1 space-y-40">
        {sections.map(s => (
          <Section key={s.id} id={s.id}>
            <h2 className="text-4xl font-bold mb-6">{s.title}</h2>
            <p className="text-lg text-slate-700 leading-8">  </p>
          </Section>
        ))}
      </main>
    </div>
  );
}
