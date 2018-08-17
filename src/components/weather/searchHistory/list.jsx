import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchHistoryList extends Component {

    render() {

        return(
            <div>
                {
                    this.props.list.map(item => {

                        return <div key={item.id}>
                                    {
                                        item.history.name
                                    }
                                </div>
                    })
                }
            </div>
        );
    }
}