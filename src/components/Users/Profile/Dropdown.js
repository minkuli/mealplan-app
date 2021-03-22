import { React } from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    toggle() {
        this.setState(previous => ({
            active: !previous.active
        }));
    }

    close() {
        this.setState({
            active: false
        });
    }

    render() {
        const items = this.props.items;
        const active = this.state.active;

        return (
            <div className="dropdown-menu" tabIndex="0" onBlur={this.close}>
                <div className={`toggle ${active ? 'active' : ''}`} onClick={this.toggle}>
                    <span>
                        <i className="fa fa-ellipsis-v" />
                    </span>
                </div>
                <div className={`menu ${active ? 'expanded' : 'collapsed'}`}>
                    <ul>
                        {items.map((i, index) => (
                            <li key={index} onClick={i.onClick}>
                                <span>
                                    <i className={i.icon} />
                                </span>
                                <span className="label">{i.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dropdown;