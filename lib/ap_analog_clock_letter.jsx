/**
 * A letter for analog clock.
 * @constructor ApAnalogClockLetter
 */


"use strict";

import React, {PropTypes as types} from 'react';
import classnames from 'classnames';

/** @lends ApAnalogClockLetter */
let ApAnalogClockLetter = React.createClass({
    propTypes: {
        angle: types.number,
        letter: types.string
    },
    getDefaultProps() {
        return {
            angle: 0,
            letter: ''
        }
    },
    render() {
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