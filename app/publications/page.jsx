import Section from '@/components/ui/Section';

export const metadata = { title: 'Publications' };

export default function Page() {
  return (
    <>
      <Section id="overview">
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <p className="text-slate-700 max-w-prose">
          Overview text … {`Research overview. `.repeat(30)}
        </p>
      </Section>

      <Section id="papers">
        <h2 className="text-3xl font-bold mb-6">Papers</h2>
        <p className="text-slate-700 max-w-prose">
          Papers list goes here … {`Paper abstract. `.repeat(40)}
        </p>
      </Section>

      <Section id="press">
        <h2 className="text-3xl font-bold mb-6">Press</h2>
        <p className="text-slate-700 max-w-prose">
          Press coverage coming soon … {`Press snippet. `.repeat(40)}
        </p>
      </Section>
    </>
  );
}
