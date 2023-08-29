import styles from './AppLayout.module.css';

export function AppLayout({ Sidebar, Content }) {
  return `
    <div class=${styles.wrapper}>
      ${Sidebar}
      ${Content}
    </div>
  `;
}
