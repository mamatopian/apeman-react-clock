"use strict";

const React = require('react'),
    apemanReactClock = require('apeman-react-clock');

const ApAnalogClock = apemanReactClock.ApAnalogClock,
    ApAnalogClockStyle = apemanReactClock.ApAnalogClockStyle;

let ExampleComponent = React.createClass({
    render: function () {
        return (
            <div>
                <ApAnalogClockStyle scoped></ApAnalogClockStyle>
                <ApAnalogClock></ApAnalogClock>
            </div>
        )
    }
});
