import React, { Component } from 'react';

import Nav from './Nav';
import Main from './Main';
import Social from './Social';

import '../assets/scss/App.scss';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav />
                <Main />
                <Social />
            </div>
        )
    }
}

export default App;
