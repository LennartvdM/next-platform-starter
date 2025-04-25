import SidebarLayout from '@/components/layouts/SidebarLayout';
import { neoflixSections } from '@/config/sections';

export default function NeoflixShell({ children }) {
  return <SidebarLayout sections={neoflixSections}>{children}</SidebarLayout>;
}
