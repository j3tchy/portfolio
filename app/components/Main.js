import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';

function Main() {
    console.log('<Main />');

    return (
        <div className="main-content" id="main-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/project/:id" component={Project} />
        </div>
    )
}

export default Main;
