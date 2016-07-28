/**
 * Test case for ap-clock.
 * Runs with mocha.
 */
'use strict'

import ApClock from '../lib/ap_clock'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-clock', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApClock/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
