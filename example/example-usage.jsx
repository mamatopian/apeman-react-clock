"use strict";

const React = require('react'),
    apemanReactClock = require('apeman-react-clock');

const ApClock = apemanReactClock.ApClock,
    ApClockStyle = apemanReactClock.ApClockStyle;

let ExampleComponent = React.createClass({
    render: function () {
        return (
            <div>
                <ApClockStyle scoped></ApClockStyle>
                <ApClock></ApClock>
            </div>
        )
    }
});
