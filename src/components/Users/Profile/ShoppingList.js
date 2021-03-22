import React from "react";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem = (e) => {

    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.item} onChange={this.handleChange}></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShoppingList;