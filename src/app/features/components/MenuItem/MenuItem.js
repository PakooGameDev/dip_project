import { Icon } from '../Icon';
import styles from './MenuItem.module.css';

export function MenuItem({ title, iconName, active = false }) {
  return `
    <li class="${active ? styles.active : styles.MenuItem}">
        ${Icon({ NAME: iconName })}
        <a href="#">${title}</a>
    </li>
  `;
}
