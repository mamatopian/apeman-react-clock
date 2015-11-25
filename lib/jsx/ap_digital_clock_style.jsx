/**
 * Style for ApDigitalClock
 * @constructor ApDigitalClock
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    extend = require('extend'),
    ApStyle = require('apeman-react-style')['ApStyle'];

/** @lends ApDigitalClock */
let ApDigitalClock = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object,
        highlightColor: types.string,
        numberColor: types.string,
        numberWidth: types.number,
        numberHeight: types.number
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {},
            highlightColor: '#38E',
            numberColor: '#AAA',
            numberWidth: 8,
            numberHeight: 24
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let highlightColor = props.highlightColor,
            numberColor = props.numberColor,
            numberWidth = props.numberWidth,
            numberHeight = props.numberHeight;

        let barWidth = numberWidth / 10,
            barHeight = numberHeight * 0.45;

        let data = {
                '.ap-digital-clock-number': {
                    width: `${numberWidth}px`,
                    height: `${numberHeight}px`
                },
                '.ap-digital-clock-number-bar': {
                    display: `inline-block`,
                    width: `${barWidth}px`,
                    height: `${barHeight}px`,
                    backgroundColor: `${numberColor}`,
                    position: 'absolute'
                },
                '.ap-digital-clock-number-bar-highlighted': {
                    backgroundColor: `${highlightColor}`
                },
                '.ap-digital-clock-number-bar-0': {

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
        )
    }
});

module.exports = ApDigitalClock;
