import './vendor';
import './index.css';

import { AppLayout, AppMain, AppSidebar } from './components';

function App() {
  return AppLayout({
    Sidebar: AppSidebar({ page: 'Home' }),
    Content: AppMain({ page: 'Home' }),
  });
}

const body = document.body;
body.innerHTML = App();
