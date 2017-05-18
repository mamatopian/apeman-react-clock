/**
 * Test case for ap-digital-clock.
 * Runs with mocha.
 */
'use strict'

import ApDigitalClock from '../lib/ap_digital_clock'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('ap-digital-clock', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <ApDigitalClock timezone={'Europe/London'}/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
