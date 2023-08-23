import './vendor';

import styles from './app.module.css';
import { drawSidebar } from './sidebar/sidebar';

const body = document.body;
body.className = styles.body;

drawSidebar();
