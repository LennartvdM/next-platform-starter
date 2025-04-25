// components/ui/Section.jsx
export default function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      {children}
    </section>
  );
}
