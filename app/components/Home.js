import React, { Component } from 'react';

import Intro from './Intro';
import LatestWork from './LatestWork';
import About from './About';

function Home() {
    return (
        <div>
            <Intro />
            <About />
            <LatestWork />
        </div>
    )
}

export default Home;
