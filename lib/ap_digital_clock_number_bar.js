/**
 * Number for digital clock.
 * @constructor ApDigitalClockNumberBar
 */

"use strict";

const React = require('react'),
      types = React.PropTypes,
      classnames = require('classnames');

/** @lends ApDigitalClockNumberBar */
let ApDigitalClockNumberBar = React.createClass({
    displayName: 'ApDigitalClockNumberBar',

    propTypes: {
        highlighted: types.bool
    },
    getDefaultProps: function () {
        return {
            highlighted: false
        };
    },
    render: function () {
        let s = this,
            props = s.props;

        let highlighted = props.highlighted;

        return React.createElement('span', { className: classnames('ap-digital-clock-number-bar', props.className, {
                'ap-digital-clock-number-bar-highlighted': highlighted
            }) });
    }
});

module.exports = ApDigitalClockNumberBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX251bWJlcl9iYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsWUFBWSxDQUFDOztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTO01BQ3ZCLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUd2QyxJQUFJLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM1QyxhQUFTLEVBQUU7QUFDUCxtQkFBVyxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQzFCO0FBQ0QsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCx1QkFBVyxFQUFFLEtBQUs7U0FDckIsQ0FBQztLQUNMO0FBQ0QsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixZQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOztBQUVwQyxlQUNJLDhCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNoRSx5REFBeUMsRUFBQyxXQUFXO2FBQ3hELENBQUMsQUFBQyxHQUNKLENBQ1Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDIiwiZmlsZSI6ImFwX2RpZ2l0YWxfY2xvY2tfbnVtYmVyX2Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBOdW1iZXIgZm9yIGRpZ2l0YWwgY2xvY2suXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsQ2xvY2tOdW1iZXJCYXJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbi8qKiBAbGVuZHMgQXBEaWdpdGFsQ2xvY2tOdW1iZXJCYXIgKi9cbmxldCBBcERpZ2l0YWxDbG9ja051bWJlckJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWQ6IHR5cGVzLmJvb2xcbiAgICB9LFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCBoaWdobGlnaHRlZCA9IHByb3BzLmhpZ2hsaWdodGVkO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2FwLWRpZ2l0YWwtY2xvY2stbnVtYmVyLWJhcicsIHByb3BzLmNsYXNzTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwLWRpZ2l0YWwtY2xvY2stbnVtYmVyLWJhci1oaWdobGlnaHRlZCc6aGlnaGxpZ2h0ZWRcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwRGlnaXRhbENsb2NrTnVtYmVyQmFyO1xuIl19