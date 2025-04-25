"use client";
import Navbar from '@/components/ui/Navbar';
import ScrollSpySidebar from '@/components/ui/ScrollSpySidebar';

/**
 * Sticky sidebar layout: the <aside> never scrolls out of view,
 * only the <main> column scrolls.
 */
export default function SidebarLayout({ sections, children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-7xl">
        <aside
          className="sticky left-0 top-20 hidden h-[calc(100vh-5rem)] w-60 shrink-0
                     overflow-y-auto rounded-lg bg-slate-900/90 p-4 text-sm
                     text-slate-300 backdrop-blur md:block"
        >
          <ScrollSpySidebar sections={sections} />
        </aside>

        <main className="pl-72 flex-1 space-y-32 p-8">{children}</main>
      </div>
    </>
  );
}
