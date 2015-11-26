/**
 * Sub display for digital clock
 * @constructor ApDigitalClockSubDisplay
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    ReactDOM = require('react-dom');


/** @lends ApDigitalClockSubDisplay */
let ApDigitalClockSubDisplay = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        day: types.string,
        fontSize: types.number,
        width: types.number
    },

    render: function () {
        let s = this,
            props = s.props;

        let fontSize = props.fontSize,
            width = props.width,
            lineHeight = fontSize * 1.2;

        let displayStyle = {
            fontSize: `${fontSize}px`,
            lineHeight: `${lineHeight}px`
        }, labelStyle = {
            width: `${width}px`
        };

        return (
            <div className="ap-digital-clock-sub-display" style={displayStyle}>
                <div className="ap-digital-clock-sub-label" style={labelStyle}>
                    <span>{props.day}</span>
                </div>
            </div>
        );
    }
});

module.exports = ApDigitalClockSubDisplay;
