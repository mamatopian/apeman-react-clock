/**
 * Digital clock
 * @constructor ApDigitalLock
 */

"use strict";

const React = require('react'),
      types = React.PropTypes,
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

    propTypes: {
        showSeconds: types.bool
    },

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
        return {
            showSeconds: true
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        let size = state.size;

        let mainFontSize = parseInt(size * 0.2),
            mainLineHeight = size * 0.4,
            smallFontSize = parseInt(size * 0.12);

        let boardStyle = {
            width: `${ size }px`,
            height: `${ size }px`
        },
            mainStyle = {
            lineHeight: `${ mainLineHeight }px`,
            fontSize: `${ mainFontSize }px`
        },
            subStyle = {
            lineHeight: `${ mainLineHeight }px`,
            fontSize: `${ smallFontSize }px`,
            width: `${ size * 0.22 }px`
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
                        'div',
                        { className: 'ap-digital-clock-display' },
                        React.createElement(
                            'span',
                            { className: 'ap-digital-clock-display-main', style: mainStyle },
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
                            ),
                            React.createElement(
                                'span',
                                { className: 'ap-digital-clock-display-sub', style: subStyle },
                                React.createElement(
                                    'span',
                                    { className: 'ap-digital-clock-display-dummy-text',
                                        style: { fontSize: mainFontSize } },
                                    ' '
                                ),
                                React.createElement(
                                    'span',
                                    null,
                                    state.seconds
                                )
                            )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUztNQUN2QixRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztNQUMvQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUNsQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUMvQixlQUFlLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO01BQzNELE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO01BQzVCLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDOzs7QUFBQyxBQUkvQixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0FBTWxDLGFBQVMsRUFBRTtBQUNQLG1CQUFXLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDMUI7O0FBRUQsVUFBTSxFQUFFLENBQ0osZUFBZSxDQUNsQjs7QUFFRCxXQUFPLEVBQUU7QUFDTCxlQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQzNCLGdCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDeEIsc0JBQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ3pCO0FBQ0QsbUJBQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCxtQkFBTyxFQUFFLElBQUk7QUFDYixtQkFBTyxFQUFFLElBQUk7QUFDYixnQkFBSSxFQUFFLEdBQUc7U0FDWixDQUFBO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCx1QkFBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQTtLQUNKOztBQUVELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUs7WUFDZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFcEIsWUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFdEIsWUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDbkMsY0FBYyxHQUFHLElBQUksR0FBRyxHQUFHO1lBQzNCLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDOztBQUUxQyxZQUFJLFVBQVUsR0FBRztBQUNULGlCQUFLLEVBQUUsQ0FBQyxHQUFFLElBQUksRUFBQyxFQUFFLENBQUM7QUFDbEIsa0JBQU0sRUFBRSxDQUFDLEdBQUUsSUFBSSxFQUFDLEVBQUUsQ0FBQztTQUN0QjtZQUNELFNBQVMsR0FBRztBQUNSLHNCQUFVLEVBQUUsQ0FBQyxHQUFFLGNBQWMsRUFBQyxFQUFFLENBQUM7QUFDakMsb0JBQVEsRUFBRSxDQUFDLEdBQUUsWUFBWSxFQUFDLEVBQUUsQ0FBQztTQUNoQztZQUNELFFBQVEsR0FBRztBQUNQLHNCQUFVLEVBQUUsQ0FBQyxHQUFFLGNBQWMsRUFBQyxFQUFFLENBQUM7QUFDakMsb0JBQVEsRUFBRSxDQUFDLEdBQUUsYUFBYSxFQUFDLEVBQUUsQ0FBQztBQUM5QixpQkFBSyxFQUFFLENBQUMsR0FBRSxJQUFJLEdBQUcsSUFBSSxFQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDOztBQUVOLGVBQ0k7QUFBQyxtQkFBTztjQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDO1lBQ2hFOztrQkFBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFFLFVBQVUsQUFBQztnQkFDdEQ7O3NCQUFLLFNBQVMsRUFBQyw4QkFBOEI7b0JBQ3pDOzswQkFBSyxTQUFTLEVBQUMsMEJBQTBCO3dCQUNyQzs7OEJBQU0sU0FBUyxFQUFDLCtCQUErQixFQUFDLEtBQUssRUFBRSxTQUFTLEFBQUM7NEJBQzdEOzs7Z0NBQU8sS0FBSyxDQUFDLEtBQUs7NkJBQVE7NEJBQzFCOzs7OzZCQUFjOzRCQUNkOzs7Z0NBQU8sS0FBSyxDQUFDLE9BQU87NkJBQVE7NEJBQzVCOztrQ0FBTSxTQUFTLEVBQUMsOEJBQThCLEVBQUMsS0FBSyxFQUFFLFFBQVEsQUFBQztnQ0FDM0Q7O3NDQUFNLFNBQVMsRUFBQyxxQ0FBcUM7QUFDL0MsNkNBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUMsQUFBQzs7aUNBQWM7Z0NBQ3BEOzs7b0NBQU8sS0FBSyxDQUFDLE9BQU87aUNBQVE7NkJBQ3pCO3lCQUNKO3FCQUNMO2lCQUNKO2FBQ0o7U0FDQSxDQUNaO0tBQ0w7Ozs7OztBQU1ELHNCQUFrQixFQUFFLFlBQVk7QUFDNUIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsU0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDckI7O0FBRUQscUJBQWlCLEVBQUUsWUFBWTtBQUMzQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLFlBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7O0FBRXBDLGlCQUFTLEtBQUssR0FBRztBQUNiLGdCQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtBQUNiLHVCQUFPO2FBQ1Y7QUFDRCxnQkFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFckIsYUFBQyxDQUFDLFFBQVEsQ0FBQztBQUNQLHFCQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsdUJBQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyx1QkFBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDLENBQUMsQ0FBQztBQUNILGtCQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7O0FBRUQsY0FBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsYUFBSyxFQUFFLENBQUM7QUFDUixTQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbkI7O0FBRUQsd0JBQW9CLEVBQUUsWUFBWTtBQUM5QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixjQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwRCxTQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7O0FBTUQsZUFBVyxFQUFFLFlBQVk7QUFDckIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLFlBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsU0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNQLGdCQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztLQUNOOztDQUVKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJhcF9kaWdpdGFsX2Nsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERpZ2l0YWwgY2xvY2tcbiAqIEBjb25zdHJ1Y3RvciBBcERpZ2l0YWxMb2NrXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcyxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgQXBDbG9jayA9IHJlcXVpcmUoJy4vYXBfY2xvY2snKSxcbiAgICBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nKSxcbiAgICBjaG9wY2FsID0gcmVxdWlyZSgnY2hvcGNhbCcpLFxuICAgIG51bWNhbCA9IHJlcXVpcmUoJ251bWNhbCcpO1xuXG5cbi8qKiBAbGVuZHMgQXBEaWdpdGFsTG9jayAqL1xubGV0IEFwRGlnaXRhbExvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgc2hvd1NlY29uZHM6IHR5cGVzLmJvb2xcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFB1cmVSZW5kZXJNaXhpblxuICAgIF0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHBhZFplcm86IGZ1bmN0aW9uICh2YWx1ZSwgbGVuKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gXCIwXCIgKyByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG91cnM6IFwiMDBcIixcbiAgICAgICAgICAgIG1pbnV0ZXM6IFwiMDBcIixcbiAgICAgICAgICAgIHNlY29uZHM6IFwiMDBcIixcbiAgICAgICAgICAgIHNpemU6IDI1NlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBzLnN0YXRlLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCBzaXplID0gc3RhdGUuc2l6ZTtcblxuICAgICAgICBsZXQgbWFpbkZvbnRTaXplID0gcGFyc2VJbnQoc2l6ZSAqIDAuMiksXG4gICAgICAgICAgICBtYWluTGluZUhlaWdodCA9IHNpemUgKiAwLjQsXG4gICAgICAgICAgICBzbWFsbEZvbnRTaXplID0gcGFyc2VJbnQoc2l6ZSAqIDAuMTIpO1xuXG4gICAgICAgIGxldCBib2FyZFN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfXB4YCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3NpemV9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpblN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke21haW5MaW5lSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7bWFpbkZvbnRTaXplfXB4YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1YlN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke21haW5MaW5lSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7c21hbGxGb250U2l6ZX1weGAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3NpemUgKiAwLjIyfXB4YFxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwQ2xvY2sgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYXAtZGlnaXRhbC1jbG9ja1wiLCBwcm9wcy5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stYm9hcmRcIiBzdHlsZT17Ym9hcmRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1ib2FyZC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWRpc3BsYXktbWFpblwiIHN0eWxlPXttYWluU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdGUuaG91cnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdGUubWludXRlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwLWRpZ2l0YWwtY2xvY2stZGlzcGxheS1zdWJcIiBzdHlsZT17c3ViU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1kaXNwbGF5LWR1bW15LXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogbWFpbkZvbnRTaXplfX0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRlLnNlY29uZHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BcENsb2NrPlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5fbG9vcGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBsZXQgcGFkWmVybyA9IEFwRGlnaXRhbExvY2sucGFkWmVybztcblxuICAgICAgICBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIGlmICghcy5fbG9vcGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBob3VyczogcGFkWmVybyhub3cuZ2V0SG91cnMoKSwgMiksXG4gICAgICAgICAgICAgICAgbWludXRlczogcGFkWmVybyhub3cuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBwYWRaZXJvKG5vdy5nZXRTZWNvbmRzKCksIDIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2xvb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMucmVzaXplQ2xvY2spO1xuICAgICAgICBfbG9vcCgpO1xuICAgICAgICBzLnJlc2l6ZUNsb2NrKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMucmVzaXplQ2xvY2spO1xuICAgICAgICBzLl9sb29waW5nID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHJlc2l6ZUNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIGVsbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpO1xuICAgICAgICBsZXQgc2l6ZSA9IG51bWNhbC5taW4oZWxtLm9mZnNldFdpZHRoLCBlbG0ub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBEaWdpdGFsTG9jaztcbiJdfQ==