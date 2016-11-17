import 'babel-polyfill';
import React from 'react';
import {render } from 'react-dom';
import App from './components/App';
import Page2 from './components/page2/Page2';
import Page1 from './components/page1/Page1';


render(
<App />,
document.getElementById('app')
);
render(
<Page1 />,
document.getElementById('page2Btn')
);
render(
<Page2 />,
document.getElementById('page2Btn')
);
