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
