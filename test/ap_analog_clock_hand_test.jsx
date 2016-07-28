/**
 * Test case for ap-analog-clock-hand.
 * Runs with mocha.
 */
'use strict'

import ApAnalogClockHand from '../lib/ap_analog_clock_hand'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-analog-clock-hand', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApAnalogClockHand/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
