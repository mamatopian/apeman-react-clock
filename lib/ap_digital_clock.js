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
            fontSize: `${ size * 0.3 }px`
        },
            subStyle = {};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO01BQy9CLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQ2xDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQy9CLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUM7TUFDM0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDNUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7OztBQUFDLEFBSS9CLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7QUFNbEMsYUFBUyxFQUFFLEVBQUU7O0FBRWIsVUFBTSxFQUFFLENBQ0osZUFBZSxDQUNsQjs7QUFFRCxXQUFPLEVBQUU7QUFDTCxlQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQzNCLGdCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDeEIsc0JBQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ3pCO0FBQ0QsbUJBQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCxpQkFBSyxFQUFFLElBQUk7QUFDWCxtQkFBTyxFQUFFLElBQUk7QUFDYixtQkFBTyxFQUFFLElBQUk7QUFDYixnQkFBSSxFQUFFLEdBQUc7U0FDWixDQUFBO0tBQ0o7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFBRSxDQUFBO0tBQ1o7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdB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RyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLFlBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsU0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNQLGdCQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztLQUNOOztDQUVKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJhcF9kaWdpdGFsX2Nsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERpZ2l0YWwgY2xvY2tcbiAqIEBjb25zdHJ1Y3RvciBBcERpZ2l0YWxMb2NrXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgQXBDbG9jayA9IHJlcXVpcmUoJy4vYXBfY2xvY2snKSxcbiAgICBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtcHVyZS1yZW5kZXItbWl4aW4nKSxcbiAgICBjaG9wY2FsID0gcmVxdWlyZSgnY2hvcGNhbCcpLFxuICAgIG51bWNhbCA9IHJlcXVpcmUoJ251bWNhbCcpO1xuXG5cbi8qKiBAbGVuZHMgQXBEaWdpdGFsTG9jayAqL1xubGV0IEFwRGlnaXRhbExvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHt9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFB1cmVSZW5kZXJNaXhpblxuICAgIF0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHBhZFplcm86IGZ1bmN0aW9uICh2YWx1ZSwgbGVuKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gXCIwXCIgKyByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG91cnM6IFwiMDBcIixcbiAgICAgICAgICAgIG1pbnV0ZXM6IFwiMDBcIixcbiAgICAgICAgICAgIHNlY29uZHM6IFwiMDBcIixcbiAgICAgICAgICAgIHNpemU6IDI1NlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlID0gcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICBsZXQgc2l6ZSA9IHN0YXRlLnNpemU7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3NpemUnLCBzaXplKTtcblxuICAgICAgICBsZXQgYm9hcmRTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogYCR7c2l6ZSAqIDAuNH1weGAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGAke3NpemUgKiAwLjN9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3ViU3R5bGUgPSB7fTtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBDbG9jayBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJhcC1kaWdpdGFsLWNsb2NrXCIsIHByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1ib2FyZFwiIHN0eWxlPXtib2FyZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLWJvYXJkLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW1haW5cIiBzdHlsZT17bWFpblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdGUuaG91cnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRlLm1pbnV0ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtZGlnaXRhbC1jbG9jay1zdWJcIiBzdHlsZT17c3ViU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0ZS5zZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwQ2xvY2s+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLl9sb29waW5nID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCBwYWRaZXJvID0gQXBEaWdpdGFsTG9jay5wYWRaZXJvO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgICAgaWYgKCFzLl9sb29waW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhvdXJzOiBwYWRaZXJvKG5vdy5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBwYWRaZXJvKG5vdy5nZXRNaW51dGVzKCksIDIpLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IHBhZFplcm8obm93LmdldFNlY29uZHMoKSwgMilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfbG9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5yZXNpemVDbG9jayk7XG4gICAgICAgIF9sb29wKCk7XG4gICAgICAgIHMucmVzaXplQ2xvY2soKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5yZXNpemVDbG9jayk7XG4gICAgICAgIHMuX2xvb3BpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcmVzaXplQ2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgZWxtID0gUmVhY3RET00uZmluZERPTU5vZGUocyk7XG4gICAgICAgIGxldCBzaXplID0gbnVtY2FsLm1pbihlbG0ub2Zmc2V0V2lkdGgsIGVsbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcERpZ2l0YWxMb2NrO1xuIl19