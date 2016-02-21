/**
 * Abstract clock.
 * @constructor ApClock
 */

"use strict";

const React = require('react'),
    classnames = require('classnames'),
    types = React.PropTypes;

/** @lends ApClock */
let ApClock = React.createClass({


    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [],

    statics: {
    },

    getInitialState() {
        return {};
    },

    getDefaultProps() {
        return {};
    },

    render() {
        let s = this,
            props = s.props;

        return (
            <div className={classnames("ap-clock", props.className)}>
                {props.children}
            </div>
        );
    },


    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
    },

    componentDidMount() {
        let s = this;
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
    },

    shouldComponentUpdate(nextProps, nextState) {
        let s = this;
        return true;
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
    }

    //------------------
    // Helper
    //------------------

    //------------------
    // Private
    //------------------
});

module.exports = ApClock;
