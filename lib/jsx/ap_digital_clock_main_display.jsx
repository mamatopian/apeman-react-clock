/**
 * Main display for digital clock
 * @constructor ApDigitalClockMainDisplay
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    ReactDOM = require('react-dom');


/** @lends ApDigitalClockMainDisplay */
let ApDigitalClockMainDisplay = React.createClass({

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        hours: types.string,
        minutes: types.string,
        seconds: types.string,
        fontSize: types.number,
        onSizeChange: types.func
    },

    getInitialState: function () {
        return {
            detailWidth: null
        }
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let fontSize = props.fontSize;

        let mainStyle = {
            fontSize: `${fontSize}px`
        }, detailStyle = {
            fontSize: `${fontSize * 0.6}px`,
            display: `inline-block`,
            minWidth: `${state.detailWidth}px`
        };

        return (
            <div className="ap-digital-clock-main-display">
                <span className="ap-digital-clock-main-display-inner" ref="inner">
                    <span className="ap-digital-clock-main-label" style={mainStyle}>
                        <span>{props.hours}</span>
                        <span>:</span>
                        <span>{props.minutes}</span>
                    </span>
                    <span className="ap-digital-clock-detail-label"
                          ref="detail-label"
                          style={detailStyle}>
                    <span className="ap-digital-clock-dummy-text"
                          style={{fontSize: fontSize}}>&nbsp;</span>
                    <span>{props.seconds}</span>
                </span>
            </span>
            </div>
        );
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillReceiveProps: function () {
        let s = this;

        setTimeout(()=> {
            let innerElm = ReactDOM.findDOMNode(s.refs['inner']),
                detailElm = ReactDOM.findDOMNode(s.refs['detail-label']);
            let sizes = {
                innerWidth: innerElm.offsetWidth,
                detailWidth: detailElm.offsetWidth
            };
            s.setState(sizes);

            {
                let props = s.props;
                if (props.onSizeChange) {
                    props.onSizeChange(sizes);
                }
            }
        }, 10);
    }
});

module.exports = ApDigitalClockMainDisplay;
