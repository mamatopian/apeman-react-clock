/**
 * Sub display for digital clock
 * @constructor ApDigitalClockSubDisplay
 */

"use strict";

const React = require('react'),
      types = React.PropTypes,
      ReactDOM = require('react-dom'),
      classnames = require('classnames');

/** @lends ApDigitalClockSubDisplay */
let ApDigitalClockSubDisplay = React.createClass({
    displayName: 'ApDigitalClockSubDisplay',

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        day: types.string,
        fontSize: types.number,
        width: types.number
    },

    render: function () {
        let s = this,
            props = s.props;

        let fontSize = props.fontSize,
            width = props.width;

        let displayStyle = {
            fontSize: `${ fontSize }px`
        },
            labelStyle = {
            width: `${ width }px`
        };

        return React.createElement(
            'div',
            { className: 'ap-digital-clock-sub-display', style: displayStyle },
            React.createElement(
                'div',
                { className: 'ap-digital-clock-sub-label', style: labelStyle },
                React.createElement(
                    'span',
                    null,
                    props.day
                )
            )
        );
    }
});

module.exports = ApDigitalClockSubDisplay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX3N1Yl9kaXNwbGF5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUztNQUN2QixRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztNQUMvQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQzs7O0FBQUMsQUFJdkMsSUFBSSx3QkFBd0IsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0FBTTdDLGFBQVMsRUFBRTtBQUNQLFdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNqQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLGFBQUssRUFBRSxLQUFLLENBQUMsTUFBTTtLQUN0Qjs7QUFFRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLFlBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRO1lBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztBQUV4QixZQUFJLFlBQVksR0FBRztBQUNmLG9CQUFRLEVBQUUsQ0FBQyxHQUFFLFFBQVEsRUFBQyxFQUFFLENBQUM7U0FDNUI7WUFBRSxVQUFVLEdBQUc7QUFDWixpQkFBSyxFQUFFLENBQUMsR0FBRSxLQUFLLEVBQUMsRUFBRSxDQUFDO1NBQ3RCLENBQUM7O0FBRUYsZUFDSTs7Y0FBSyxTQUFTLEVBQUMsOEJBQThCLEVBQUMsS0FBSyxFQUFFLFlBQVksQUFBQztZQUM5RDs7a0JBQUssU0FBUyxFQUFDLDRCQUE0QixFQUFDLEtBQUssRUFBRSxVQUFVLEFBQUM7Z0JBQzFEOzs7b0JBQU8sS0FBSyxDQUFDLEdBQUc7aUJBQVE7YUFDdEI7U0FDSixDQUNSO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyIsImZpbGUiOiJhcF9kaWdpdGFsX2Nsb2NrX3N1Yl9kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1YiBkaXNwbGF5IGZvciBkaWdpdGFsIGNsb2NrXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsQ2xvY2tTdWJEaXNwbGF5XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcyxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cblxuLyoqIEBsZW5kcyBBcERpZ2l0YWxDbG9ja1N1YkRpc3BsYXkgKi9cbmxldCBBcERpZ2l0YWxDbG9ja1N1YkRpc3BsYXkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZGF5OiB0eXBlcy5zdHJpbmcsXG4gICAgICAgIGZvbnRTaXplOiB0eXBlcy5udW1iZXIsXG4gICAgICAgIHdpZHRoOiB0eXBlcy5udW1iZXJcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBsZXQgZm9udFNpemUgPSBwcm9wcy5mb250U2l6ZSxcbiAgICAgICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7XG5cbiAgICAgICAgbGV0IGRpc3BsYXlTdHlsZSA9IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGBcbiAgICAgICAgfSwgbGFiZWxTdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLXN1Yi1kaXNwbGF5XCIgc3R5bGU9e2Rpc3BsYXlTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLXN1Yi1sYWJlbFwiIHN0eWxlPXtsYWJlbFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcERpZ2l0YWxDbG9ja1N1YkRpc3BsYXk7XG4iXX0=