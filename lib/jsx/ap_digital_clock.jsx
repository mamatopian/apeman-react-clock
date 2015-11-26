/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
    ReactDOM = require('react-dom'),
    classnames = require('classnames'),
    ApClock = require('./ap_clock'),
    PureRenderMixin = require('react-addons-pure-render-mixin'),
    chopcal = require('chopcal'),
    numcal = require('numcal');


/** @lends ApDigitalLock */
let ApDigitalLock = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [
        PureRenderMixin
    ],

    statics: {
        padZero: function (value, len) {
            let result = String(value);
            while (result.length < len) {
                result = "0" + result;
            }
            return result;
        }
    },

    getInitialState: function () {
        return {
            hours: "00",
            minutes: "00",
            seconds: "00",
            size: 256
        }
    },

    getDefaultProps: function () {
        return {}
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let size = state.size;

        console.log('size', size);

        let boardStyle = {
                width: size,
                height: size
            },
            mainStyle = {
                lineHeight: `${size * 0.4}px`,
                fontSize: `${parseInt(size * 0.28)}px`
            },
            subStyle = {
                fontSize: `${parseInt(size * 0.16)}px`,
                margin: `0 4px`
            };

        return (
            <ApClock className={classnames("ap-digital-clock", props.className)}>
                <div className="ap-digital-clock-board" style={boardStyle}>
                    <div className="ap-digital-clock-board-inner">
                        <span className="ap-digital-clock-main" style={mainStyle}>
                            <span>{state.hours}</span>
                            <span>:</span>
                            <span>{state.minutes}</span>
                        </span>
                        <span className="ap-digital-clock-sub" style={subStyle}>
                            <span>{state.seconds}</span>
                        </span>
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

        let padZero = ApDigitalLock.padZero;

        function _loop() {
            if (!s._looping) {
                return;
            }
            let now = new Date();

            s.setState({
                hours: padZero(now.getHours(), 2),
                minutes: padZero(now.getMinutes(), 2),
                seconds: padZero(now.getSeconds(), 2)
            });
            window.requestAnimationFrame(_loop);
        }

        window.addEventListener('resize', s.resizeClock);
        _loop();
        s.resizeClock();
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

});

module.exports = ApDigitalLock;
