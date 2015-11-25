/**
 * Number for digital clock.
 * @constructor ApDigitalClockNumberBar
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    classnames = require('classnames');

/** @lends ApDigitalClockNumberBar */
let ApDigitalClockNumberBar = React.createClass({
    propTypes: {
        highlighted: types.bool
    },
    getDefaultProps: function () {
        return {
            highlighted: false
        };
    },
    render: function () {
        let s = this,
            props = s.props;

        let highlighted = props.highlighted;

        return (
            <span className={classnames('ap-digital-clock-number-bar', {
                        '.ap-digital-clock-number-bar-highlighted':highlighted
                    })}>
                    </span>
        );
    }
});

module.exports = ApDigitalClockNumberBar;
