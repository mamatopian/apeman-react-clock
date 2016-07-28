/**
 * Test case for ap-digital-clock-sub-display.
 * Runs with mocha.
 */
'use strict'

import ApDigitalClockSubDisplay from '../lib/ap_digital_clock_sub_display'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-digital-clock-sub-display', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApDigitalClockSubDisplay/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
