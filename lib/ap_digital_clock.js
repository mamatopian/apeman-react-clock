/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
      ReactDOM = require('react-dom'),
      classnames = require('classnames'),
      ApClock = require('./ap_clock'),
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

    statics: {
        padZero: function (value, len) {
            let result = String(value);
            while (result.length < len) {
                result = "0" + result;
            }
            return result;
        }
    },

    getInitialState: function () {
        return {
            hours: "00",
            minutes: "00",
            seconds: "00",
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

        let size = state.size;

        console.log('size', size);

        let boardStyle = {
            width: size,
            height: size
        },
            mainStyle = {
            lineHeight: `${ size * 0.4 }px`,
            fontSize: `${ parseInt(size * 0.28) }px`
        },
            subStyle = {
            fontSize: `${ parseInt(size * 0.16) }px`,
            margin: `0 4px`
        };

        return React.createElement(
            ApClock,
            { className: classnames("ap-digital-clock", props.className) },
            React.createElement(
                'div',
                { className: 'ap-digital-clock-board', style: boardStyle },
                React.createElement(
                    'div',
                    { className: 'ap-digital-clock-board-inner' },
                    React.createElement(
                        'span',
                        { className: 'ap-digital-clock-main', style: mainStyle },
                        React.createElement(
                            'span',
                            null,
                            state.hours
                        ),
                        React.createElement(
                            'span',
                            null,
                            ':'
                        ),
                        React.createElement(
                            'span',
                            null,
                            state.minutes
                        )
                    ),
                    React.createElement(
                        'span',
                        { className: 'ap-digital-clock-sub', style: subStyle },
                        React.createElement(
                            'span',
                            null,
                            state.seconds
                        )
                    )
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

        let padZero = ApDigitalLock.padZero;

        function _loop() {
            if (!s._looping) {
                return;
            }
            let now = new Date();

            s.setState({
                hours: padZero(now.getHours(), 2),
                minutes: padZero(now.getMinutes(), 2),
                seconds: padZero(now.getSeconds(), 2)
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO01BQy9CLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQ2xDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQy9CLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUM7TUFDM0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDNUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7OztBQUFDLEFBSS9CLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7QUFNbEMsYUFBUyxFQUFFLEVBQUU7O0FBRWIsVUFBTSxFQUFFLENBQ0osZUFBZSxDQUNsQjs7QUFFRCxXQUFPLEVBQUU7QUFDTCxlQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQzNCLGdCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDeEIsc0JBQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ3pCO0FBQ0QsbUJBQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCxtQkFBTyxFQUFFLElBQUk7QUFDYixtQkFBTyxFQUFFLElBQUk7QUFDYixnQkFBSSxFQUFFLEdBQUc7U0FDWixDQUFBO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFBRSxDQUFBO0tBQ1o7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztZQUNmLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixZQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixlQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFMUIsWUFBSSxVQUFVLEdBQUc7QUFDVCxpQkFBSyxFQUFFLElBQUk7QUFDWCxrQkFBTSxFQUFFLElBQUk7U0FDZjtZQUNELFNBQVMsR0FBRztBQUNSLHNCQUFVLEVBQUUsQ0FBQyxHQUFFLElBQUksR0FBRyxHQUFHLEVBQUMsRUFBRSxDQUFDO0FBQzdCLG9CQUFRLEVBQUUsQ0FBQyxHQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUMsRUFBRSxDQUFDO1NBQ3pDO1lBQ0QsUUFBUSxHQUFHO0FBQ1Asb0JBQVEsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBQyxFQUFFLENBQUM7QUFDdEMsa0JBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNsQixDQUFDOztBQUVOLGVBQ0k7QUFBQyxtQkFBTztjQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDO1lBQ2hFOztrQkFBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFFLFVBQVUsQUFBQztnQkFDdEQ7O3NCQUFLLFNBQVMsRUFBQyw4QkFBOEI7b0JBQ3pDOzswQkFBTSxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxFQUFFLFNBQVMsQUFBQzt3QkFDckQ7Ozs0QkFBTyxLQUFLLENBQUMsS0FBSzt5QkFBUTt3QkFDMUI7Ozs7eUJBQWM7d0JBQ2Q7Ozs0QkFBTyxLQUFLLENBQUMsT0FBTzt5QkFBUTtxQkFDekI7b0JBQ1A7OzBCQUFNLFNBQVMsRUFBQyxzQkFBc0IsRUFBQyxLQUFLLEVBQUUsUUFBUSxBQUFDO3dCQUNuRDs7OzRCQUFPLEtBQUssQ0FBQyxPQUFPO3lCQUFRO3FCQUN6QjtpQkFDTDthQUNKO1NBQ0EsQ0FDWjtLQUNMOzs7Ozs7QUFNRCxzQkFBa0IsRUFBRSxZQUFZO0FBQzVCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOztBQUVELHFCQUFpQixFQUFFLFlBQVk7QUFDM0IsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixZQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDOztBQUVwQyxpQkFBUyxLQUFLLEdBQUc7QUFDYixnQkFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYix1QkFBTzthQUNWO0FBQ0QsZ0JBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRXJCLGFBQUMsQ0FBQyxRQUFRLENBQUM7QUFDUCxxQkFBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLHVCQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsdUJBQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN4QyxDQUFDLENBQUM7QUFDSCxrQkFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOztBQUVELGNBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELGFBQUssRUFBRSxDQUFDO0FBQ1IsU0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ25COztBQUVELHdCQUFvQixFQUFFLFlBQVk7QUFDOUIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsY0FBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEQsU0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7OztBQU1ELGVBQVcsRUFBRSxZQUFZO0FBQ3JCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFJLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pELFNBQUMsQ0FBQyxRQUFRLENBQUM7QUFDUCxnQkFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7S0FDTjs7Q0FFSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMiLCJmaWxlIjoiYXBfZGlnaXRhbF9jbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEaWdpdGFsIGNsb2NrXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsTG9ja1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKSxcbiAgICBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIEFwQ2xvY2sgPSByZXF1aXJlKCcuL2FwX2Nsb2NrJyksXG4gICAgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJyksXG4gICAgY2hvcGNhbCA9IHJlcXVpcmUoJ2Nob3BjYWwnKSxcbiAgICBudW1jYWwgPSByZXF1aXJlKCdudW1jYWwnKTtcblxuXG4vKiogQGxlbmRzIEFwRGlnaXRhbExvY2sgKi9cbmxldCBBcERpZ2l0YWxMb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7fSxcblxuICAgIG1peGluczogW1xuICAgICAgICBQdXJlUmVuZGVyTWl4aW5cbiAgICBdLFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBwYWRaZXJvOiBmdW5jdGlvbiAodmFsdWUsIGxlbikge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiMFwiICsgcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvdXJzOiBcIjAwXCIsXG4gICAgICAgICAgICBtaW51dGVzOiBcIjAwXCIsXG4gICAgICAgICAgICBzZWNvbmRzOiBcIjAwXCIsXG4gICAgICAgICAgICBzaXplOiAyNTZcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgbGV0IHNpemUgPSBzdGF0ZS5zaXplO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaXplJywgc2l6ZSk7XG5cbiAgICAgICAgbGV0IGJvYXJkU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpblN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke3NpemUgKiAwLjR9cHhgLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHtwYXJzZUludChzaXplICogMC4yOCl9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3ViU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGAke3BhcnNlSW50KHNpemUgKiAwLjE2KX1weGAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBgMCA0cHhgXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBDbG9jayBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJhcC1kaWdpdGFsLWNsb2NrXCIsIHByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1ib2FyZFwiIHN0eWxlPXtib2FyZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWJvYXJkLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW1haW5cIiBzdHlsZT17bWFpblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdGUuaG91cnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRlLm1pbnV0ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1zdWJcIiBzdHlsZT17c3ViU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0ZS5zZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwQ2xvY2s+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLl9sb29waW5nID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCBwYWRaZXJvID0gQXBEaWdpdGFsTG9jay5wYWRaZXJvO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgICAgaWYgKCFzLl9sb29waW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhvdXJzOiBwYWRaZXJvKG5vdy5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBwYWRaZXJvKG5vdy5nZXRNaW51dGVzKCksIDIpLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IHBhZFplcm8obm93LmdldFNlY29uZHMoKSwgMilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfbG9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5yZXNpemVDbG9jayk7XG4gICAgICAgIF9sb29wKCk7XG4gICAgICAgIHMucmVzaXplQ2xvY2soKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5yZXNpemVDbG9jayk7XG4gICAgICAgIHMuX2xvb3BpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcmVzaXplQ2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgZWxtID0gUmVhY3RET00uZmluZERPTU5vZGUocyk7XG4gICAgICAgIGxldCBzaXplID0gbnVtY2FsLm1pbihlbG0ub2Zmc2V0V2lkdGgsIGVsbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcERpZ2l0YWxMb2NrO1xuIl19