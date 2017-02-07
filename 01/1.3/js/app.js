import $ from "jquery";
import EventEmitter from "events";

// import styles from "../css/style.scss"

const Selector = (classPrefix) => ({
    PREFIX: classPrefix,
    NAV: `${classPreFix}-nav`,
    CONTENT: `${classPrefix}-content`,
    TAB: `${classPrefix}-tab`,
    PANEL: `${classPrefix}-panel`,
    ACTIVE: `${classPrefix}-active`,
    DISABLE: `${classPrefix}-disable`
});

class Tabs {
    static defaultOptions = {
        classPrefix: "tabs",
        activeIndex: 0
    };

    constructor(options) {
    this.options = $.extend({}, Tabs.defaultOptions, options);
    }
}

console.log("app.js")