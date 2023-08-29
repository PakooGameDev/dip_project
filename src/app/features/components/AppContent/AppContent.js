import styles from './AppContent.module.css';

export function AppContent({ page = 'Home' }) {
  if (page === 'Home') {
    return `
    <div class="${styles.content}">
      <div class="${styles.grid}">

      </div>
      <div class="${styles.pagination}">

      </div>
    </div>
  `;
  }
}
