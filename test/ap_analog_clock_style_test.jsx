/**
 * Test case for ap-analog-clock-style.
 * Runs with mocha.
 */
'use strict'

import ApAnalogClockStyle from '../lib/ap_analog_clock_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-analog-clock-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApAnalogClockStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
