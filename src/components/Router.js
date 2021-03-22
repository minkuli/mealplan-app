import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./BrowseRecipes/Recipe";
import BrowseRecipes from "./BrowseRecipes/BrowseRecipes";
import SignIn from "./Users/SignIn";
import Register from "./Users/Register";
import UserProfile from "./Users/Profile/UserProfile";
import PersonalInfo from "./Users/Profile/PersonalInfo";
import ShoppingList from "./Users/Profile/ShoppingList";

const Router = () => (
    <BrowserRouter>
        <Switch >
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/browse_recipes" component={BrowseRecipes} />
            <Route path="/sign_in_form" component={SignIn} />
            <Route path="/register_form" component={Register} />
            <Route path="/profile/:id" component={UserProfile} />
            <Route path="/account/:id" component={PersonalInfo} />
            <Route path="/shopping_list" component={ShoppingList} />
        </Switch>
    </BrowserRouter>
);

export default Router;