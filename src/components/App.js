import React, {PropTypes} from 'react';
import StartPage from '../components/start/StartPage';

class App extends React.Component{

constructor(){
    super();
   
}

    render() {
        return(
            <div className="layout-site">
            <StartPage  />
        
            </div>
        );
    }

}



export default App;

