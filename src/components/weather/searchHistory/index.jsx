import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import List from './list';
import style from './style.scss';

@inject('searchHistory') @observer
export default class SearchHistoryContainer extends Component {

    render() {

        if (!this.props.searchHistory.historyList) {
            
            return null;
        }
        
        return(
            <div
                className={style.searchHistoryPanel}
            >
                <h4>
                    History ({this.props.searchHistory.searchHistoryLength})
                </h4>
                <List
                    list={this.props.searchHistory.historyList.reverse()}
                />
            </div>
        );
    }
}