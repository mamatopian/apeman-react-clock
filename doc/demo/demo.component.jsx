"use strict";

const React = require('react');

const ApAnalogClock = require('../../lib/ap_analog_clock'),
    ApDigitalLock = require('../../lib/ap_digital_clock');

let Demo = React.createClass({
    render: function () {
        return (
            <div style={{display:'flex'}}>
                <div style={{width:'100%'}}>
                    <ApAnalogClock></ApAnalogClock>
                </div>
                <div style={{width:'100%'}}>
                    <ApDigitalLock></ApDigitalLock>
                </div>
            </div>
        );
    }
});

module.exports = Demo;