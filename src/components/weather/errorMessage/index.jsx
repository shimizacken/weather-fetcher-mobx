import React from 'react';
import styles from './styles.scss';

export const ErrorMessage = ({errorMessage}) => {
    
    if (!errorMessage) {
        
        return null;
    }
    
    return <span className={styles.errorMessage}>{errorMessage}</span>;
};