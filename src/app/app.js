import './vendor';

import styles from './app.module.css';
import { makeItBlue } from './blue';

const root = document.getElementById('root');
root.className = styles.blue;

makeItBlue();
