import Link from 'next/link';
const nav=[
  {href:'/',label:'Home'},
  {href:'/neoflix',label:'Neoflix'},
  {href:'/publications',label:'Publications'},
  {href:'/neoflix#contact',label:'Contact'},
  {href:'/toolbox',label:'Toolbox'},
];
export default function Navbar(){
  return(
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl gap-6 p-4 text-sm">
        {nav.map(n=>(
          <Link key={n.href} href={n.href}
            className="uppercase tracking-wide hover:text-teal-400 transition">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
