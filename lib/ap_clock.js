/**
 * Abstract clock.
 * @constructor ApClock
 */

"use strict";

const React = require('react'),
      classnames = require('classnames'),
      types = React.PropTypes;

/** @lends ApClock */
let ApClock = React.createClass({
    displayName: 'ApClock',

    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {};
    },

    getDefaultProps: function () {
        return {};
    },

    render: function () {
        let s = this,
            props = s.props;

        return React.createElement(
            'div',
            { className: classnames("ap-clock", props.className) },
            props.children
        );
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function () {
        let s = this;
    },

    componentDidMount: function () {
        let s = this;
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        let s = this;
        return true;
    },

    componentWillUpdate: function (nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate: function (prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount: function () {
        let s = this;
    }

    //------------------
    // Helper
    //------------------

    //------------------
    // Private
    //------------------
});

module.exports = ApClock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9jbG9jay5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7OztBQUFDLEFBRzVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7QUFPNUIsYUFBUyxFQUFFLEVBQUU7O0FBRWIsVUFBTSxFQUFFLEVBQUU7O0FBRVYsV0FBTyxFQUFFLEVBQ1I7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFBRSxDQUFDO0tBQ2I7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFBRSxDQUFDO0tBQ2I7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixlQUNJOztjQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQUFBQztZQUNuRCxLQUFLLENBQUMsUUFBUTtTQUNiLENBQ1I7S0FDTDs7Ozs7O0FBT0Qsc0JBQWtCLEVBQUUsWUFBWTtBQUM1QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQscUJBQWlCLEVBQUUsWUFBWTtBQUMzQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQsNkJBQXlCLEVBQUUsVUFBVSxTQUFTLEVBQUU7QUFDNUMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELHlCQUFxQixFQUFFLFVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNuRCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixlQUFPLElBQUksQ0FBQztLQUNmOztBQUVELHVCQUFtQixFQUFFLFVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNqRCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQsc0JBQWtCLEVBQUUsVUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ2hELFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjs7QUFFRCx3QkFBb0IsRUFBRSxZQUFZO0FBQzlCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjs7Ozs7Ozs7O0FBQUEsQ0FTSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiYXBfY2xvY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtY2xvY2svbGliL2pzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWJzdHJhY3QgY2xvY2suXG4gKiBAY29uc3RydWN0b3IgQXBDbG9ja1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqIEBsZW5kcyBBcENsb2NrICovXG5sZXQgQXBDbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7fSxcblxuICAgIG1peGluczogW10sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYXAtY2xvY2tcIiwgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcENsb2NrO1xuIl19