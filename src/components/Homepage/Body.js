import React from "react";
import background from "./background_image.jpg";
import "./Body.css";

const Body = () => {
    return (
        <main className="cf w-100 bg-transparent">
            <div class="center measure-wide f5 pv5 lh-copy ph2">
                <h1 class="f1 lh-title">Why you should use this app?</h1>
                <p>
                    Nowadays too many of us don't have much time for cooking and thinking what to cook
                    today makes things even worse. There is also that irritating situation when you finally
                    decide what to cook and realize that something from the ingredients list is missing.
                    In the end you decide to take some crackers or even worse to go and grab some fast food.

    </p>
                <p>
                    Our app can become your ally in those situations. Using it you can have meal plan for
                    whole week in advance. That will help you to eat healthier food, to spend less time figuring
                    out what to eat and to reduce the amount of time spent in shopping. Also meal plan will help you to
                    focus on buying just things that you need without spending extra money for something that you
                    will maybe eat one day and that will end up in trash.
    </p>
                <p>
                    Click here to learn more about using our app.
    </p>
                <p>
                    Search through thousands of recipes to find something for you. If you want to save and/or edit those
                    recipes, make a free account and sign in every time you want.
    </p>
            </div>
        </main>
    );
}

export default Body;