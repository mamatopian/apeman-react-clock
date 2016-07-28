/**
 * Test case for ap-clock-style.
 * Runs with mocha.
 */
'use strict'

import ApClockStyle from '../lib/ap_clock_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-clock-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApClockStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
