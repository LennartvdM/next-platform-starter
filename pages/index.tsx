import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center">
      {/* Logo placeholder */}
      <Image src="/next.svg" alt="logo" width={120} height={120} />
      <h1 className="mt-6 text-5xl font-extrabold text-slate-900">Neoflix</h1>
      <p className="mt-4 text-xl text-slate-600">
        <span className="font-semibold text-cyan-600">Record</span>,{' '}
        <span className="font-semibold text-cyan-600">Reflect</span>,{' '}
        <span className="font-semibold text-cyan-600">Refine</span>
      </p>
      <p className="mt-2 text-slate-500">
        Improve patient care through video reflection.
      </p>
    </div>
  );
}
