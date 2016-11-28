import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Datacontext from './data/Datacontext';
import Page2 from './components/page2/Page2';
import Page1 from './components/page1/Page1';
import InformationPage from './components/informationPage/InformationPage';



export default(
<Route path="/" component={App}>
        <IndexRoute component={Page1} />
        <Route path="en/about" component={InformationPage} />
        <Route path="*" component={InformationPage} />
</Route>

);
