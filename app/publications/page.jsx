import Section from '@/components/ui/Section';

export const metadata = { title: 'Publications' };

export default function Page() {
  return (
    <>
      <Section id="overview"><h1 className="text-3xl font-bold">Publications</h1></Section>
      <Section id="papers"><p>Papers list goes here…</p></Section>
      <Section id="press"><p>Press coverage coming soon…</p></Section>
    </>
  );
}
