import Section from '@/components/ui/Section';

export const metadata = { title: 'Neoflix' };

const blocks = [
  ['intro',     'Neoflix',                     'Everything we do in neonatal care is measured in seconds…'],
  ['dance',     'Like a dance',                'Great teams move with rhythm…'],
  ['cost',      'But this comes at a cost',    'Pressure can diminish team cohesion…'],
  ['skills',    'Sharpening skills',           'Video reflection cements best practice…'],
  ['team',      'Strengthening team dynamics', 'Shared reflection → psychological safety…'],
  ['persp',     'Broadening perspectives',     'Cross-disciplinary voices break the echo chamber…'],
];

export default function Page() {
  return (
    <>
      {blocks.map(([id, h, txt]) => (
        <Section key={id} id={id}>
          <h2 className="mb-6 text-3xl font-bold">{h}</h2>
          <p className="text-slate-700 max-w-prose">{txt.repeat(6)}</p>
        </Section>
      ))}
      <Section id="contact">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-700">
          Mail us:&nbsp;
          <a href="mailto:info@neoflix.care" className="text-cyan-600 underline">
            info@neoflix.care
          </a>
        </p>
      </Section>
    </>
  );
}
