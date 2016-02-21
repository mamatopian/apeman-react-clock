/**
 * Style for ApAnalogClock.
 * @constructor ApAnalogClockStyle
 */

"use strict";

import React, {PropTypes as types} from 'react';
import classnames from 'classnames';
import {ApStyle} from 'apeman-react-style';

/** @lends ApAnalogClockStyle */
let ApAnalogClockStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object,
        width: types.number,
        height: types.number,
        color: types.string,
        accentColor: types.string,
        backgroundColor: types.string
    },
    getDefaultProps() {
        return {
            scoped: false,
            style: {},
            width: 320,
            height: 240,
            color: '#333',
            accentColor: '#F33',
            backgroundColor: '#FFF'
        }
    },
    render() {
        let s = this,
            props = s.props;

        let width = props.width,
            height = props.height,
            color = props.color,
            accentColor = props.accentColor,
            backgroundColor = props.backgroundColor;

        let boardPadding = 18;

        let data = {
                '.ap-analog-clock': {
                    width: width,
                    height: height,
                    display: `block`,
                    margin: `0 auto`,
                    textAlign: 'center',
                    position: `relative`
                },
                '.ap-analog-clock-board': {
                    width: `100%`,
                    height: `100%`,
                    border: `2px solid ${color}`,
                    display: `inline-block`,
                    position: `relative`,
                    borderRadius: `50%`,
                    backgroundColor: `${backgroundColor}`
                },
                '.ap-analog-clock-board-inner': {
                    position: `absolute`,
                    left: boardPadding,
                    top: boardPadding,
                    right: boardPadding,
                    bottom: boardPadding
                },
                '.ap-analog-letter': {
                    height: `50%`,
                    width: `10%`,
                    position: `absolute`,
                    left: `45%`,
                    top: `0`,
                    display: `inline-block`,
                    transformOrigin: `50% 100%`
                },
                '.ap-analog-letter-title': {
                    position: `absolute`,
                    left: `0`,
                    top: `4px`,
                    display: `inline-block`
                },
                '.ap-analog-clock-hand': {
                    height: `50%`,
                    width: `10%`,
                    position: `absolute`,
                    left: `45%`,
                    top: `0`,
                    display: `inline-block`,
                    transformOrigin: `50% 100%`
                },
                '.ap-analog-clock-hand-bar-container': {
                    position: `absolute`,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: -8,
                    display: `inline-block`,
                    textAlign: `center`
                },
                '.ap-analog-clock-hand-bar': {
                    background: `${color}`,
                    width: 24,
                    height: `100%`,
                    borderRadius: `1px`,
                    display: `inline-block`
                },
                '.ap-analog-clock-hand-second .ap-analog-clock-hand-bar': {
                    background: `${accentColor}`
                },
                '.ap-analog-clock-screw-container': {
                    display: `block`,
                    position: `absolute`,
                    left: `40%`,
                    right: `40%`,
                    width: `20%`,
                    bottom: `50%`,
                    textAlign: `center`
                },
                '.ap-analog-clock-screw': {
                    position: `relative`,
                    display: `inline-block`,
                    borderRadius: `50%`,
                    background: `${accentColor}`
                }
            },
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={Object.assign(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApAnalogClockStyle;
