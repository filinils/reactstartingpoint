import 'babel-polyfill';
import React from 'react';
import {render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
// import App from './components/App';
// import Page2 from './components/page2/Page2';
// import Page1 from './components/page1/Page1';


render(
    <Router history={browserHistory} routes={routes} />,
        document.getElementById('app')
);

