// components/layouts/SidebarLayout.jsx
import Navbar from '@/components/ui/Navbar';
import ScrollSpyNav from '@/components/ui/ScrollSpyNav';

export default function SidebarLayout({ sections = [], children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <aside className="hidden md:block sticky top-0 h-screen w-56 p-4">
          <ScrollSpyNav sections={sections} />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
