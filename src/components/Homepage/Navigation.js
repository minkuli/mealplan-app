import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import logo from './logo.png';
import background from './background_image.jpg';

class Navigation extends Component {

    render() {
        return (
            <header className="sans-serif">
                <div className="cover bg-left bg-center-l" style={{ backgroundImage: `url(${background})` }}>
                    <div className="pb5 pb6-m pb7-l">
                        <nav className="dt w-100 mw8 center">
                            {/* <div className="dtc v-mid pa3">
                                <a href="/" className="dib w4 h4 grow-large">
                                    <img src={logo} class="link fl" alt="Site Name" />
                                </a>
                            </div> */}
                            <div className="dtc v-mid tr pa3">
                                <a className="f6 fw4 hover-white no-underline white-90 dn dib-ns pv2 ph3" href="/" >How it Works</a>
                                <a className="f6 fw4 hover-white no-underline white-90 dn dib-l pv2 ph3" href="/" >About</a>
                                <a className="f6 fw4 hover-white no-underline white-90 dib ml2 pv2 ph3 ba" href="/register_form" >Sign Up</a>
                            </div>
                        </nav>
                        <div className="tc-l mt4 mt5-m mt6-l ph3">
                            <h1 className="f2 f1-l fw2 white mb0 lh-title">Are you eating too much and too fast?</h1>
                            <h2 className="fw1 f3 white mt3 mb4">Eat smarter and leave some space for air in your belly</h2>
                            <a className="f6 no-underline grow dib v-mid bg-black white ba b--black ph3 pv2 mb3" href="/browse_recipes">
                                Browse Recipes
                            </a>
                            <span className="dib v-mid ph3 white mb3">or</span>
                            <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/sign_in_form">
                                Sign in to personalize your recipes
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Navigation;