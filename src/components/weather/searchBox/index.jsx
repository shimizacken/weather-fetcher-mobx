import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default class SearchBoxContainer extends Component {

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <input type='text' placeholder='Type city name and hit the enter...' />
            </div>
        );
    }
}