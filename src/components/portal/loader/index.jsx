import React from 'react';
import sun from '../../../assets/png/sun';
import styles from './styles.scss';

export const Loader = _ => <img src={sun} className={styles.rotating} />;