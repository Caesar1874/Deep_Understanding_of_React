
import React, {Component} from "react"
import emitter from "./event"

class ListItem extends Component {
    static defaultProps = {
        checked: false
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
                <span>{this.props.value}</span>
            </li>
        )
    }
}

class ListPub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
        }
    }

    handleItemChange(entry) {
        emitter.emitEvent("ItemChange", entry)
    }
    render() {
        return (
            <ul>
                {
                    this.state.list.map((entry, index) => {
                        return (
                            <ListItem
                                key={index}
                                checked={entry.checked}
                                value={entry.text}
                                onChange={this.handleItemChange.bind(this, entry)}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}