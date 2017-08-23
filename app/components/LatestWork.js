import React from 'react';

import LatestWorkPanel from './LatestWorkPanel';

function LatestWork() {
    return (
        <div id="latestWork" className="section container latestWork">
            <div className=" container__wrapper container__wrapper--full-page">
                <h2 className="container__header">H2 Title</h2>
                <p className="latestWork__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <LatestWorkPanel />
            </div>
        </div>
    )
}

export default LatestWork;
