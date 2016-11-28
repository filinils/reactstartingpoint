import 'babel-polyfill';
import React from 'react';
import {render } from 'react-dom';
import Datacontext from '../../data/Datacontext';
import Property from '../property/Property';


class InformationPage extends React.Component{

    constructor(){
        super();

        this.state ={propList:null};
        this.dc = new Datacontext();
        this.getPage();
    }

    getPage(){
        this.dc.getPage().then(res=>{
            const propList = res.data.Property.map((prop,index) => <Property key={index} name={prop.Name} value={prop.Value} />);

            this.setState({propList:propList});

        });
    }

render(){
   return <div>{this.state.propList}</div>;
}
}

export default InformationPage;
