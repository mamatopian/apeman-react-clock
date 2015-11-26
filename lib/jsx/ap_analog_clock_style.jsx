/**
 * Style for ApAnalogClock.
 * @constructor ApAnalogClockStyle
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    extend = require('extend'),
    ApStyle = require('apeman-react-style')['ApStyle'];

/** @lends ApAnalogClockStyle */
let ApAnalogClockStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object,
        width: types.number,
        height: types.number,
        color: types.string,
        backgroundColor: types.string
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {},
            width: 320,
            height: 240,
            color: '#333',
            backgroundColor: '#FFF'
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let width = props.width,
            height = props.height,
            color = props.color,
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
                    height: '100%',
                    display: `inline-block`
                }
            },
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={extend(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApAnalogClockStyle;
