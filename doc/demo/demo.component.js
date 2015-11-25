"use strict";

const React = require('react');

const ApAnalogClock = require('../../lib/ap_analog_clock'),
      ApDigitalLock = require('../../lib/ap_digital_clock');

let Demo = React.createClass({
    displayName: 'Demo',

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(ApAnalogClock, null),
            React.createElement(ApDigitalLock, null)
        );
    }
});

module.exports = Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUM7TUFDdEQsYUFBYSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUUxRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsVUFBTSxFQUFFLFlBQVk7QUFDaEIsZUFDSTs7O1lBQ0ksb0JBQUMsYUFBYSxPQUFpQjtZQUMvQixvQkFBQyxhQUFhLE9BQWlCO1NBQzdCLENBQ1I7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9kb2MvZGVtbyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IEFwQW5hbG9nQ2xvY2sgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfYW5hbG9nX2Nsb2NrJyksXG4gICAgQXBEaWdpdGFsTG9jayA9IHJlcXVpcmUoJy4uLy4uL2xpYi9hcF9kaWdpdGFsX2Nsb2NrJyk7XG5cbmxldCBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QXBBbmFsb2dDbG9jaz48L0FwQW5hbG9nQ2xvY2s+XG4gICAgICAgICAgICAgICAgPEFwRGlnaXRhbExvY2s+PC9BcERpZ2l0YWxMb2NrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVtbzsiXX0=