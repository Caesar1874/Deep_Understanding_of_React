import React, {Component} from "react"
import emitter from "./event"

class Sub extends Component {
    componentDidMount() {
        this.itemChange = emitter.addListener("ItemChange", (msg, data) => {
            console.log(data);
        })
    }

    componentWillUnmount() {
        emitter.removeListener("ItemChange");
    }
    render() {
        return (
            <div>
                Sub
            </div>
        )
    }
}

export {
    Sub
}