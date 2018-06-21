import React, { Component } from 'react';
import styles from './styles.scss';

export default class SearchBox extends Component {

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <input 
                    type='text'
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder='Type city name and hit the enter...'
                 />
            </div>
        );
    }
}