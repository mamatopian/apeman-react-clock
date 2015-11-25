/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
      ReactDOM = require('react-dom'),
      classnames = require('classnames'),
      ApClock = require('./ap_clock'),
      ApDigitalClockNumber = require('./ap_digital_clock_number'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      chopcal = require('chopcal'),
      numcal = require('numcal');

/** @lends ApDigitalLock */
let ApDigitalLock = React.createClass({
    displayName: 'ApDigitalLock',

    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [PureRenderMixin],

    statics: {},

    getInitialState: function () {
        return {
            hour: 0,
            minute: 0,
            second: 0,
            size: 256
        };
    },

    getDefaultProps: function () {
        return {};
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        return React.createElement(
            ApClock,
            { className: classnames("ap-digital-clock", props.className) },
            React.createElement(
                'div',
                { className: 'ap-digital-clock-board' },
                React.createElement(
                    'div',
                    { className: 'ap-digital-clock-board-inner' },
                    React.createElement(ApDigitalClockNumber, null),
                    React.createElement(ApDigitalClockNumber, null),
                    React.createElement(ApDigitalClockNumber, null),
                    React.createElement(ApDigitalClockNumber, null)
                )
            )
        );
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function () {
        let s = this;
        s._looping = true;
    },

    componentDidMount: function () {
        let s = this,
            props = s.props;

        function _loop() {
            if (!s._looping) {
                return;
            }
            let now = new Date();
            s.setState({});
            window.requestAnimationFrame(_loop);
        }

        window.addEventListener('resize', s.resizeClock);
        _loop();
        s.resizeClock();
    },

    componentWillUnmount: function () {
        let s = this;
        window.removeEventListener('resize', s.resizeClock);
        s._looping = false;
    },

    //------------------
    // Helper
    //------------------

    resizeClock: function () {
        let s = this,
            elm = ReactDOM.findDOMNode(s);
        let size = numcal.min(elm.offsetWidth, elm.offsetHeight);
        s.setState({
            size: size
        });
    }

});

module.exports = ApDigitalLock;
//# sourceMappingURL=data:application/json;base64,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QUFHLElBQUk7WUFDUixHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFJLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pELFNBQUMsQ0FBQyxRQUFRLENBQUM7QUFDUCxnQkFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7S0FDTjs7Q0FFSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMiLCJmaWxlIjoiYXBfZGlnaXRhbF9jbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEaWdpdGFsIGNsb2NrXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsTG9ja1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKSxcbiAgICBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIEFwQ2xvY2sgPSByZXF1aXJlKCcuL2FwX2Nsb2NrJyksXG4gICAgQXBEaWdpdGFsQ2xvY2tOdW1iZXIgPSByZXF1aXJlKCcuL2FwX2RpZ2l0YWxfY2xvY2tfbnVtYmVyJyksXG4gICAgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJyksXG4gICAgY2hvcGNhbCA9IHJlcXVpcmUoJ2Nob3BjYWwnKSxcbiAgICBudW1jYWwgPSByZXF1aXJlKCdudW1jYWwnKTtcblxuXG4vKiogQGxlbmRzIEFwRGlnaXRhbExvY2sgKi9cbmxldCBBcERpZ2l0YWxMb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7fSxcblxuICAgIG1peGluczogW1xuICAgICAgICBQdXJlUmVuZGVyTWl4aW5cbiAgICBdLFxuXG4gICAgc3RhdGljczoge30sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvdXI6IDAsXG4gICAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgICBzZWNvbmQ6IDAsXG4gICAgICAgICAgICBzaXplOiAyNTZcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcENsb2NrIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImFwLWRpZ2l0YWwtY2xvY2tcIiwgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1ib2FyZC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwRGlnaXRhbENsb2NrTnVtYmVyPjwvQXBEaWdpdGFsQ2xvY2tOdW1iZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBEaWdpdGFsQ2xvY2tOdW1iZXI+PC9BcERpZ2l0YWxDbG9ja051bWJlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcERpZ2l0YWxDbG9ja051bWJlcj48L0FwRGlnaXRhbENsb2NrTnVtYmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwRGlnaXRhbENsb2NrTnVtYmVyPjwvQXBEaWdpdGFsQ2xvY2tOdW1iZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BcENsb2NrPlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5fbG9vcGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIGlmICghcy5fbG9vcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2xvb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMucmVzaXplQ2xvY2spO1xuICAgICAgICBfbG9vcCgpO1xuICAgICAgICBzLnJlc2l6ZUNsb2NrKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMucmVzaXplQ2xvY2spO1xuICAgICAgICBzLl9sb29waW5nID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHJlc2l6ZUNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIGVsbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpO1xuICAgICAgICBsZXQgc2l6ZSA9IG51bWNhbC5taW4oZWxtLm9mZnNldFdpZHRoLCBlbG0ub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBEaWdpdGFsTG9jaztcbiJdfQ==