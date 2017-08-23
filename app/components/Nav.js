import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleOpenClass = this.toggleOpenClass.bind(this);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        console.log('<Nav />');
        var $menuParentIcon = $('.main-navigation');
        $('.main-navigation__list').click(function (e) {
            e.preventDefault();
            $menuParentIcon.toggleClass('open');
        })
    }

    toggleOpenClass() {
        const currentState = this.state.open;
        this.setState({
            open: !currentState
        })
    }

    render() {
        return (
            <nav id="main-navigation" className="main-navigation">
                <div className="container__wrapper">
                    <div className="main-navigation__wrapper">
                        <div
                            className={'main-navigation__list ' + (this.state.open ? 'open' : '')}
                            onClick={this.toggleOpenClass}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className="main-navigation__links">
                        <li className="main-navigation__links-item">Home</li>
                        <li className="main-navigation__links-item">Projects</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
