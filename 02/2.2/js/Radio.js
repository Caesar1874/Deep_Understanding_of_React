import React, {Component} from "react"

class Radio extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            radioValue: ""
        };
    }

    handleChange(e) {
        this.setState({
            radioValue: e.target.value
        });
    }

    render() {
        const {radioValue} = this.state;
        return (
            <div>
                <p>gender: </p>
                <label htmlFor="">
                    male:
                    <input
                        type="radio"
                        value="male"
                        checked={radioValue === "male"}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    female:
                    <input
                        type="radio"
                        value="female"
                        checked={radioValue === "female"}
                        onChange={this.handleChange}
                    />
                </label>
            </div>
        )
    }
}

export {Radio};