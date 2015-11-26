/**
 * A hand for analog clock.
 * @constructor ApAnalogClockHand
 */

"use strict";

const React = require('react'),
    classnames = require('classnames'),
    types = React.PropTypes;

/** @lends ApAnalogClockHand */
let ApAnalogClockHand = React.createClass({
    propTypes: {
        angle: types.number,
        width: types.number,
        heightRate: types.number
    },
    getDefaultProps: function () {
        return {
            angle: 0,
            width: 24,
            heightRate: 1
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let className = props.className,
            angle = props.angle,
            heightRate = props.heightRate,
            width = props.width;

        return (
            <div className={classnames("ap-analog-clock-hand", className)}
                 style={{transform: `rotate(${angle}deg)`}}>
                <div className="ap-analog-clock-hand-bar-container"
                     style={{top: `${(1 - heightRate) * 100}%`}}>
                    <div className="ap-analog-clock-hand-bar"
                         style={{width: `${width}px`}}></div>
                </div>
            </div>
        );
    }
});

module.exports = ApAnalogClockHand;
