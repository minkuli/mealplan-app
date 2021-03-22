import React from "react";

const Form = (props) => (
    <form className="pa4 black-80" onSubmit={props.getRecipe}>
        <div className="measure center">
            <input className="input-reset ba br3 b--black-20 pa2 mb2 db fl w-70" type="text" name="recipeName" onChange={props.onChange} />
            <input className="b ph3 pv2 input-reset ba br3 b--black bg-transparent grow pointer f6 w-30" type="submit" value="Search" />
        </div>
    </form >
)

export default Form;