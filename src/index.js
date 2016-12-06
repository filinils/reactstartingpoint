import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Datacontext from './data/Datacontext';
//import routes from './routes';
// import App from './components/App';
import Page2 from './components/page2/Page2';
import Page1 from './components/page1/Page1';

const dc = new Datacontext();
const RemoteRoutes = {
    path: '/',

    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {

            dc.getMenu().then(res => {

                const routes = res.data.map(route => {
                    if (route.Url && route.PageType) {

                        const compenentFolder = route.PageType.toLowerCase();
                        const path = route.Url.substr(1, route.Url.length).substr(0, route.Url.length - 2);
                       
                        return { path: path, component: require('./components/' + compenentFolder + '/' + route.PageType), id: route.ID };
                    }
                    const path = route.Url.substr(1, route.Url.length).substr(0, route.Url.length - 2);
                    return { path: path, component:require('./components/informationpage/InformationPage') };

                   

                });
                routes.push({path:'*', component:require('./components/informationpage/InformationPage')});

                callback(null, routes);
            }
            );
        });


    },

    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, { component: require('./components/informationpage/InformationPage') }
            );

        });


    }
    
    


};


render(
    <Router history={browserHistory} routes={RemoteRoutes} />,
    document.getElementById('app')
);

