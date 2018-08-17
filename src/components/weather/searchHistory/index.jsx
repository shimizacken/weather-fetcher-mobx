import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import List from './list';

@inject('searchHistory') @observer
export default class SearchHistoryContainer extends Component {

    render() {

        if (!this.props.searchHistory.historyList) {
            
            return null;
        }
        
        return(
            <div>
                <h1>
                    History ({this.props.searchHistory.searchHistoryLength})
                </h1>
                <List
                    list={this.props.searchHistory.historyList.reverse()}
                />
            </div>
        );
    }
}