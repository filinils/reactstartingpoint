import 'babel-polyfill';
import React from 'react';
import {render } from 'react-dom';

class NewsPage extends React.Component{
    constructor(props){
        super(props);
    }

    

render(){
    return <button name="btn">NewsPage with page id {this.props.route.id}</button>;
}
}
module.exports = NewsPage;