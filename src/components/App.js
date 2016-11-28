import React, {PropTypes} from 'react';
import StartPage from '../components/start/StartPage';

class App extends React.Component{



    render() {
        return(
            <div className="layout-site">
            <StartPage  />
            {this.props.children}
            </div>
        );
    }

}

App.propTypes= {
children: PropTypes.object.isRequired
};



export default App;

