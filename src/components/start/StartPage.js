import React from 'react';
import PageDal from '../../data/PageDal';
import Property from '../property/Property';


class StartPage extends React.Component {

    constructor() {
        super();
       
        this.PageDal = new PageDal();
        this.page = null;
        this.state = {propList:null};
        this.getPage = this.getPage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }



    componentDidMount() {

    }
    handleClick(e) {
        e.preventDefault();
        this.getPage().then(res => {
            const propList = res.data.Property.map(prop => <Property key={prop.Id} name={prop.Name} />);
            this.setState({ propList: propList });
            

        });


    }

    getPage() {
        return this.PageDal.getPage();
    }


    render() {
        return (
            <div className="layout-content" >
                <ul>{this.state.propList}</ul>
                <button onClick={this.handleClick}>Click me for</button>
                
            </div>
        );
    }
}

export default StartPage;


