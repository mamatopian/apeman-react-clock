/**
 * Test case for apClockStyle.
 * Runs with mocha.
 */
"use strict";

const ApClockStyle = require('../lib/ap_clock_style.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-clock-style', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Demo component style', (done) => {
        let style = ReactDOM.renderToString(
            React.createElement(ApClockStyle, {})
        );
        console.log(style);
        assert.ok(style);
        done();
    });
});

