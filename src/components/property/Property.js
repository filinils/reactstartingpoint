import React from 'react';

class Property extends React.Component{
    constructor(){
        super();
            if(inEdit){

        this.prop = <li></li>;
            }
            else{

        this.prop = <li edit-mode></li>;
            }

    }
    render(){
        return (
        <li>{this.props.name}</li>
        );
    }
}

export default Property;