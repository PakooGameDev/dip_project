import { AppContent, Auth, Search } from '../../features';
import { Navigation } from '../navigation';
import styles from './AppMain.module.css';

export function AppMain({ page }) {
  return `
    <main class=${styles.main}>
      ${Navigation({
        Search: Search(),
        Auth: Auth({ Name: 'Artem Lapitsky' }),
      })}
      ${AppContent(page)}
    </main>
  `;
}
