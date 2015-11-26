/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
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

    propTypes: {
        showSeconds: types.bool
    },

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
        return {
            showSeconds: true
        }
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let size = state.size;

        let mainFontSize = parseInt(size * 0.2),
            mainLineHeight = size * 0.4,
            smallFontSize = parseInt(size * 0.12);

        let boardStyle = {
                width: `${size}px`,
                height: `${size}px`
            },
            mainStyle = {
                lineHeight: `${mainLineHeight}px`,
                fontSize: `${mainFontSize}px`
            },
            subStyle = {
                lineHeight: `${mainLineHeight}px`,
                fontSize: `${smallFontSize}px`,
                width: `${size * 0.22}px`
            };

        return (
            <ApClock className={classnames("ap-digital-clock", props.className)}>
                <div className="ap-digital-clock-board" style={boardStyle}>
                    <div className="ap-digital-clock-board-inner">
                        <div className="ap-digital-clock-display">
                            <span className="ap-digital-clock-display-main" style={mainStyle}>
                                <span>{state.hours}</span>
                                <span>:</span>
                                <span>{state.minutes}</span>
                                <span className="ap-digital-clock-display-sub" style={subStyle}>
                                    <span className="ap-digital-clock-display-dummy-text"
                                          style={{fontSize: mainFontSize}}>&nbsp;</span>
                                    <span>{state.seconds}</span>
                                </span>
                            </span>
                        </div>
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
