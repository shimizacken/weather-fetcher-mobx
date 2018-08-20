import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import style from './style.scss';

export default class SearchHistoryList extends Component {

    render() {

        return(
            <div>
                {
                    this.props.list.map(item => {

                        return <Item
                                    key={item.id}
                                    item={item}
                                />
                    })
                }
            </div>
        );
    }
}