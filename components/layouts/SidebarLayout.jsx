import Navbar from '@/components/ui/Navbar';
import ScrollSpyNav from '@/components/ui/ScrollSpyNav';

export default function SidebarLayout({ sections = [], children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-sky-800 to-teal-700 px-6 py-24">
        <div className="mx-auto flex max-w-6xl gap-10">
          <aside className="sticky top-24 hidden md:block">
            <ScrollSpyNav sections={sections} />
          </aside>
          <main className="flex-1 space-y-32">{children}</main>
        </div>
      </div>
    </>
  );
}
