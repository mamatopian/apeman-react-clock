'use strict'

import React from 'react'

import ApAnalogClock from '../../lib/ap_analog_clock'
import ApAnalogClockStyle from '../../lib/ap_analog_clock_style'
import ApDigitalLock from '../../lib/ap_digital_clock'
import ApDigitalLockStyle from '../../lib/ap_digital_clock_style'

const Demo = React.createClass({
  render () {
    return (
      <div style={ {display: 'flex'} }>
        <ApAnalogClockStyle highlightColor="b35600"/>
        <ApDigitalLockStyle highlightColor="b35600"/>
        <div style={ {width: '100%'} }>
          <ApAnalogClock timezone={'Europe/London'} />
        </div>
        <div style={ {width:'100%'} }>
          <ApDigitalLock timezone={'America/New_York'}/>
        </div>
      </div>
    )
  }
})

export default Demo
