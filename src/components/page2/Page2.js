import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button name="btn">Btn2</button>;
    }
}
export default Page2;