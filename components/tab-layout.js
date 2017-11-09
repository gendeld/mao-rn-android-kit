"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import PropTypes from 'prop-types';
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const Commands = react_native_1.UIManager.MaoKitsTabLayoutAndroid.Commands;
const SETUP_VIEW_PAGER = Commands.setupViewPager;
const SET_VIEW_SIZE = Commands.setViewSize;
class TabLayout extends react_1.PureComponent {
    render() {
        return (React.createElement(RCTTabLayout, Object.assign({}, this.props, { style: [
                { height: 48 },
                this.props.style
            ] })));
    }
    setViewPager(viewPager, tabs, smoothScroll = true) {
        if (!viewPager) {
            return;
        }
        const viewPagerID = react_native_1.findNodeHandle(viewPager);
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), SETUP_VIEW_PAGER, [viewPagerID, tabs, smoothScroll]);
    }
    setViewSize(width, height) {
        let sizeMap = {};
        if (width !== undefined) {
            sizeMap.height = width;
        }
        if (height !== undefined) {
            sizeMap.width = height;
        }
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), SET_VIEW_SIZE, [sizeMap]);
    }
}
TabLayout.propTypes = Object.assign({}, react_native_1.View.propTypes, {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })),
    tabTextColor: PropTypes.string,
    tabTextSize: PropTypes.number,
    tabSelectedTextColor: PropTypes.string,
    tabIndicatorColor: PropTypes.string,
    tabIndicatorHeight: PropTypes.number,
    tabMode: PropTypes.oneOf(['scrollable', 'fixed']),
    tabGravity: PropTypes.oneOf(['center', 'fill']),
    tabHeight: PropTypes.number,
    tabSidePadding: PropTypes.number,
    activeTabStyle: PropTypes.object
});
exports.default = TabLayout;
const RCTTabLayout = react_native_1.requireNativeComponent('MaoKitsTabLayoutAndroid', TabLayout, {
    nativeOnly: {}
});
