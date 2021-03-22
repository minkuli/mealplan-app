import React, { Component } from "react";
import { Link } from "react-router-dom";

class PersonalInfo extends Component {
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
            <article class="center mw5 mw6-ns ba mv5">
                <h1 class="f4 bg-near-black white mv0 pv2 ph3">Personal Info</h1>
                <div class="pa3 bt">
                    <div className="sans-serif w-90 mw6 center relative cover bg-top">
                        <div id="overlay" className="absolute absolute--fill z-unset"></div>

                        <div className="relative pa4 pa5-m">
                            <form action="" id="login" className="">
                                <div className="mb3">
                                    <label for="email" className="db f6 ttu ph2 mb2">Email</label>
                                    <input type="email" name="email-address" className="input-reset db w-100 mw-100 b pv2 ph3 bg-gray o-50 hover-gray outline-0 bn br-pill" />
                                </div>
                                <div className="mb3">
                                    <label for="first-name" className="db f6 ttu ph2 mb2">First Name</label>
                                    <input type="text" name="first-name" className="input-reset db w-100 mw-100 b pv2 ph3 bg-gray o-50 hover-gray outline-0 bn br-pill" />
                                </div>
                                <div className="mb4">
                                    <label for="last-name" className="db f6 ttu ph2 mb2 ">Last Name</label>
                                    <input type="text" name="last-name" className="input-reset db w-100 mw-100 b pv2 ph3 bg-gray o-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                                </div>
                                <button className="input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-black o-50 bn br-pill white">
                                    Update information
                        </button>
                            </form>

                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
export default PersonalInfo;