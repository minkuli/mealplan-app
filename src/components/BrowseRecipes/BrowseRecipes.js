import React, { Component } from "react";
import Form from './Form';
import Recipes from './Recipes';
import './BrowseRecipes.css';

// const API_KEY = da1399f78ef84ce7b222963c90b20ac8;

class BrowseRecipes extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            recipes: []
        }
    }

    onChange = event => {
        this.setState({ query: event.target.value });
        console.log(event.target.value);
    };

    getRecipe = event => {
        const recipeName = event.target.elements.recipeName.value;
        event.preventDefault();
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=da065fadf92743c3adb4aba6d2a54477&ingredients=${recipeName}&number=20`)
            .then(response => response.json())
            .then(data => {
                this.setState({ recipes: data });
            })
            .catch((err) => {
                console.log("Error", err);
            })
    }

    // componentDidMount = () => {
    //     if (localStorage === null) {
    //         const recipes = JSON.stringify(this.state.recipes);
    //         localStorage.setItem("recipes", recipes);

    //     }
    // }
    // componentDidUpdate = () => {
    //     const json = localStorage.getItem("query");
    //     const query = JSON.parse(json);
    //     this.setState({ query });
    // }

    render() {
        return (
            <div className="App">
                <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <h1 className="white">Recipe search</h1>
                    <nav className="f6 fw6 tracked fr">
                        <a className="link dim white dib mr3" href="/" title="Home">Home</a>
                    </nav>
                </header>
                <body className="sans-serif w-100 mw7 center bg-top mt5 br3 shadow-5">
                    <Form getRecipe={this.getRecipe} onChange={this.onChange} />
                    <Recipes recipes={this.state.recipes} />
                </body>
            </div>
        );
    }
}

export default BrowseRecipes;
