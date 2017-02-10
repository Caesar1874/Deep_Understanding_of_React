
import React, {Component} from "react"
import {render} from "react-dom"
import {List2Child} from "./List_parent2child"
import {List2Parent} from "./List_child2parent"
import {Sub} from "./Sub"

class App extends Component {
    constructor(props) {
        super(props);

        // to parent
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleItemChange(item) {
        console.log(item);
    }

    render() {
        const list = ["beijing", "shanghai", "hangzhou"];
        return (
            <div>
                <List2Child
                    list={[{text: "beijing"}, {text: "shanghai"}, {text: "hangzhou"}]} title="parent to child"
                />
                <List2Parent
                    list={[
                        {text: "yunnan", checked: false},
                        {text: "shandong", checked: true},
                        {text: "zhejiang", checked: false}
                        ]}
                    handleItemChange={this.handleItemChange}
                />

                {/*没有嵌套关系*/}
                <Sub />

            </div>
        )
    }
}

render(
    <App />,
    document.getElementById("root")
);