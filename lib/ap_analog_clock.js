/**
 * Abstract clock.
 * @constructor ApAnalogClock
 */

"use strict";

const React = require('react'),
      ReactDOM = require('react-dom'),
      classnames = require('classnames'),
      ApClock = require('./ap_clock'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      chopcal = require('chopcal'),
      numcal = require('numcal'),
      types = React.PropTypes;

/** @lends ApAnalogClock */
let ApAnalogClock = React.createClass({
    displayName: 'ApAnalogClock',

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        boardLetters: types.array
    },

    mixins: [PureRenderMixin],

    statics: {
        _angleForValue: function (value, max) {
            let rate = value % max / max;
            return chopcal.round(rate * 360, 0.1);
        },
        hourHandAngle: function (date) {
            let hours = date.getHours();
            return ApAnalogClock._angleForValue(hours, 12);
        },
        minuteHandAngle: function (date) {
            let minutes = date.getMinutes();
            return ApAnalogClock._angleForValue(minutes, 60);
        },
        secondHandAngle: function (date) {
            let seconds = date.getSeconds();
            return ApAnalogClock._angleForValue(seconds, 60);
        },
        letterAngle: function (i, count) {
            return ApAnalogClock._angleForValue(i, count);
        }
    },

    getInitialState: function () {
        return {
            looping: false,
            hour: 0,
            minute: 0,
            second: 0,
            size: 256
        };
    },

    getDefaultProps: function () {
        return {
            boardLetters: '12,1,2,3,4,5,6,7,8,9,10,11'.split(',')
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let letters = props.boardLetters.map((letter, i, letters) => {
            let angle = ApAnalogClock.letterAngle(i, letters.length);

            let containerStyle = { transform: `rotate(${ angle }deg)` },
                letterStyle = { transform: `rotate${ angle * -1 }deg` };
            return React.createElement(
                'span',
                { className: 'ap-analog-letter-container',
                    key: "ap-analog-letter-" + i,
                    style: containerStyle },
                React.createElement(
                    'span',
                    { className: 'ap-analog-letter', style: letterStyle },
                    letter
                )
            );
        });

        return React.createElement(
            ApClock,
            { className: classnames("ap-analog-clock", props.className) },
            React.createElement(
                'div',
                { className: 'ap-analog-clock-board', style: { width: state.size, height: state.size } },
                'hour=',
                state.hour,
                'minute=',
                state.minute,
                'second=',
                state.second,
                React.createElement(
                    'div',
                    null,
                    letters
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
            s.setState({
                hour: ApAnalogClock.hourHandAngle(now),
                minute: ApAnalogClock.minuteHandAngle(now),
                second: ApAnalogClock.secondHandAngle(now)
            });
            window.requestAnimationFrame(_loop);
        }

        window.addEventListener('resize', s.resizeClock);
        _loop();
        s.resizeClock();
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
    },

    componentWillUpdate: function (nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate: function (prevProps, prevState) {
        let s = this;
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
    //------------------
    // Private
    //------------------
});

module.exports = ApAnalogClock;
//# sourceMappingURL=data:application/json;base64,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LElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pELFNBQUMsQ0FBQyxRQUFRLENBQUM7QUFDUCxnQkFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7S0FDTjs7OztBQUFBLENBSUosQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIiwiZmlsZSI6ImFwX2FuYWxvZ19jbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBYnN0cmFjdCBjbG9jay5cbiAqIEBjb25zdHJ1Y3RvciBBcEFuYWxvZ0Nsb2NrXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgQXBDbG9jayA9IHJlcXVpcmUoJy4vYXBfY2xvY2snKSxcbiAgICBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nKSxcbiAgICBjaG9wY2FsID0gcmVxdWlyZSgnY2hvcGNhbCcpLFxuICAgIG51bWNhbCA9IHJlcXVpcmUoJ251bWNhbCcpLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKiogQGxlbmRzIEFwQW5hbG9nQ2xvY2sgKi9cbmxldCBBcEFuYWxvZ0Nsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGJvYXJkTGV0dGVyczogdHlwZXMuYXJyYXlcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFB1cmVSZW5kZXJNaXhpblxuICAgIF0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIF9hbmdsZUZvclZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIG1heCkge1xuICAgICAgICAgICAgbGV0IHJhdGUgPSAodmFsdWUgJSBtYXgpIC8gbWF4O1xuICAgICAgICAgICAgcmV0dXJuIGNob3BjYWwucm91bmQocmF0ZSAqIDM2MCwgMC4xKTtcbiAgICAgICAgfSxcbiAgICAgICAgaG91ckhhbmRBbmdsZTogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIHJldHVybiBBcEFuYWxvZ0Nsb2NrLl9hbmdsZUZvclZhbHVlKGhvdXJzLCAxMik7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbnV0ZUhhbmRBbmdsZTogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICByZXR1cm4gQXBBbmFsb2dDbG9jay5fYW5nbGVGb3JWYWx1ZShtaW51dGVzLCA2MCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZEhhbmRBbmdsZTogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICByZXR1cm4gQXBBbmFsb2dDbG9jay5fYW5nbGVGb3JWYWx1ZShzZWNvbmRzLCA2MCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxldHRlckFuZ2xlOiBmdW5jdGlvbiAoaSwgY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcEFuYWxvZ0Nsb2NrLl9hbmdsZUZvclZhbHVlKGksIGNvdW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvb3Bpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgICAgIHNpemU6IDI1NlxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvYXJkTGV0dGVyczogJzEyLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExJy5zcGxpdCgnLCcpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgbGV0IGxldHRlcnMgPSBwcm9wcy5ib2FyZExldHRlcnMubWFwKChsZXR0ZXIsIGksIGxldHRlcnMpPT4ge1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gQXBBbmFsb2dDbG9jay5sZXR0ZXJBbmdsZShpLCBsZXR0ZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGxldCBjb250YWluZXJTdHlsZSA9IHt0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1kZWcpYH0sXG4gICAgICAgICAgICAgICAgbGV0dGVyU3R5bGUgPSB7dHJhbnNmb3JtOiBgcm90YXRlJHthbmdsZSAqIC0xfWRlZ2B9O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1hbmFsb2ctbGV0dGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtcImFwLWFuYWxvZy1sZXR0ZXItXCIgKyBpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWFuYWxvZy1sZXR0ZXJcIiBzdHlsZT17bGV0dGVyU3R5bGV9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBDbG9jayBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJhcC1hbmFsb2ctY2xvY2tcIiwgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1hbmFsb2ctY2xvY2stYm9hcmRcIiBzdHlsZT17e3dpZHRoOnN0YXRlLnNpemUsIGhlaWdodDpzdGF0ZS5zaXplfX0+XG4gICAgICAgICAgICAgICAgICAgIGhvdXI9e3N0YXRlLmhvdXJ9XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZT17c3RhdGUubWludXRlfVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQ9e3N0YXRlLnNlY29uZH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsZXR0ZXJzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQXBDbG9jaz5cbiAgICAgICAgKTtcbiAgICB9LFxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5fbG9vcGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIGlmICghcy5fbG9vcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaG91cjogQXBBbmFsb2dDbG9jay5ob3VySGFuZEFuZ2xlKG5vdyksXG4gICAgICAgICAgICAgICAgbWludXRlOiBBcEFuYWxvZ0Nsb2NrLm1pbnV0ZUhhbmRBbmdsZShub3cpLFxuICAgICAgICAgICAgICAgIHNlY29uZDogQXBBbmFsb2dDbG9jay5zZWNvbmRIYW5kQW5nbGUobm93KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9sb29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLnJlc2l6ZUNsb2NrKTtcbiAgICAgICAgX2xvb3AoKTtcbiAgICAgICAgcy5yZXNpemVDbG9jaygpO1xuXG5cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5yZXNpemVDbG9jayk7XG4gICAgICAgIHMuX2xvb3BpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcmVzaXplQ2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgZWxtID0gUmVhY3RET00uZmluZERPTU5vZGUocyk7XG4gICAgICAgIGxldCBzaXplID0gbnVtY2FsLm1pbihlbG0ub2Zmc2V0V2lkdGgsIGVsbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcEFuYWxvZ0Nsb2NrO1xuIl19