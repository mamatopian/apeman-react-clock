"use strict";

const React = require('react');

const ApAnalogClock = require('../../lib/ap_analog_clock'),
    ApDigitalLock = require('../../lib/ap_digital_clock');

let Demo = React.createClass({
    render: function () {
        return (
            <div>
                <ApAnalogClock></ApAnalogClock>
                <ApDigitalLock></ApDigitalLock>
            </div>
        );
    }
});

module.exports = Demo;