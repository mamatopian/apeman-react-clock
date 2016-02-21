/**
 * Style for ApClock.
 * @constructor ApClockStyle
 */

"use strict";

import React, {PropTypes as types} from 'react';
import classnames from 'classnames';
import {ApStyle} from 'apeman-react-style';

/** @lends ApClockStyle */
let ApClockStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object
    },
    getDefaultProps() {
        return {
            scoped: false,
            style: {}
        }
    },
    render() {
        let s = this,
            props = s.props;
        let data = {},
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={Object.assign(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApClockStyle;
