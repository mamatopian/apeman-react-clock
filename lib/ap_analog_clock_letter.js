/**
 * A letter for analog clock.
 * @constructor ApAnalogClockLetter
 */

"use strict";

const React = require('react'),
      types = React.PropTypes;

/** @lends ApAnalogClockLetter */
let ApAnalogClockLetter = React.createClass({
    displayName: 'ApAnalogClockLetter',

    propTypes: {
        angle: types.number,
        letter: types.string
    },
    getDefaultProps: function () {
        return {
            angle: 0,
            letter: ''
        };
    },
    render: function () {
        let s = this,
            props = s.props;

        let angle = props.angle,
            letter = props.letter;

        let containerStyle = { transform: `rotate(${ angle }deg)` },
            letterStyle = { transform: `rotate(${ angle * -1 }deg)` };
        return React.createElement(
            'span',
            { className: 'ap-analog-letter',
                style: containerStyle },
            React.createElement(
                'span',
                { className: 'ap-analog-letter-title', style: letterStyle },
                letter
            )
        );
    }
});

module.exports = ApAnalogClockLetter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9hbmFsb2dfY2xvY2tfbGV0dGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLFlBQVksQ0FBQzs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUzs7O0FBQUMsQUFHNUIsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDeEMsYUFBUyxFQUFFO0FBQ1AsYUFBSyxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ25CLGNBQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtLQUN2QjtBQUNELG1CQUFlLEVBQUUsWUFBWTtBQUN6QixlQUFPO0FBQ0gsaUJBQUssRUFBRSxDQUFDO0FBQ1Isa0JBQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQTtLQUNKO0FBQ0QsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixZQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztZQUNuQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsWUFBSSxjQUFjLEdBQUcsRUFBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEdBQUUsS0FBSyxFQUFDLElBQUksQ0FBQyxFQUFDO1lBQ25ELFdBQVcsR0FBRyxFQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sR0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUMxRCxlQUNJOztjQUFNLFNBQVMsRUFBQyxrQkFBa0I7QUFDNUIscUJBQUssRUFBRSxjQUFjLEFBQUM7WUFDcEI7O2tCQUFNLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUUsV0FBVyxBQUFDO2dCQUFFLE1BQU07YUFBUTtTQUN6RSxDQUNiO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJhcF9hbmFsb2dfY2xvY2tfbGV0dGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbGV0dGVyIGZvciBhbmFsb2cgY2xvY2suXG4gKiBAY29uc3RydWN0b3IgQXBBbmFsb2dDbG9ja0xldHRlclxuICovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqIEBsZW5kcyBBcEFuYWxvZ0Nsb2NrTGV0dGVyICovXG5sZXQgQXBBbmFsb2dDbG9ja0xldHRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgYW5nbGU6IHR5cGVzLm51bWJlcixcbiAgICAgICAgbGV0dGVyOiB0eXBlcy5zdHJpbmdcbiAgICB9LFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgICBsZXR0ZXI6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgbGV0IGFuZ2xlID0gcHJvcHMuYW5nbGUsXG4gICAgICAgICAgICBsZXR0ZXIgPSBwcm9wcy5sZXR0ZXI7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lclN0eWxlID0ge3RyYW5zZm9ybTogYHJvdGF0ZSgke2FuZ2xlfWRlZylgfSxcbiAgICAgICAgICAgIGxldHRlclN0eWxlID0ge3RyYW5zZm9ybTogYHJvdGF0ZSgke2FuZ2xlICogLTF9ZGVnKWB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtYW5hbG9nLWxldHRlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1hbmFsb2ctbGV0dGVyLXRpdGxlXCIgc3R5bGU9e2xldHRlclN0eWxlfT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBBbmFsb2dDbG9ja0xldHRlcjsiXX0=