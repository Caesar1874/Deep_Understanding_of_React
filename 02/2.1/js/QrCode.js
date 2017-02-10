
import React, {Component} from "react"

class QrCode extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        // this.handleClickQr = this.handleClickQr.bind(this);

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
        document.querySelector(".code").addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }

    componentWillUnmount() {
        document.body.removeEventListener("click");
        document.querySelector(".code").removeEventListener("click");
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            active: !this.state.active
        });
    }

    // 阻止二维码的点击事件，实际上不起作用，因为react合成事件绑定在 最外层容器上( div.qr-wrapper? )上
    // 解决方法： 1. 避免合成事件与原生事件混用：handleClickQr是合成事件，但在body上绑定的是原生事件
    // 2. 问题的根源在于 div.code 上的click 事件冒泡到body, 所以可以在body 的click 事件中对 e.target 进行判断
    // 此处使用 1
    /*handleClickQr(e) {
        e.stopPropagation();
        console.log(e.currentTarget);
    }*/

    render() {
        return (
            <div className="qr-wrapper">
                <button className="qr" onClick={this.handleClick}>Quick Response code</button>
                <div 
                    className="code"
                    style={{display: this.state.active ? "block" : "none"}}
                    onClick={this.handleClickQr}
                >
                    <img src="img/qr.png" alt=""/>
                </div>
            </div>
        )
    }

}

export {QrCode};