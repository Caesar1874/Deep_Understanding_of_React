import React, {Component} from "react"

class SelectMulti extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            area: ["beijing", "shanghai"]
        }
    }

    handleChange(e) {
        const {options} = e.target;

        console.log(options["1"]);
        const area = Object.keys(options)
            .filter(item => options[item].selected === true)
            .map(item => options[item].value);

        this.setState({
            area,
        });
    }

    render() {
        const {area} = this.state;
        return (
            <select
                multiple={true}
                value={area}
                onChange={this.handleChange}
            >
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="hangzhou">杭州</option>
            </select>
        )
    }
}



export {SelectMulti}