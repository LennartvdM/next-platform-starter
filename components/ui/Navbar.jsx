import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-8 py-4 shadow-sm">
      <Link href="/neoflix">Neoflix</Link>
      <Link href="/publications">Publications</Link>
      <Link href="/neoflix#contact">Contact</Link>
      <Link href="/toolbox">Toolbox</Link>
    </nav>
  );
}
