import React from 'react';
import { Link } from "react-router-dom";
import './Recipes.css';

const Recipes = ({ recipes }) => (
    <div className="container">
        <div className="row">
            {recipes.map((recipe) => {
                return (
                    <div key={recipe.id} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="recipes__box">
                            <img
                                className="recipe__box-img"
                                src={recipe.image}
                                alt={recipe.title} />
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {recipe.title.length < 20 ? `${recipe.title}` :
                                        `${recipe.title.substring(0, 25)}...`}
                                </h5>
                            </div>
                            <button className="b ph3 pv2 ml2 input-reset ba b--black bg-transparent grow pointer f6 br3">
                                <Link to={{
                                    pathname: `/recipe/:${recipe.id}`,
                                    state: { recipe: recipe.id }
                                }}>
                                    View recipe
                                        </Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;