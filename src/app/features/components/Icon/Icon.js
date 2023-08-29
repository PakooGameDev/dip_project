import { ItemIcons } from '../../../constants';
import styles from './Icon.module.css';

export function Icon({ NAME }) {
  return `
    <a href="#" class='${styles.icon}'><img src = '${ItemIcons[NAME]}' alt="${NAME}"/></a>
  `;
}
