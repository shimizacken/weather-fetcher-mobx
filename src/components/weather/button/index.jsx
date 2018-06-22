import React from 'react';
import styles from './styles.scss';

export const Button = ({disabled}) => 
    <button
        className={styles.searchButton}
        type='submit'
        disabled={disabled}
    >Search</button>;