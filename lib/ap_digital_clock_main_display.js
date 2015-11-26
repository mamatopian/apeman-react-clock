/**
 * Main display for digital clock
 * @constructor ApDigitalClockMainDisplay
 */

"use strict";

const React = require('react'),
      types = React.PropTypes,
      ReactDOM = require('react-dom');

/** @lends ApDigitalClockMainDisplay */
let ApDigitalClockMainDisplay = React.createClass({
    displayName: 'ApDigitalClockMainDisplay',

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        hours: types.string,
        minutes: types.string,
        seconds: types.string,
        fontSize: types.number,
        onSizeChange: types.func
    },

    getInitialState: function () {
        return {
            detailWidth: null
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let fontSize = props.fontSize,
            lineHeight = fontSize * 1.25;

        let mainStyle = {
            lineHeight: `${ lineHeight }px`,
            fontSize: `${ fontSize }px`
        },
            detailStyle = {
            lineHeight: `${ lineHeight }px`,
            fontSize: `${ fontSize * 0.6 }px`,
            display: `inline-block`,
            minWidth: `${ state.detailWidth }px`
        };

        return React.createElement(
            'div',
            { className: 'ap-digital-clock-main-display' },
            React.createElement(
                'span',
                { className: 'ap-digital-clock-main-display-inner', ref: 'inner' },
                React.createElement(
                    'span',
                    { className: 'ap-digital-clock-main-label', style: mainStyle },
                    React.createElement(
                        'span',
                        null,
                        props.hours
                    ),
                    React.createElement(
                        'span',
                        null,
                        ':'
                    ),
                    React.createElement(
                        'span',
                        null,
                        props.minutes
                    )
                ),
                React.createElement(
                    'span',
                    { className: 'ap-digital-clock-detail-label',
                        ref: 'detail-label',
                        style: detailStyle },
                    React.createElement(
                        'span',
                        { className: 'ap-digital-clock-dummy-text',
                            style: { fontSize: fontSize } },
                        ' '
                    ),
                    React.createElement(
                        'span',
                        null,
                        props.seconds
                    )
                )
            )
        );
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillReceiveProps: function () {
        let s = this;

        setTimeout(() => {
            let innerElm = ReactDOM.findDOMNode(s.refs['inner']),
                detailElm = ReactDOM.findDOMNode(s.refs['detail-label']);
            let sizes = {
                innerWidth: innerElm.offsetWidth,
                detailWidth: detailElm.offsetWidth
            };
            s.setState(sizes);

            {
                let props = s.props;
                if (props.onSizeChange) {
                    props.onSizeChange(sizes);
                }
            }
        }, 10);
    }
});

module.exports = ApDigitalClockMainDisplay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX21haW5fZGlzcGxheS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7TUFDdkIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7OztBQUFDLEFBSXBDLElBQUkseUJBQXlCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztBQU05QyxhQUFTLEVBQUU7QUFDUCxhQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFDbkIsZUFBTyxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3JCLGVBQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNyQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLG9CQUFZLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDM0I7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCx1QkFBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQTtLQUNKOztBQUVELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUs7WUFDZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFcEIsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDekIsVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7O0FBRWpDLFlBQUksU0FBUyxHQUFHO0FBQ1osc0JBQVUsRUFBRSxDQUFDLEdBQUUsVUFBVSxFQUFDLEVBQUUsQ0FBQztBQUM3QixvQkFBUSxFQUFFLENBQUMsR0FBRSxRQUFRLEVBQUMsRUFBRSxDQUFDO1NBQzVCO1lBQUUsV0FBVyxHQUFHO0FBQ2Isc0JBQVUsRUFBRSxDQUFDLEdBQUUsVUFBVSxFQUFDLEVBQUUsQ0FBQztBQUM3QixvQkFBUSxFQUFFLENBQUMsR0FBRSxRQUFRLEdBQUcsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUMvQixtQkFBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBQ3ZCLG9CQUFRLEVBQUUsQ0FBQyxHQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDO1NBQ3JDLENBQUM7O0FBRUYsZUFDSTs7Y0FBSyxTQUFTLEVBQUMsK0JBQStCO1lBQzFDOztrQkFBTSxTQUFTLEVBQUMscUNBQXFDLEVBQUMsR0FBRyxFQUFDLE9BQU87Z0JBQzdEOztzQkFBTSxTQUFTLEVBQUMsNkJBQTZCLEVBQUMsS0FBSyxFQUFFLFNBQVMsQUFBQztvQkFDM0Q7Ozt3QkFBTyxLQUFLLENBQUMsS0FBSztxQkFBUTtvQkFDMUI7Ozs7cUJBQWM7b0JBQ2Q7Ozt3QkFBTyxLQUFLLENBQUMsT0FBTztxQkFBUTtpQkFDekI7Z0JBQ1A7O3NCQUFNLFNBQVMsRUFBQywrQkFBK0I7QUFDekMsMkJBQUcsRUFBQyxjQUFjO0FBQ2xCLDZCQUFLLEVBQUUsV0FBVyxBQUFDO29CQUN6Qjs7MEJBQU0sU0FBUyxFQUFDLDZCQUE2QjtBQUN2QyxpQ0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxBQUFDOztxQkFBYztvQkFDaEQ7Ozt3QkFBTyxLQUFLLENBQUMsT0FBTztxQkFBUTtpQkFDekI7YUFDSjtTQUNELENBQ1I7S0FDTDs7Ozs7O0FBTUQsNkJBQXlCLEVBQUUsWUFBWTtBQUNuQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7O0FBRWIsa0JBQVUsQ0FBQyxNQUFLO0FBQ1osZ0JBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFJLEtBQUssR0FBRztBQUNSLDBCQUFVLEVBQUUsUUFBUSxDQUFDLFdBQVc7QUFDaEMsMkJBQVcsRUFBRSxTQUFTLENBQUMsV0FBVzthQUNyQyxDQUFDO0FBQ0YsYUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFbEI7QUFDSSxvQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNwQixvQkFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLHlCQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3QjthQUNKO1NBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNWO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcseUJBQXlCLENBQUMiLCJmaWxlIjoiYXBfZGlnaXRhbF9jbG9ja19tYWluX2Rpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtY2xvY2svbGliL2pzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFpbiBkaXNwbGF5IGZvciBkaWdpdGFsIGNsb2NrXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsQ2xvY2tNYWluRGlzcGxheVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgdHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXMsXG4gICAgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuXG4vKiogQGxlbmRzIEFwRGlnaXRhbENsb2NrTWFpbkRpc3BsYXkgKi9cbmxldCBBcERpZ2l0YWxDbG9ja01haW5EaXNwbGF5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGhvdXJzOiB0eXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbnV0ZXM6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgc2Vjb25kczogdHlwZXMuc3RyaW5nLFxuICAgICAgICBmb250U2l6ZTogdHlwZXMubnVtYmVyLFxuICAgICAgICBvblNpemVDaGFuZ2U6IHR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXRhaWxXaWR0aDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgbGV0IGZvbnRTaXplID0gcHJvcHMuZm9udFNpemUsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0ID0gZm9udFNpemUgKiAxLjI1O1xuXG4gICAgICAgIGxldCBtYWluU3R5bGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGBcbiAgICAgICAgfSwgZGV0YWlsU3R5bGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtsaW5lSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZSAqIDAuNn1weGAsXG4gICAgICAgICAgICBkaXNwbGF5OiBgaW5saW5lLWJsb2NrYCxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtzdGF0ZS5kZXRhaWxXaWR0aH1weGBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW1haW4tZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stbWFpbi1kaXNwbGF5LWlubmVyXCIgcmVmPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1tYWluLWxhYmVsXCIgc3R5bGU9e21haW5TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuaG91cnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5taW51dGVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWRldGFpbC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImRldGFpbC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtkZXRhaWxTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stZHVtbXktdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IGZvbnRTaXplfX0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuc2Vjb25kc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgbGV0IGlubmVyRWxtID0gUmVhY3RET00uZmluZERPTU5vZGUocy5yZWZzWydpbm5lciddKSxcbiAgICAgICAgICAgICAgICBkZXRhaWxFbG0gPSBSZWFjdERPTS5maW5kRE9NTm9kZShzLnJlZnNbJ2RldGFpbC1sYWJlbCddKTtcbiAgICAgICAgICAgIGxldCBzaXplcyA9IHtcbiAgICAgICAgICAgICAgICBpbm5lcldpZHRoOiBpbm5lckVsbS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBkZXRhaWxXaWR0aDogZGV0YWlsRWxtLm9mZnNldFdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcy5zZXRTdGF0ZShzaXplcyk7XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBzLnByb3BzO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vblNpemVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TaXplQ2hhbmdlKHNpemVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcERpZ2l0YWxDbG9ja01haW5EaXNwbGF5O1xuIl19