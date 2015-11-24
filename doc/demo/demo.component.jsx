"use strict";

const React = require('react');

const ApAnalogClock = require('../../lib/ap_analog_clock');

let Demo = React.createClass({
    render: function () {
        return (
            <div>
                <ApAnalogClock></ApAnalogClock>
            </div>
        );
    }
});

module.exports = Demo;