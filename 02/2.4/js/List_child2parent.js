
import React, {Component} from "react"

class ListItem extends Component {
    static defaultProps = {
        text: "",
        checked: false
    };

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <span>{this.props.value}</span>
            </li>
        )
    }
}

class List2Parent extends Component {
    static defaultProps =  {
        list: [],
        handleItemChange: () => {},
    };

    constructor(props) {
        super(props);
        // 初始化状态： this.props.list 包含 entry
        // 直接赋值 ？
        this.state = {
            list: this.props.list
        }
            /*{
            list: this.props.list.map(entry => {
                return {
                    text: entry.text,
                    checked: entry.checked
                }
            })
        }*/
    }

    onItemChange(entry) {
        const {list} = this.state;

        this.setState({
            list: list.map(prevEntry => ({
                text: prevEntry.text,
                checked: prevEntry.text === entry.text ?
                    !prevEntry.checked : prevEntry.checked,
            })),
        });

        this.props.handleItemChange(entry);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((entry, index) => (
                            <ListItem
                                key={`list-${index}`}
                                value={entry.text}
                                checked={entry.checked}
                                onChange={this.onItemChange.bind(this, entry)}
                            />
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export {
    List2Parent
}