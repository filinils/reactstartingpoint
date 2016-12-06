import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Datacontext from './data/Datacontext';
import Page2 from './components/page2/Page2';
import Page1 from './components/page1/Page1';




export default(
<Route path="/" component={App}>
        <IndexRoute component={Page1} />
      
</Route>

);
