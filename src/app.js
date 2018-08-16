import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import MainPortalContainer from './components/portal';

ReactDOM.render(
    <Provider {...stores}>
        <MainPortalContainer />
    </Provider>,
    document.getElementById('root')
);