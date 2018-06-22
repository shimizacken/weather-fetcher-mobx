import React from 'react';
import sun from '../../../assets/png/sun';
import styles from './styles.scss';

export const Header = _ => <header>
                                <h1 className={styles.mainHeader}>
                                    <img src={sun} /> weather fetcher
                                </h1>
                            </header>;