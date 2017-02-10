
import React, {Component} from "react"

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            coffee: []
        }
    }

    handleChange(e) {
        const {checked, value} = e.target;
        let {coffee} = this.state;

        if(checked && coffee.includes(value) === false) {
            // 选中
            coffee.push(value);
        } else {
            // 取消选中
            coffee = coffee.filter(item => item !== value)
        }
        this.setState({
            coffee,
        });
    }

    render() {
        const {coffee} = this.state;
        return (
            <div>
                <p>请选择喜欢的咖啡：</p>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value="cappuccino"
                        checked={coffee.includes("cappuccino")}
                        onChange={this.handleChange}
                    />
                    cappuccino
                </label>
                <br/>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value="latte"
                        checked={coffee.includes("latte")}
                        onChange={this.handleChange}
                    />
                    latte
                </label>
                <br/>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value="mocha"
                        checked={coffee.includes("mocha")}
                        onChange={this.handleChange}
                    />
                    mocha
                </label>
            </div>
        )
    }
}

export {Checkbox};