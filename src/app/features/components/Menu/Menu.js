import { MenuItem } from '../MenuItem';
import styles from './Menu.module.css';

export function Menu({ page = 'Home' }) {
  if (page === 'Home') {
    return `
      <ul class="${styles.menu}">
        ${MenuItem({ title: 'Home', iconName: 'HOME', active: true })}
        ${MenuItem({ title: 'Trends', iconName: 'TRENDS' })}
        ${MenuItem({ title: 'Favorites', iconName: 'FAVORITES' })}
        ${MenuItem({ title: 'Settings', iconName: 'SETTINGS' })}
      </ul>
    `;
  }
}
