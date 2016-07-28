/**
 * Test case for ap-digital-clock-main-display.
 * Runs with mocha.
 */
'use strict'

import ApDigitalClockMainDisplay from '../lib/ap_digital_clock_main_display'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-digital-clock-main-display', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApDigitalClockMainDisplay/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
