/**
 * Style for ApClock.
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
        minSize: types.number,
        maxSize: types.number,
        color: types.string
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {},
            minSize: 80,
            maxSize: 480,
            color: '#555'
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let minSize = props.minSize,
            maxSize = props.maxSize,
            color = props.color;

        let data = {

                '.ap-analog-clock': {
                    minWidth: minSize,
                    minHeight: minSize,
                    maxWidth: maxSize,
                    maxHeight: maxSize,
                    display: `block`,
                    textAlign: 'center'
                },
                '.ap-analog-clock-board': {
                    width: `100%`,
                    height: `100%`,
                    border: `2px solid ${color}`,
                    display: `inline-block`,
                    position: `relative`,
                    borderRadius: `50%`
                },
                '.ap-analog-letter-container': {
                    height: `50%`,
                    width: `10%`,
                    position: `absolute`,
                    left: `45%`,
                    top: `0`,
                    display: `inline-block`,
                    transformOrigin: `50% 100%`
                },
                '.ap-analog-letter': {
                    position: `absolute`,
                    left: `0`,
                    top: `0`,
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
