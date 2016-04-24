/**
 * Style for ApClock.
 * @constructor ApClockStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'

/** @lends ApClockStyle */
const ApClockStyle = React.createClass({
  propTypes: {
    scoped: types.bool,
    style: types.object
  },
  getDefaultProps () {
    return {
      scoped: false,
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
      <ApStyle scoped={ props.scoped }
               data={ Object.assign(data, props.style) }
               smallMediaData={ smallMediaData }
               mediumMediaData={ mediumMediaData }
               largeMediaData={ largeMediaData }
      >{ props.children }</ApStyle>
    )
  }
})

module.exports = ApClockStyle
