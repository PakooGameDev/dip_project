import { Logo, Menu } from '../../features';
import styles from './AppSidebar.module.css';

export function AppSidebar({ page }) {
  return `
    <aside class=${styles.sidebar}>
      <header class="${styles.header}">
          ${Logo()}
        <nav class="${styles.navigation}">
          ${Menu(page)}
        </nav>
      </header>
      <footer class="${styles.footer}">
        &copy; All Rights Reserved
      </footer>
    </aside>
  `;
}
