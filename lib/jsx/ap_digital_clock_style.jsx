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
        width: types.number,
        height: types.number,
        color: types.string,
        backgroundColor: types.string

    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {},
            width: 340,
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

        let data = {
                '.ap-digital-clock': {
                    color: color,
                    width: width,
                    height: height,
                    display: `block`,
                    margin: `0 auto`,
                    textAlign: 'center'
                },
                '.ap-digital-clock-board': {
                    backgroundColor: backgroundColor,
                    display: `inline-block`,
                    border: `2px solid ${color}`,
                    position: `relative`,
                    background: `${backgroundColor}`
                },
                '.ap-digital-clock-board-inner': {
                    position: `absolute`,
                    left: 0,
                    right: 0,
                    top: `30%`,
                    bottom: `30%`
                },
                '.ap-digital-clock-display': {
                    display: `flex`
                },
                '.ap-digital-clock-display-main': {
                    display: `inline-block`,
                    width: `100%`
                },
                '.ap-digital-clock-display-sub': {
                    display: `inline-block`
                },
                '.ap-digital-clock-display-dummy-text': {
                    opacity: 0,
                    width: 1,
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
        )
    }
});

module.exports = ApDigitalClock;
