import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import background from './signin_background.jpg';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then((user) => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }

            })
    }

    render() {
        const { onRouteChange } = this.props;

        return (
            <div className="sans-serif w-90 mw6 center relative cover bg-top mt5 br3 shadow-5" style={{ backgroundImage: `url(${background})` }}>
                <div id="overlay" className="absolute absolute--fill z-unset"></div>

                <div className="relative pa4 pa5-m">
                    <h1 className="serif tracked ma0 mb4 pv3 white 0-80">Sign In</h1>
                    <form action="" id="login" className="">
                        <div className="mb3">
                            <label for="username" className="db f6 ttu ph2 mb2 white">Username</label>
                            <input type="text" name="username" className="input-reset db w-100 mw-100 b pv2 ph3 bg-gray o-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                        </div>
                        <div className="mb4">
                            <label for="password" className="db f6 ttu ph2 mb2 white">Password</label>
                            <input type="password" name="password" className="input-reset db w-100 mw-100 b pv2 ph3 bg-gray o-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                        </div>
                        <div>
                            <button className="input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-gray hover-bg-white-80 bn br-pill">
                                <Link to={{
                                    pathname: '/profile/:id'
                                }}>
                                    Sign In
                                </Link>
                            </button>
                        </div>
                    </form>

                    <div className="tc b f6 mt4 glow pa2 i white">
                        New Member? <a href="/register_form" className="white">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;