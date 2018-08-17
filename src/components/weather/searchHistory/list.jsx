import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class SearchHistoryList extends Component {

    render() {

        return(
            <div>
                {
                    this.props.list.map(item => {

                        return <div
                                    key={item.id}
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
                    })
                }
            </div>
        );
    }
}