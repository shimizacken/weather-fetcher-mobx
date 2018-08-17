import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.scss';


export default class RadioButton extends Component {

    render() {

        const { text, name, checked, className, style,
                onChange, value } = this.props;

        return(
            <label
                className={classNames(styles.container, className)}
                style={style}
            >{text}
                <input
                    type='radio'
                    defaultChecked={checked}
                    name={name}
                    onChange={onChange}
                    value={value}
                />
                <span
                    className={styles.checkmark}
                ></span>
            </label>
        );
    }
}