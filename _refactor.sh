#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# 0) Sanity-check location
###############################################################################
[[ -f package.json ]] || { echo "❌  run me from repo root"; exit 1; }

###############################################################################
# 1) Ensure directories
###############################################################################
mkdir -p components/layouts components/ui hooks config app

###############################################################################
# 2) Layout / UI primitives (over-write safe stubs)
###############################################################################
cat > components/layouts/SidebarLayout.jsx <<'EOF'
import Navbar from '@/components/ui/Navbar';
import ScrollSpyNav from '@/components/ui/ScrollSpyNav';
export default function SidebarLayout({ sections=[], children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <aside className="sticky top-0 h-screen w-60 hidden md:block p-4 bg-black/10 backdrop-blur">
          <ScrollSpyNav sections={sections} />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
EOF

cat > components/ui/Section.jsx <<'EOF'
export default function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-32 first:pt-0 last:pb-0">
      {children}
    </section>
  );
}
EOF

cat > components/ui/ScrollSpyNav.jsx <<'EOF'
'use client';
import { useActiveSection } from '@/hooks/useActiveSection';
export default function ScrollSpyNav({ sections }) {
  const active = useActiveSection(sections.map(s=>s.id));
  return (
    <nav className="flex flex-col gap-2 text-sm">
      {sections.map(({id,title})=>(
        <a key={id} href={`#${id}`}
           className={`transition ${active===id?'font-semibold text-white':'text-gray-400 hover:text-white'}`}>
          {title}
        </a>
      ))}
    </nav>
  );
}
EOF

cat > hooks/useActiveSection.js <<'EOF'
'use client';
import {useEffect,useState} from'react';
export function useActiveSection(ids=[]){
  const [active,setActive]=useState(ids[0]||null);
  useEffect(()=>{
    const o=new IntersectionObserver(es=>{
      const v=es.find(e=>e.isIntersecting);
      if(v?.target.id) setActive(v.target.id);
    },{rootMargin:'-45% 0px -45% 0px'});
    ids.forEach(id=>{const el=document.getElementById(id);el&&o.observe(el)});
    return()=>o.disconnect();
  },[ids]);
  return active;
}
EOF

###############################################################################
# 3) Navbar (overwrite to ensure correct links)
###############################################################################
cat > components/ui/Navbar.jsx <<'EOF'
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
EOF

###############################################################################
# 4) Section config
###############################################################################
cat > config/sections.js <<'EOF'
export const neoflixSections=[
  {id:'intro',title:'Intro'},
  {id:'features',title:'Features'},
  {id:'contact',title:'Contact'},
];

export const publicationsSections=[
  {id:'overview',title:'Overview'},
  {id:'papers',title:'Papers'},
  {id:'press',title:'Press'},
];
EOF

###############################################################################
# 5) Nested layouts + pages
###############################################################################
mkdir -p app/neoflix app/publications app/toolbox

cat > app/neoflix/layout.jsx <<'EOF'
import SidebarLayout from '@/components/layouts/SidebarLayout';
import {neoflixSections} from '@/config/sections';
export default function Layout({children}){
  return <SidebarLayout sections={neoflixSections}>{children}</SidebarLayout>;
}
EOF

cat > app/neoflix/page.jsx <<'EOF'
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
EOF

cat > app/publications/layout.jsx <<'EOF'
import SidebarLayout from '@/components/layouts/SidebarLayout';
import {publicationsSections} from '@/config/sections';
export default function Layout({children}){
  return <SidebarLayout sections={publicationsSections}>{children}</SidebarLayout>;
}
EOF

cat > app/publications/page.jsx <<'EOF'
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
EOF

cat > app/toolbox/page.jsx <<'EOF'
export const metadata={title:'Toolbox'};
export default function Page(){
  return <div className="p-10">Toolbox placeholder page.</div>;
}
EOF

###############################################################################
# 6) Alias setup (if not present)
###############################################################################
if ! grep -q "config.resolve.alias" next.config.js 2>/dev/null; then
cat > next.config.js <<'EOF'
const path=require('path');
/** @type {import('next').NextConfig} */
module.exports={
  reactStrictMode:true,
  webpack:(cfg)=>{cfg.resolve.alias['@']=path.resolve(__dirname);return cfg;}
};
EOF
fi

[[ -f jsconfig.json ]] || cat > jsconfig.json <<'EOF'
{ "compilerOptions": { "baseUrl":".", "paths": { "@/*":["./*"] } } }
EOF

###############################################################################
# 7) Remove legacy /pages router to avoid conflicts
###############################################################################
rm -rf pages || true

###############################################################################
# 8) Git commit + push
###############################################################################
git add .
git commit -m "feat: sidebar pages + clean architecture scaffold 🚀" || echo "ℹ️ nothing to commit"
git push origin $(git symbolic-ref --short HEAD)

echo "✅  Done – Netlify will rebuild in a moment."
