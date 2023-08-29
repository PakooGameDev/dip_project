import img from '../../../../assets/images/pixema_logo.svg';
import styles from './Logo.module.css';

export function Logo() {
  return `
    <div class="${styles.logo}">
      <img src=${img} alt="logoSVG"/>
    </div>
  `;
}
