import styles from './Navigation.module.css';

export function Navigation({ Search, Auth }) {
  return `
    <div class="${styles.navigation}">
      ${Search}
      ${Auth}
    </div>
  `;
}
