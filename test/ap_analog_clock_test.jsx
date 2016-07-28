/**
 * Test case for ap-analog-clock.
 * Runs with mocha.
 */
'use strict'

import ApAnalogClock from '../lib/ap_analog_clock'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-analog-clock', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApAnalogClock/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
