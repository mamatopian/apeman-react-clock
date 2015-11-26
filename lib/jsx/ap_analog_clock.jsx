/**
 * Analog clock.
 * @constructor ApAnalogClock
 */

"use strict";

const React = require('react'),
    ReactDOM = require('react-dom'),
    classnames = require('classnames'),
    ApClock = require('./ap_clock'),
    PureRenderMixin = require('react-addons-pure-render-mixin'),
    chopcal = require('chopcal'),
    numcal = require('numcal'),
    types = React.PropTypes,
    ApAnalogClockHand = require('./ap_analog_clock_hand'),
    ApAnalogClockLetter = require('./ap_analog_clock_letter');

/** @lends ApAnalogClock */
let ApAnalogClock = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        boardLetters: types.array
    },

    mixins: [
        PureRenderMixin
    ],

    statics: {
        _angleForValue: function (value, max) {
            let rate = (value % max) / max;
            return chopcal.round(rate * 360, 0.1);
        },
        hourHandAngle: function (date) {
            let hours = date.getHours();
            return ApAnalogClock._angleForValue(hours, 12);
        },
        minuteHandAngle: function (date) {
            let minutes = date.getMinutes();
            return ApAnalogClock._angleForValue(minutes, 60);
        },
        secondHandAngle: function (date) {
            let seconds = date.getSeconds();
            return ApAnalogClock._angleForValue(seconds, 60);
        },
        letterAngle: function (i, count) {
            return ApAnalogClock._angleForValue(i, count);
        }
    },

    getInitialState: function () {
        return {
            hour: 0,
            minute: 0,
            second: 0,
            size: 256
        };
    },

    getDefaultProps: function () {
        return {
            boardLetters: '12,1,2,3,4,5,6,7,8,9,10,11'.split(',')
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let letters = props.boardLetters.map((letter, i, letters)=> {
            let angle = ApAnalogClock.letterAngle(i, letters.length);
            return (
                <ApAnalogClockLetter key={"ap-analog-letter-" + i}
                                     letter={letter}
                                     angle={angle}></ApAnalogClockLetter>
            );
        });

        let size = state.size;

        let boardStyle = {
            width: size,
            height: size
        };

        return (
            <ApClock className={classnames("ap-analog-clock", props.className)}>
                <div className="ap-analog-clock-board" style={boardStyle}>
                    <div className="ap-analog-clock-board-inner">
                        <ApAnalogClockHand width={4} heightRate={0.8} angle={state.hour}></ApAnalogClockHand>
                        <ApAnalogClockHand width={4} heightRate={1} angle={state.minute}></ApAnalogClockHand>
                        <ApAnalogClockHand width={2} heightRate={1} angle={state.second}></ApAnalogClockHand>
                    </div>
                    <div>
                        {letters}
                    </div>
                </div>
            </ApClock>
        );
    },


    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function () {
        let s = this;
        s._looping = true;
    },

    componentDidMount: function () {
        let s = this,
            props = s.props;

        function _loop() {
            if (!s._looping) {
                return;
            }
            let now = new Date();
            s.setState({
                hour: ApAnalogClock.hourHandAngle(now),
                minute: ApAnalogClock.minuteHandAngle(now),
                second: ApAnalogClock.secondHandAngle(now)
            });
            window.requestAnimationFrame(_loop);
        }

        window.addEventListener('resize', s.resizeClock);
        _loop();
        s.resizeClock();
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
    },

    componentWillUpdate: function (nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate: function (prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount: function () {
        let s = this;
        window.removeEventListener('resize', s.resizeClock);
        s._looping = false;
    },

    //------------------
    // Helper
    //------------------

    resizeClock: function () {
        let s = this,
            elm = ReactDOM.findDOMNode(s);
        let size = numcal.min(elm.offsetWidth, elm.offsetHeight);
        s.setState({
            size: size
        });
    }
    //------------------
    // Private
    //------------------
});

module.exports = ApAnalogClock;
