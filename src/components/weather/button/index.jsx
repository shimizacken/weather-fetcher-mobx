import React from 'react';
import styles from './styles.scss';

export const Button = ({disabled}) => 
    <button
        className={styles.root}
        type='submit'
        disabled={disabled}
    >Search</button>;