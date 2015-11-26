"use strict";

const React = require('react');

const ApAnalogClock = require('../../lib/ap_analog_clock'),
      ApDigitalLock = require('../../lib/ap_digital_clock');

let Demo = React.createClass({
    displayName: 'Demo',

    render: function () {
        return React.createElement(
            'div',
            { style: { display: 'flex' } },
            React.createElement(
                'div',
                { style: { width: '100%' } },
                React.createElement(ApAnalogClock, null)
            ),
            React.createElement(
                'div',
                { style: { width: '100%' } },
                React.createElement(ApDigitalLock, null)
            )
        );
    }
});

module.exports = Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUM7TUFDdEQsYUFBYSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUUxRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsVUFBTSxFQUFFLFlBQVk7QUFDaEIsZUFDSTs7Y0FBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEFBQUM7WUFDekI7O2tCQUFLLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQUFBQztnQkFDdkIsb0JBQUMsYUFBYSxPQUFpQjthQUM3QjtZQUNOOztrQkFBSyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEFBQUM7Z0JBQ3ZCLG9CQUFDLGFBQWEsT0FBaUI7YUFDN0I7U0FDSixDQUNSO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtY2xvY2svZG9jL2RlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBBcEFuYWxvZ0Nsb2NrID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX2FuYWxvZ19jbG9jaycpLFxuICAgIEFwRGlnaXRhbExvY2sgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfZGlnaXRhbF9jbG9jaycpO1xuXG5sZXQgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFwQW5hbG9nQ2xvY2s+PC9BcEFuYWxvZ0Nsb2NrPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFwRGlnaXRhbExvY2s+PC9BcERpZ2l0YWxMb2NrPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVtbzsiXX0=