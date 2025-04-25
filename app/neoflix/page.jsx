import Section from '@/components/ui/Section';

export const metadata = { title: 'Neoflix' };

export default function Page() {
  return (
    <>
      <Section id="intro"><h1 className="text-3xl font-bold">Neoflix</h1></Section>
      <Section id="features"><p>Feature list coming soon…</p></Section>
      <Section id="contact"><p>Contact section placeholder.</p></Section>
    </>
  );
}
