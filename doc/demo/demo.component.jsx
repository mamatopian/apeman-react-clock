'use strict'

import React from 'react'

import ApAnalogClock from '../../lib/ap_analog_clock'
import ApDigitalLock from '../../lib/ap_digital_clock'

const Demo = React.createClass({
  render () {
    return (
      <div style={ {display:'flex'} }>
        <div style={ {width:'100%'} }>
          <ApAnalogClock />
        </div>
        <div style={ {width:'100%'} }>
          <ApDigitalLock/>
        </div>
      </div>
    )
  }
})

module.exports = Demo
