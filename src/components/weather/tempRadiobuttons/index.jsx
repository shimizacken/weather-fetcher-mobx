import React from 'react';
import RadioButton from '../../portal/radioButton';
import { units } from '../../../services/openweathermap/units';
import styles from './style.scss';

export const TempRadioButtons = props =>
    <div>
        <RadioButton
            text='Celsius'
            value={units.celsius}
            name='temperatureType'
            className={styles.radioButton}
            checked
            onChange={props.radioChanged}
        />
        <RadioButton
            text='Fahrenheit'
            value={units.fahrenheit}
            name='temperatureType'
            className={styles.radioButton}
            onChange={props.radioChanged}
        />
        <RadioButton
            text='Kelvin'
            value={units.kelvin}
            name='temperatureType'
            className={styles.radioButton}
            onChange={props.radioChanged}
        />
    </div>;