/**
 * Sub display for digital clock
 * @constructor ApDigitalClockSubDisplay
 */

"use strict";

import React, {PropTypes as types} from 'react';
import classnames from 'classnames';


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

    render() {
        let s = this,
            props = s.props;

        let fontSize = props.fontSize,
            width = props.width;

        let displayStyle = {
            fontSize: `${fontSize}px`
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
