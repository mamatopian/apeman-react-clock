/**
 * Style for ApClock.
 * @class ApClockStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'

/** @lends ApClockStyle */
const ApClockStyle = React.createClass({
  propTypes: {
    
    style: types.object
  },
  getDefaultProps () {
    return {
      
      style: {}
    }
  },
  render () {
    const s = this
    let { props } = s
    let data = {}
    let smallMediaData = {}
    let mediumMediaData = {}
    let largeMediaData = {}
    return (
      <ApStyle 
               data={ Object.assign(data, props.style) }
               smallMediaData={ smallMediaData }
               mediumMediaData={ mediumMediaData }
               largeMediaData={ largeMediaData }
      >{ props.children }</ApStyle>
    )
  }
})

export default ApClockStyle
