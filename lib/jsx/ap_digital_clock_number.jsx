/**
 * Number for digital clock.
 * @constructor ApDigitalClockNumber
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    classnames = require('classnames'),
    ApDigitalClockNumberBar = require('./ap_digital_clock_number_bar');

/** @lends ApDigitalClockNumber */
let ApDigitalClockNumber = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        value: types.number
    },

    statics: {
        highlightWithNumber: function (value) {
            switch (value) {
                case 0:
                    return [true, true, true, true, true, true, true];
                case 1:
                    return [false, true, true, false, false, false, false];
                case 2:
                    return [true, true, false, true, false, false];
                default:
                    return [];
            }
        }
    },

    getDefaultProps: function () {
        return {
            value: 8
        }
    },

    render: function () {
        let s = this,
            props = s.props;

        let Bar = ApDigitalClockNumber.Bar;

        var highlights = ApDigitalClockNumber.highlightWithNumber(props.value);
        let bars = highlights.map((highlighed, i)=> {
            return (
                <ApDigitalClockNumberBar highlighed={highlighed}
                                         key={'bar-highlight-' + i}
                                         className={classnames('ap-digital-clock-number-bar-' + i)}
                ></ApDigitalClockNumberBar>
            );
        });

        return (
            <div className={classnames("ap-digital-clock-number", props.className)}>
                {bars}
            </div>
        )
    }
});

module.exports = ApDigitalClockNumber;
