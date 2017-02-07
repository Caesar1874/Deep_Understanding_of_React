import React, {Component, PropTypes, cloneElement} from 'react';
import styles from '../css/style.scss';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tabs extends Component {
    // todo ?
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func,
    };

    // 默认属性
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {
            console.log("click onChange");
        },
    };

    constructor(props) {
        super(props);

        const currProps = this.props;

        this.handleTabClick = this.handleTabClick.bind(this);

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex,
            });
        }
    }

    handleTabClick(activeIndex) {
        console.log(activeIndex);
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex,
            });

            this.props.onChange({activeIndex, prevIndex});
        }
    }

    renderTabNav() {
        const {classPrefix, children} = this.props;

        return (
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    renderTabContent() {
        const {classPrefix, children} = this.props;

        return (
            <TabContent
                key="tabcontent"
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    render() {
        const {className} = this.props;
        const cx = classnames(className, 'ui-tabs');

        return (
            <div className={cx}>
                {/* 这两个方法将 调用Tabs时传入的 children 作为参数, 然后调用 TabNav 和 TabContent */}
                {/* 在TabNav 和 TabContent 内，对 children 进行遍历，生成最终要渲染的子组件*/}
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
}

export default Tabs;
