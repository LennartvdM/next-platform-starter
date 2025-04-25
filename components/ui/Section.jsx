export default function Section({ id, children }) {
  return (
    <section className="min-h-screen flex flex-col justify-center" id={id} className="scroll-mt-24 py-32 first:pt-0 last:pb-0">
      {children}
    </section>
  );
}
