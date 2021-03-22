import React from "react";
import PersonalInfo from "./PersonalInfo";
// import Dropdown from "./Dropdown";
import "./UserProfile.css";

class UserProfile extends React.Component {
    constructor() {
        super();
    }


    render() {
        const menuItems = [
            {
                label: 'Clone',
                icon: 'fa fa-clone',
                onClick: () => alert('Clone')
            },
            {
                label: 'Share',
                icon: 'fa fa-bullhorn',
                onClick: () => alert('Share')
            },
            {
                label: 'Delete',
                icon: 'fa fa-trash-o',
                onClick: () => alert('Delete')
            }
        ];
        return (
            <div>
                <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 tracked fr">
                        {/* <div className="card">
                            <Dropdown items={menuItems} />
                        </div> */}
                        <a className="link dim dib mr3 white" href="#" title="Recipes">Recipes</a>
                        <a className="link dim dib mr3 white" href="#" title="Menus">Menus</a>
                        <a className="link dim dib mr3 white" href="/shopping_list" title="Shopping">Shopping List</a>
                        <a className="link dim dib mr3 white" href="/account/:id" title="Account">Account</a>
                        <a className="link dim white dib" href="/" title="SignOut">Sign Out</a>
                    </nav>
                </header>
                <body>
                    <PersonalInfo />
                </body>
            </div>
        );
    }
}

export default UserProfile;