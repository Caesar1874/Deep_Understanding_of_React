import React, {Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import TabPane from './TabPane';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            activeIndex: 0,
        };
    }

    handleChange(e) {
        this.setState({
            activeIndex: parseInt(e.target.value, 10),
        });
    }

    render() {
        // 这里切换 select 中的选项是没有作用的，因为使用的是 defaultActiveIndex，
        // 如果想要作用的话，要把 defaultActiveIndex 改成 activeIndex 就可以
        return (
            <div>
                <div className="operator">
                    <span>切换 Tab：</span>
                    <select value={this.state.activeIndex} onChange={this.handleChange}>
                        <option value="0">Tab 1</option>
                        <option value="1">Tab 2</option>
                        <option value="2">Tab 3</option>
                    </select>
                </div>

                {/*这里是对 Tabs 组件的调用， 为什么要用这种方式：动态子组件*/}
                {/*调用时使用 组件本身 以及 最底层的子组件，子组件已经包含了完整渲染组件所需要的信息，组件在渲染时根据子组件生成中间的组件*/}
                {/* TabPane 的 tab 属性用于生成 TabNav */}
                {/* tab 属性可以是字符串或者节点*/}
                <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
                    <TabPane
                        order="0"
                        tab={<span><i className="fa fa-home">&nbsp; Home</i></span>}>
                        第一个 Tab 里的内容
                    </TabPane>
                    <TabPane
                        order="1"
                        tab={<span><i className="fa fa-book">&nbsp; Library</i></span>}>
                        第二个 Tab 里的内容
                    </TabPane>
                    <TabPane
                        order="2"
                        tab={<span><i className="fa fa-pencil">&nbsp; Application</i></span>}>
                        第三个 Tab 里的内容
                    </TabPane>
                    {/*<TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
                     <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
                     <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>*/}
                </Tabs>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
