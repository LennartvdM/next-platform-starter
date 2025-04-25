export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-xl bg-white/70 p-10 backdrop-blur"
    >
      {children}
    </section>
  );
}
