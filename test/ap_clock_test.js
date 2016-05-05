/**
 * Test case for apClock.
 * Runs with mocha.
 */
'use strict'

const ApClock = require('../lib/ap_clock.js').default
const React = require('react')
const ReactDOM = require('react-dom/server')
const assert = require('assert')

describe('ap-clock', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Demo component', (done) => {
    let html = ReactDOM.renderToString(
      React.createElement('div',
        {},
        React.createElement(ApClock, {})
      )
    )
    console.log(html)
    assert.ok(html)
    done()
  })
})

/* global describe, before, after, it */
