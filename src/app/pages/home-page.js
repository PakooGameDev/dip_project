import { AppLayout, AppMain, AppSidebar } from '../components';

export function HomePage({ page }) {
  return AppLayout({
    Sidebar: AppSidebar({ page }),
    Content: AppMain({ page }),
  });
}
