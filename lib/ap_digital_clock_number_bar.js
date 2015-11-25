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

        return React.createElement('span', { className: classnames('ap-digital-clock-number-bar', {
                '.ap-digital-clock-number-bar-highlighted': highlighted
            }) });
    }
});

module.exports = ApDigitalClockNumberBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX251bWJlcl9iYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsWUFBWSxDQUFDOztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTO01BQ3ZCLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUd2QyxJQUFJLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM1QyxhQUFTLEVBQUU7QUFDUCxtQkFBVyxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQzFCO0FBQ0QsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCx1QkFBVyxFQUFFLEtBQUs7U0FDckIsQ0FBQztLQUNMO0FBQ0QsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixZQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOztBQUVwQyxlQUNJLDhCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsNkJBQTZCLEVBQUU7QUFDL0MsMERBQTBDLEVBQUMsV0FBVzthQUN6RCxDQUFDLEFBQUMsR0FDSSxDQUNqQjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUMiLCJmaWxlIjoiYXBfZGlnaXRhbF9jbG9ja19udW1iZXJfYmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE51bWJlciBmb3IgZGlnaXRhbCBjbG9jay5cbiAqIEBjb25zdHJ1Y3RvciBBcERpZ2l0YWxDbG9ja051bWJlckJhclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgdHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXMsXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuLyoqIEBsZW5kcyBBcERpZ2l0YWxDbG9ja051bWJlckJhciAqL1xubGV0IEFwRGlnaXRhbENsb2NrTnVtYmVyQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBoaWdobGlnaHRlZDogdHlwZXMuYm9vbFxuICAgIH0sXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaWdobGlnaHRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgbGV0IGhpZ2hsaWdodGVkID0gcHJvcHMuaGlnaGxpZ2h0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYXAtZGlnaXRhbC1jbG9jay1udW1iZXItYmFyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgJy5hcC1kaWdpdGFsLWNsb2NrLW51bWJlci1iYXItaGlnaGxpZ2h0ZWQnOmhpZ2hsaWdodGVkXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwRGlnaXRhbENsb2NrTnVtYmVyQmFyO1xuIl19