import Section from '@/components/ui/Section';
export const metadata={title:'Publications'};
export default function Page(){
  return(
    <>
      <Section id="overview"><h1 className="text-5xl font-bold">Publications</h1></Section>
      <Section id="papers"><p>📄 Paper list placeholder (make tall to test scroll).</p></Section>
      <Section id="press"><p>📰 Press coverage placeholder.</p></Section>
    </>
  );
}
