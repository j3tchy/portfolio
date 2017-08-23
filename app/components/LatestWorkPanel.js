import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ProjectsAPI from '../utils/ProjectsAPI';

function LatestWorkPanel() {
    console.log('<LatestWorkPanel />')
    return (
        <div className="latestWork__image-panel">
            {
                ProjectsAPI.all().map(function(data) {
                    return (
                        <div key={data.id} className="latestWork__image-wrapper">
                            <Link to={"/project/" + data.id}>
                                <img className="lazy" src="http://placehold.it/960x500" className="latestWork__image img-responsive" />
                                <div className="latestWork__image-title">
                                    {data.title}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LatestWorkPanel;
