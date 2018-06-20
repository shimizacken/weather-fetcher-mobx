import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default class MainContainer extends Component {

    render() {
        console.log(styles);
        
        return(
            <div
                className={styles.root}
            >
                Hello app!
            </div>
        );
    }
}