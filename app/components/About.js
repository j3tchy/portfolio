import React from 'react';

function About() {
    return (
        <div className="about container" id="about">
            <div className="container__wrapper">
                <h2 className="container__header">H2 Title</h2>
                <div className="about__block">
                    <i className="fa fa-male fa-5x"></i>
                    <h3>Moi</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
                </div>
                <div className="about__block">
                    <i className="fa fa-code fa-5x"></i>
                    <h3>Code</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
                </div>
            </div>
        </div>
    )
}

export default About;
