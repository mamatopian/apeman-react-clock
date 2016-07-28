/**
 * Test case for ap-digital-clock-style.
 * Runs with mocha.
 */
'use strict'

import ApDigitalClockStyle from '../lib/ap_digital_clock_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-digital-clock-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApDigitalClockStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
