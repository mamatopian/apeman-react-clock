/**
 * A letter for analog clock.
 * @constructor ApAnalogClockLetter
 */


"use strict";

const React = require('react'),
    types = React.PropTypes;

/** @lends ApAnalogClockLetter */
let ApAnalogClockLetter = React.createClass({
    propTypes: {
        angle: types.number,
        letter: types.string
    },
    getDefaultProps: function () {
        return {
            angle: 0,
            letter: ''
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let angle = props.angle,
            letter = props.letter;

        let containerStyle = {transform: `rotate(${angle}deg)`},
            letterStyle = {transform: `rotate(${angle * -1}deg)`};
        return (
            <span className="ap-analog-letter"
                  style={containerStyle}>
                    <span className="ap-analog-letter-title" style={letterStyle}>{letter}</span>
                </span>
        );
    }
});

module.exports = ApAnalogClockLetter;