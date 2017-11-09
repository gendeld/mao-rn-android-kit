"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import PropTypes from 'prop-types';
const react_1 = require("react");
const react_native_1 = require("react-native");
exports.LayoutParams = {
    width: PropTypes.number,
    height: PropTypes.number
};
exports.ViewGroupProperties = Object.assign({}, react_native_1.View.propTypes, {
    layoutParams: PropTypes.shape(exports.LayoutParams),
    fitsSystemWindows: PropTypes.bool
});
exports.AppBarViewProperties = Object.assign({}, exports.ViewGroupProperties, {
    layoutParams: PropTypes.shape(Object.assign({}, exports.LayoutParams, {
        scrollFlags: PropTypes.number
    }))
});
