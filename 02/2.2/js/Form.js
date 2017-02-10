
import React, {Component} from "react"

import {Input} from "./Input"
import {Radio} from "./Radio"
import {Checkbox} from "./Checkbox"
import {SelectSingle} from "./SelectSingle"
import {SelectMulti} from "./SelectMulti"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Input />
                <Radio />
                <Checkbox />
                <SelectSingle />
                <SelectMulti />
            </div>
        )
    }
}

export {Form};