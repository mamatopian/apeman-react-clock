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

        let fontSize = props.fontSize;

        let mainStyle = {
            fontSize: `${ fontSize }px`
        },
            detailStyle = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX21haW5fZGlzcGxheS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7TUFDdkIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7OztBQUFDLEFBSXBDLElBQUkseUJBQXlCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztBQU05QyxhQUFTLEVBQUU7QUFDUCxhQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFDbkIsZUFBTyxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3JCLGVBQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNyQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLG9CQUFZLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDM0I7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCx1QkFBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQTtLQUNKOztBQUVELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUs7WUFDZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFcEIsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7QUFFOUIsWUFBSSxTQUFTLEdBQUc7QUFDWixvQkFBUSxFQUFFLENBQUMsR0FBRSxRQUFRLEVBQUMsRUFBRSxDQUFDO1NBQzVCO1lBQUUsV0FBVyxHQUFHO0FBQ2Isb0JBQVEsRUFBRSxDQUFDLEdBQUUsUUFBUSxHQUFHLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFDL0IsbUJBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztBQUN2QixvQkFBUSxFQUFFLENBQUMsR0FBRSxLQUFLLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQztTQUNyQyxDQUFDOztBQUVGLGVBQ0k7O2NBQUssU0FBUyxFQUFDLCtCQUErQjtZQUMxQzs7a0JBQU0sU0FBUyxFQUFDLHFDQUFxQyxFQUFDLEdBQUcsRUFBQyxPQUFPO2dCQUM3RDs7c0JBQU0sU0FBUyxFQUFDLDZCQUE2QixFQUFDLEtBQUssRUFBRSxTQUFTLEFBQUM7b0JBQzNEOzs7d0JBQU8sS0FBSyxDQUFDLEtBQUs7cUJBQVE7b0JBQzFCOzs7O3FCQUFjO29CQUNkOzs7d0JBQU8sS0FBSyxDQUFDLE9BQU87cUJBQVE7aUJBQ3pCO2dCQUNQOztzQkFBTSxTQUFTLEVBQUMsK0JBQStCO0FBQ3pDLDJCQUFHLEVBQUMsY0FBYztBQUNsQiw2QkFBSyxFQUFFLFdBQVcsQUFBQztvQkFDekI7OzBCQUFNLFNBQVMsRUFBQyw2QkFBNkI7QUFDdkMsaUNBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQUFBQzs7cUJBQWM7b0JBQ2hEOzs7d0JBQU8sS0FBSyxDQUFDLE9BQU87cUJBQVE7aUJBQ3pCO2FBQ0o7U0FDRCxDQUNSO0tBQ0w7Ozs7OztBQU1ELDZCQUF5QixFQUFFLFlBQVk7QUFDbkMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUViLGtCQUFVLENBQUMsTUFBSztBQUNaLGdCQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELFNBQVMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUM3RCxnQkFBSSxLQUFLLEdBQUc7QUFDUiwwQkFBVSxFQUFFLFFBQVEsQ0FBQyxXQUFXO0FBQ2hDLDJCQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7YUFDckMsQ0FBQztBQUNGLGFBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRWxCO0FBQ0ksb0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDcEIsb0JBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtBQUNwQix5QkFBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtTQUNKLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDVjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFDIiwiZmlsZSI6ImFwX2RpZ2l0YWxfY2xvY2tfbWFpbl9kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1haW4gZGlzcGxheSBmb3IgZGlnaXRhbCBjbG9ja1xuICogQGNvbnN0cnVjdG9yIEFwRGlnaXRhbENsb2NrTWFpbkRpc3BsYXlcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzLFxuICAgIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cblxuLyoqIEBsZW5kcyBBcERpZ2l0YWxDbG9ja01haW5EaXNwbGF5ICovXG5sZXQgQXBEaWdpdGFsQ2xvY2tNYWluRGlzcGxheSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBob3VyczogdHlwZXMuc3RyaW5nLFxuICAgICAgICBtaW51dGVzOiB0eXBlcy5zdHJpbmcsXG4gICAgICAgIHNlY29uZHM6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgZm9udFNpemU6IHR5cGVzLm51bWJlcixcbiAgICAgICAgb25TaXplQ2hhbmdlOiB0eXBlcy5mdW5jXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGV0YWlsV2lkdGg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBzLnN0YXRlLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCBmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplO1xuXG4gICAgICAgIGxldCBtYWluU3R5bGUgPSB7XG4gICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgXG4gICAgICAgIH0sIGRldGFpbFN0eWxlID0ge1xuICAgICAgICAgICAgZm9udFNpemU6IGAke2ZvbnRTaXplICogMC42fXB4YCxcbiAgICAgICAgICAgIGRpc3BsYXk6IGBpbmxpbmUtYmxvY2tgLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3N0YXRlLmRldGFpbFdpZHRofXB4YFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stbWFpbi1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1tYWluLWRpc3BsYXktaW5uZXJcIiByZWY9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW1haW4tbGFiZWxcIiBzdHlsZT17bWFpblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5ob3Vyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLm1pbnV0ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stZGV0YWlsLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGV0YWlsLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RldGFpbFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1kdW1teS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogZm9udFNpemV9fT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5zZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBsZXQgaW5uZXJFbG0gPSBSZWFjdERPTS5maW5kRE9NTm9kZShzLnJlZnNbJ2lubmVyJ10pLFxuICAgICAgICAgICAgICAgIGRldGFpbEVsbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHMucmVmc1snZGV0YWlsLWxhYmVsJ10pO1xuICAgICAgICAgICAgbGV0IHNpemVzID0ge1xuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg6IGlubmVyRWxtLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIGRldGFpbFdpZHRoOiBkZXRhaWxFbG0ub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzLnNldFN0YXRlKHNpemVzKTtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHMucHJvcHM7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uU2l6ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblNpemVDaGFuZ2Uoc2l6ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwRGlnaXRhbENsb2NrTWFpbkRpc3BsYXk7XG4iXX0=