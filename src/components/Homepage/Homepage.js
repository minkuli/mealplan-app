import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import Navigation from "./Navigation";
import Body from "./Body";

class Homepage extends Component {

    render() {
        return (
            <div className="App">
                <Navigation />
                <Body />
            </div>
        );
    }
}

export default Homepage;