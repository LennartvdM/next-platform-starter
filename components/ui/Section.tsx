import { ReactNode } from 'react';

export default function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 min-h-[85vh]">
      {children}
    </section>
  );
}
