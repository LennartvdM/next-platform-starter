export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-32 ${className}`}>
      {children}
    </section>
  );
}
