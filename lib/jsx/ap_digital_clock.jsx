/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
    ReactDOM = require('react-dom'),
    classnames = require('classnames'),
    ApClock = require('./ap_clock'),
    ApDigitalClockNumber = require('./ap_digital_clock_number'),
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

    statics: {},

    getInitialState: function () {
        return {
            hour: 0,
            minute: 0,
            second: 0,
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

        return (
            <ApClock className={classnames("ap-digital-clock", props.className)}>
                <div className="ap-digital-clock-board">
                    <div className="ap-digital-clock-board-inner">
                        <ApDigitalClockNumber></ApDigitalClockNumber>
                        <ApDigitalClockNumber></ApDigitalClockNumber>
                        <ApDigitalClockNumber></ApDigitalClockNumber>
                        <ApDigitalClockNumber></ApDigitalClockNumber>
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
