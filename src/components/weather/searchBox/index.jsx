import React, { Component } from 'react';
import { Button } from '../button';
import styles from './styles.scss';

export default class SearchBox extends Component {

    render() {
        
        return(
            <div
                className={styles.searchboxWrapper}
            >
                <input 
                    type='text'
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder='Type city name and hit the enter...'
                 />
                 <div
                    className={styles.buttonWrapper}
                >
                    <Button disabled={this.props.displayLoader} />
                </div>
            </div>
        );
    }
}