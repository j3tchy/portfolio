import React, { Component } from 'react';

import ScrollDown from './ScrollDown';
import bigText from 'bigtext/src/bigtext';

class Intro extends Component {
    componentDidMount() {
        console.log('<Intro />');
        // $('.home__main-header').bigText();
    }

    render() {
        return (
            <div id="home" className="section container home">
                <div className="container__wrapper container__wrapper--full-page">
                    <div className="home__main-header-wrapper-outer">
                        <div className="home__main-header-wrapper-inner">
                            <h1 className="home__main-header">
                                <span>Jermaine</span>
                                <span>Gyekye</span>
                            </h1>
                            <p className="home__main-header--small">Front end developer</p>
                        </div>
                    </div>
                    <ScrollDown />
                </div>
            </div>
        )
    }
}

export default Intro;
