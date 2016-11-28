import React from 'react';

class Property extends React.Component{
    constructor(){
        super();
            

    }
    render(){
        return (
       <div data-epi-property-name={this.props.name} data-epi-use-mvc="True">{this.props.value}</div>
        );
    }
}

export default Property;