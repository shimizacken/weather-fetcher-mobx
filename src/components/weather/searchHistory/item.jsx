import React, { Component } from 'react';
import style from './style.scss';

export default class Item extends Component {

    shouldComponentUpdate(nextProps) {

        return false;
    }

    render() {

        const { item } = this.props;

        return(
            <div
                className={style.listItem}
                title={
                    `${item.history.name} (${item.history.sys.country}), Temp: ${item.history.main.temp}°`
                }
            >
                {
                    item.history.name
                }
                <div
                    className={style.dateTime}
                >
                    {item.date.toLocaleString()}
                </div>
            </div>
        );
    }
}