/**
 * Test case for ap-analog-clock-letter.
 * Runs with mocha.
 */
'use strict'

import ApAnalogClockLetter from '../lib/ap_analog_clock_letter'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-analog-clock-letter', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApAnalogClockLetter/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
