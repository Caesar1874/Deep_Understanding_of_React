
import React, {Component} from "react"



class QrCode extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);

        this.state = {
            active: false
        }
    }

    componentDidMount() {
        document.body.addEventListener("click", (e) => {
            this.setState({
                active: false
            })
        });
    }

    componentWillUnmount() {
        document.body.removeEventListener("click");
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            active: !this.state
        });
    }

    handleClickQr(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div className="qr-wrapper">
                <button className="qr" onClick={this.handleClick}>Quick Response code</button>
                <div 
                    className="code"
                    style={{display: this.state.active ? "block" : "none"}}
                    onClick={this.handleClick}
                >
                    <img src="img/qr.png" alt=""/>
                </div>
            </div>
        )
    }

}

export {QrCode};