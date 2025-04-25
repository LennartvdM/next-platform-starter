import SidebarLayout from '@/components/layouts/SidebarLayout';
import { publicationsSections } from '@/config/sections';

export default function PublicationsShell({ children }) {
  return <SidebarLayout sections={publicationsSections}>{children}</SidebarLayout>;
}
