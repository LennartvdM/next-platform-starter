import Section from '@/components/ui/Section';

const sections = [
  { id: 'time', title: 'Time-sensitive', body: 'Everything we do in neonatal care is measured in seconds …' },
  { id: 'dance', title: 'Like a dance', body: 'Great teams move with the rhythm of an orchestra …' },
  { id: 'cost', title: 'But this comes at a cost', body: 'Pressure to perform individual tasks can diminish team cohesion …' },
  { id: 'skills', title: 'Sharpening skills', body: 'Video reflection exposes blind spots and cements best practice …' },
  { id: 'team', title: 'Strengthening team dynamics', body: 'Through shared reflection we cultivate psychological safety …' },
  { id: 'persp', title: 'Broadening perspectives', body: 'Cross-disciplinary voices break the echo chamber …' },

  // two extra demo sections so you can scroll further
  { id: 'impact', title: 'Measuring impact', body: 'Data-driven results and continuous improvement …' },
  { id: 'future', title: 'Looking ahead', body: 'Scaling Neoflix beyond the NICU …' },
];

export const metadata = { title: 'Neoflix' };

export default function Page() {
  return (
    <>
      {sections.map(({ id, title, body }) => (
        <Section
          key={id}
          id={id}
          className="min-h-[85vh] rounded-xl bg-white/70 p-10 backdrop-blur"
        >
          <h2 className="mb-6 text-3xl font-bold">{title}</h2>
          <p className="text-lg text-slate-700">{body}</p>
        </Section>
      ))}
    </>
  );
}
