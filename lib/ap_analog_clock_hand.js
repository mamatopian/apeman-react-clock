/**
 * A hand for analog clock.
 * @constructor ApAnalogClockHand
 */

"use strict";

const React = require('react'),
      classnames = require('classnames'),
      types = React.PropTypes;

/** @lends ApAnalogClockHand */
let ApAnalogClockHand = React.createClass({
    displayName: 'ApAnalogClockHand',

    propTypes: {
        angle: types.number,
        width: types.number,
        heightRate: types.number
    },
    getDefaultProps: function () {
        return {
            angle: 0,
            width: 24,
            heightRate: 1
        };
    },
    render: function () {
        let s = this,
            props = s.props;

        let className = props.className,
            angle = props.angle,
            heightRate = props.heightRate,
            width = props.width;

        return React.createElement(
            'div',
            { className: classnames("ap-analog-clock-hand", className),
                style: { transform: `rotate(${ angle }deg)` } },
            React.createElement(
                'div',
                { className: 'ap-analog-clock-hand-bar-container',
                    style: { top: `${ (1 - heightRate) * 100 }%` } },
                React.createElement('div', { className: 'ap-analog-clock-hand-bar',
                    style: { width: `${ width }px` } })
            )
        );
    }
});

module.exports = ApAnalogClockHand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9hbmFsb2dfY2xvY2tfaGFuZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7OztBQUFDLEFBRzVCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3RDLGFBQVMsRUFBRTtBQUNQLGFBQUssRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNuQixhQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFDbkIsa0JBQVUsRUFBRSxLQUFLLENBQUMsTUFBTTtLQUMzQjtBQUNELG1CQUFlLEVBQUUsWUFBWTtBQUN6QixlQUFPO0FBQ0gsaUJBQUssRUFBRSxDQUFDO0FBQ1IsaUJBQUssRUFBRSxFQUFFO0FBQ1Qsc0JBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUE7S0FDSjtBQUNELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFcEIsWUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVM7WUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO1lBQ25CLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVTtZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7QUFHeEIsZUFDSTs7Y0FBSyxTQUFTLEVBQUUsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQyxBQUFDO0FBQ3pELHFCQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEdBQUUsS0FBSyxFQUFDLElBQUksQ0FBQyxFQUFDLEFBQUM7WUFDM0M7O2tCQUFLLFNBQVMsRUFBQyxvQ0FBb0M7QUFDOUMseUJBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFBLEdBQUksR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEFBQUM7Z0JBQzVDLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7QUFDcEMseUJBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEdBQUUsS0FBSyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEFBQUMsR0FBTzthQUN2QztTQUNKLENBQ1I7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDIiwiZmlsZSI6ImFwX2FuYWxvZ19jbG9ja19oYW5kLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgaGFuZCBmb3IgYW5hbG9nIGNsb2NrLlxuICogQGNvbnN0cnVjdG9yIEFwQW5hbG9nQ2xvY2tIYW5kXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKiogQGxlbmRzIEFwQW5hbG9nQ2xvY2tIYW5kICovXG5sZXQgQXBBbmFsb2dDbG9ja0hhbmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGFuZ2xlOiB0eXBlcy5udW1iZXIsXG4gICAgICAgIHdpZHRoOiB0eXBlcy5udW1iZXIsXG4gICAgICAgIGhlaWdodFJhdGU6IHR5cGVzLm51bWJlclxuICAgIH0sXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgICAgIGhlaWdodFJhdGU6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgYW5nbGUgPSBwcm9wcy5hbmdsZSxcbiAgICAgICAgICAgIGhlaWdodFJhdGUgPSBwcm9wcy5oZWlnaHRSYXRlLFxuICAgICAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImFwLWFuYWxvZy1jbG9jay1oYW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7dHJhbnNmb3JtOiBgcm90YXRlKCR7YW5nbGV9ZGVnKWB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwLWFuYWxvZy1jbG9jay1oYW5kLWJhci1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0b3A6IGAkeygxIC0gaGVpZ2h0UmF0ZSkgKiAxMDB9JWB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1hbmFsb2ctY2xvY2staGFuZC1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IGAke3dpZHRofXB4YH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBBbmFsb2dDbG9ja0hhbmQ7XG4iXX0=