/**
 * Test case for apClock.
 * Runs with mocha.
 */
"use strict";

const ApClock = require('../lib/ap_clock.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-clock', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Demo component', (done) => {
        let html = ReactDOM.renderToString(
            React.createElement('div',
                {},
                React.createElement(ApClock, {})
            )
        );
        console.log(html);
        assert.ok(html);
        done();
    });
});

