/**
 * Number for digital clock.
 * @constructor ApDigitalClockNumber
 */

"use strict";

const React = require('react'),
      types = React.PropTypes,
      classnames = require('classnames'),
      arrayreduce = require('arrayreduce'),
      ApDigitalClockNumberBar = require('./ap_digital_clock_number_bar');

/** @lends ApDigitalClockNumber */
let ApDigitalClockNumber = React.createClass({
    displayName: 'ApDigitalClockNumber',

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        value: types.number
    },

    statics: {
        highlightWithNumber: function (value) {
            switch (value) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                default:
                    return [[true, true, true], [true, true, true], [true, true, true]];
            }
        }
    },

    getDefaultProps: function () {
        return {
            value: 8
        };
    },

    render: function () {
        let s = this,
            props = s.props;

        var highlights = ApDigitalClockNumber.highlightWithNumber(props.value);
        let bars = highlights.map((highlights, i) => {
            return React.createElement(
                'span',
                { key: 'bar-row-' + i, className: 'ap-digital-clock-number-bar-row' },
                highlights.map((highlighted, j) => {
                    return React.createElement(
                        ApDigitalClockNumberBar,
                        { highlighted: highlighted,
                            key: `bar-${ i }-${ j }`,
                            className: classnames(`ap-digital-clock-number-bar-${ i }-${ j }`)
                        },
                        React.createElement('span', null)
                    );
                })
            );
        });

        return React.createElement(
            'span',
            { className: classnames("ap-digital-clock-number", props.className),
                'data-value': props.value },
            React.createElement(
                'span',
                { className: 'ap-digital-clock-number-inner' },
                bars
            )
        );
    }
});

module.exports = ApDigitalClockNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9kaWdpdGFsX2Nsb2NrX251bWJlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7TUFDdkIsVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFDbEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7TUFDcEMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDOzs7QUFBQyxBQUd2RSxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7QUFNekMsYUFBUyxFQUFFO0FBQ1AsYUFBSyxFQUFFLEtBQUssQ0FBQyxNQUFNO0tBQ3RCOztBQUVELFdBQU8sRUFBRTtBQUNMLDJCQUFtQixFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ2xDLG9CQUFRLEtBQUs7QUFDVCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUCxxQkFBSyxDQUFDLENBQUM7QUFDUDtBQUNJLDJCQUFPLENBQ0gsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUNsQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ2xCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDckIsQ0FBQztBQUFBLGFBQ1Q7U0FDSjtLQUNKOztBQUVELG1CQUFlLEVBQUUsWUFBWTtBQUN6QixlQUFPO0FBQ0gsaUJBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQTtLQUNKOztBQUVELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUk7WUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFcEIsWUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZFLFlBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFJO0FBQ3hDLG1CQUFROztrQkFBTSxHQUFHLEVBQUUsVUFBVSxHQUFHLENBQUMsQUFBQyxFQUFDLFNBQVMsRUFBQyxpQ0FBaUM7Z0JBQzFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFJO0FBQzlCLDJCQUNBO0FBQUMsK0NBQXVCOzBCQUFDLFdBQVcsRUFBRSxXQUFXLEFBQUM7QUFDekIsK0JBQUcsRUFBRSxDQUFDLElBQUksR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEFBQUM7QUFDckIscUNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyw0QkFBNEIsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQUFBQzs7d0JBQ3ZGLGlDQUFhO3FCQUEwQixDQUNsQztpQkFDTCxDQUFDO2FBQ0UsQ0FBRTtTQUVqQixDQUFDLENBQUM7O0FBRUgsZUFDSTs7Y0FBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQUFBQztBQUNsRSw4QkFBWSxLQUFLLENBQUMsS0FBSyxBQUFDO1lBQzFCOztrQkFBTSxTQUFTLEVBQUMsK0JBQStCO2dCQUM5QyxJQUFJO2FBQ0U7U0FDSixDQUNWO0tBQ0o7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyIsImZpbGUiOiJhcF9kaWdpdGFsX2Nsb2NrX251bWJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC1jbG9jay9saWIvanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBOdW1iZXIgZm9yIGRpZ2l0YWwgY2xvY2suXG4gKiBAY29uc3RydWN0b3IgQXBEaWdpdGFsQ2xvY2tOdW1iZXJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHR5cGVzID0gUmVhY3QuUHJvcFR5cGVzLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgYXJyYXlyZWR1Y2UgPSByZXF1aXJlKCdhcnJheXJlZHVjZScpLFxuICAgIEFwRGlnaXRhbENsb2NrTnVtYmVyQmFyID0gcmVxdWlyZSgnLi9hcF9kaWdpdGFsX2Nsb2NrX251bWJlcl9iYXInKTtcblxuLyoqIEBsZW5kcyBBcERpZ2l0YWxDbG9ja051bWJlciAqL1xubGV0IEFwRGlnaXRhbENsb2NrTnVtYmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiB0eXBlcy5udW1iZXJcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBoaWdobGlnaHRXaXRoTnVtYmVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0cnVlLCB0cnVlLCB0cnVlXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IDhcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIHZhciBoaWdobGlnaHRzID0gQXBEaWdpdGFsQ2xvY2tOdW1iZXIuaGlnaGxpZ2h0V2l0aE51bWJlcihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGxldCBiYXJzID0gaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodHMsIGkpPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8c3BhbiBrZXk9eydiYXItcm93LScgKyBpfSBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW51bWJlci1iYXItcm93XCI+e1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodHMubWFwKChoaWdobGlnaHRlZCwgaik9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxBcERpZ2l0YWxDbG9ja051bWJlckJhciBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BiYXItJHtpfS0ke2p9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhgYXAtZGlnaXRhbC1jbG9jay1udW1iZXItYmFyLSR7aX0tJHtqfWApfVxuICAgICAgICAgICAgICAgICAgICA+PHNwYW4+PC9zcGFuPjwvQXBEaWdpdGFsQ2xvY2tOdW1iZXJCYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH08L3NwYW4+KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYXAtZGlnaXRhbC1jbG9jay1udW1iZXJcIiwgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e3Byb3BzLnZhbHVlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcC1kaWdpdGFsLWNsb2NrLW51bWJlci1pbm5lclwiPlxuICAgICAgICAgICAgICAgIHtiYXJzfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwRGlnaXRhbENsb2NrTnVtYmVyO1xuIl19