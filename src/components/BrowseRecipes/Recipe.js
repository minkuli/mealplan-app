import React from 'react';
import { Link } from "react-router-dom";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = () => {
        const id = this.props.location.state.recipe;
        // console.log(id);

        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=da065fadf92743c3adb4aba6d2a54477&includeNutrition=true`)
            .then(response => response.json())
            .then(data => {
                this.setState({ activeRecipe: data });
                console.log(this.state.activeRecipe);
            })
            .catch(() => {
                console.log("Error");
            })

    }
    render() {
        // console.log(this.props);
        const recipe = this.state.activeRecipe;
        return (
            <div className="pv5">
                <button className="f6 link dim br3 ba bw1 ph3 pv2 mb2 ml5 dib near-black">
                    <Link to={{ pathname: '/' }}>
                        Go home
                            </Link>
                </button>
                {this.state.activeRecipe.length !== 0 &&
                    <div>
                        <article className="bg-white center w-50 ba b--black-10">
                            <div className="pv2 ph3">
                                <h1 className="f5 ttu tracked tc">{recipe.title}</h1>
                                <h2 className="f6 tc">{recipe.sourceName}</h2>
                            </div>
                            <div className="dtc v-mid">
                                <img
                                    src={recipe.image}
                                    className="br4 mw5-l ml4"
                                    alt={recipe.title} />
                            </div>
                            <div className="dtc v-mid">
                                <p className="tc ma4">{`${recipe.preparationMinutes} minutes for preparation`}</p>
                                <p className="tc ma4">{`${recipe.cookingMinutes} minutes for cooking`}</p>
                            </div>
                            <div className="dtc v-mid">
                                <ul className="list bg-green">
                                    <li>{`${recipe.nutrition.caloricBreakdown.percentCarbs} carbs`}</li>
                                    <li>{`${recipe.nutrition.caloricBreakdown.percentFat} fat`}</li>
                                    <li>{`${recipe.nutrition.caloricBreakdown.percentProtein} protein`}</li>
                                </ul>

                            </div>
                            <div className="pa3">
                                <a href={recipe.sourceUrl} className="link dim lh-title">Click here for full recipe</a>
                                {/* <small class="gray db pv2">AMP - <time>6 hours ago</time></small> */}
                            </div>

                            {recipe.extendedIngredients.map(ingredient => {
                                return (
                                    <div>
                                        {/* <div className="dtc w2 w3-ns v-mid">
                                            <img src={ingredient.image} className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns" />
                                        </div> */}
                                        <div className="dtc v-mid pl3">
                                            <ul className="list w-70 fl">
                                                <li className="fl">
                                                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{ingredient.name}</h1>
                                                    <h2 className="f6 fw4 mt0 mb0 black-60">{ingredient.aisle}</h2>
                                                </li>
                                            </ul>
                                            <ul className="list w-30 fl">
                                                <li className="fl">
                                                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{ingredient.measures.metric.amount}</h1>
                                                    <h2 className="f6 fw4 mt0 mb0 black-60">{ingredient.measures.metric.unitShort}</h2>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                            {recipe.analyzedInstructions.map(instruction => {
                                return (
                                    instruction.steps.map(step => {
                                        return (
                                            <div>
                                                <div className="fl w-20 tc">
                                                    <p>{`Step ${step.number}`}</p>
                                                </div>
                                                <div className="fl w-80 tc">
                                                    <p>{step.step}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                )
                            }
                            )}
                        </article>

                    </div>
                }

            </div >
        );
    }
}

export default Recipe;