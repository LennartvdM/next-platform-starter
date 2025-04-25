import Section from '@/components/ui/Section';
export const metadata={title:'Neoflix'};
export default function Page(){
  return(
    <>
      <Section id="intro"><h1 className="text-5xl font-bold">Neoflix</h1></Section>
      <Section id="features"><p>✨ Rich micro-interactions coming soon…</p></Section>
      <Section id="contact"><p>📮 Contact: info@neoflix.care</p></Section>
    </>
  );
}
