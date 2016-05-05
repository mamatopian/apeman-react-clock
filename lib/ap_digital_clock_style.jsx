/**
 * Style for ApDigitalClock
 * @class ApDigitalClock
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import {ApStyle} from 'apeman-react-style'

/** @lends ApDigitalClock */
const ApDigitalClock = React.createClass({
  propTypes: {
    style: types.object,
    width: types.number,
    height: types.number,
    color: types.string,
    backgroundColor: types.string

  },
  getDefaultProps () {
    return {
      style: {},
      width: 340,
      height: 240,
      color: '#333',
      backgroundColor: '#FFF'
    }
  },
  render () {
    const s = this
    let { props } = s

    let {
      width,
      height,
      color,
      backgroundColor
    } = props

    let data = {
      '.ap-digital-clock': {
        color: color,
        width: width,
        height: height,
        display: 'block',
        margin: '0 auto',
        textAlign: 'center'
      },
      '.ap-digital-clock-board': {
        backgroundColor: backgroundColor,
        display: 'inline-block',
        border: `2px solid ${color}`,
        position: 'relative',
        background: `${backgroundColor}`
      },
      '.ap-digital-clock-board-inner': {
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      '.ap-digital-clock-dummy-text': {
        opacity: 0,
        width: 1,
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '-1px',
        whiteSpace: 'pre',
        overflow: 'hidden'
      },
      '.ap-digital-clock-main-display': {},
      '.ap-digital-clock-sub-display': {
        overflow: 'hidden',
        textAlign: 'right'
      },
      '.ap-digital-clock-sub-label': {
        display: 'block',
        margin: '2px auto'
      }
    }
    let smallMediaData = {}
    let mediumMediaData = {}
    let largeMediaData = {}
    return (
      <ApStyle data={ Object.assign(data, props.style) }
               smallMediaData={ smallMediaData }
               mediumMediaData={ mediumMediaData }
               largeMediaData={ largeMediaData }
      >{ props.children }</ApStyle>
    )
  }
})

export default ApDigitalClock;
