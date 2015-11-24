"use strict";

const React = require('react'),
      pkg = require('../../package.json'),
      links = require('../links.json'),
      fs = require('fs'),
      apeHighlighting = require('ape-highlighting'),
      highlightJsx = apeHighlighting.highlightJsx,
      stylesheets = require('apeman-asset-stylesheets');

const Demo = require('./demo.component.js'),
      ApClockStyle = require('../../lib/ap_clock_style'),
      ApAnalogClockStyle = require('../../lib/ap_analog_clock_style'),
      basic = require('apeman-react-basic'),
      ApStyle = basic.ApStyle,
      ApHead = basic.ApHead,
      ApLinks = basic.ApLinks,
      ApHtml = basic.ApHtml;

const FAVICON_URL = "https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png";

module.exports = React.createElement(
    ApHtml,
    { className: 'react-demo' },
    React.createElement(
        ApHead,
        { charset: 'UTF-8',
            title: pkg.name + ' Demo',
            icon: FAVICON_URL },
        React.createElement(ApStyle, { data: fs.readFileSync(stylesheets.reactDemo).toString() }),
        React.createElement(ApClockStyle, null),
        React.createElement(ApAnalogClockStyle, null)
    ),
    React.createElement(
        'body',
        null,
        React.createElement('div', { id: 'demo-style' }),
        React.createElement(
            'header',
            { className: 'react-demo-header' },
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'h1',
                    null,
                    React.createElement(
                        'a',
                        { href: pkg.homepage },
                        pkg.name
                    )
                )
            )
        ),
        React.createElement(
            'main',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'react-demo-playground' },
                    React.createElement(
                        'div',
                        { className: 'react-demo-container' },
                        React.createElement(
                            'div',
                            { id: 'demo-wrap' },
                            React.createElement(Demo, null)
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('pre', { className: 'react-demo-src', dangerouslySetInnerHTML: { __html: highlightJsx.fromFile(require.resolve('./demo.component.jsx')) } })
                )
            )
        ),
        React.createElement(
            'footer',
            null,
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(ApLinks, { links: links })
            )
        ),
        React.createElement('script', { src: './demo.js' })
    )
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNuQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUNoQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztNQUNsQixlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO01BQzdDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWTtNQUMzQyxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXRELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztNQUN2QyxZQUFZLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO01BQ2xELGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztNQUMvRCxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDO01BQ3JDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztNQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07TUFDckIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO01BQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUUxQixNQUFNLFdBQVcsR0FBRywrR0FBK0csQ0FBQzs7QUFFcEksTUFBTSxDQUFDLE9BQU8sR0FDVjtBQUFDLFVBQU07TUFBQyxTQUFTLEVBQUMsWUFBWTtJQUMxQjtBQUFDLGNBQU07VUFBQyxPQUFPLEVBQUMsT0FBTztBQUNmLGlCQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLEFBQUM7QUFDMUIsZ0JBQUksRUFBRSxXQUFXLEFBQUM7UUFDdEIsb0JBQUMsT0FBTyxJQUFDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQUFBQyxHQUFXO1FBQzVFLG9CQUFDLFlBQVksT0FBZ0I7UUFDN0Isb0JBQUMsa0JBQWtCLE9BQXNCO0tBQ3BDO0lBQ1Q7OztRQUNBLDZCQUFLLEVBQUUsRUFBQyxZQUFZLEdBQU87UUFDM0I7O2NBQVEsU0FBUyxFQUFDLG1CQUFtQjtZQUNqQzs7a0JBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakM7OztvQkFDSTs7MEJBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEFBQUM7d0JBQUUsR0FBRyxDQUFDLElBQUk7cUJBQUs7aUJBQ3BDO2FBQ0g7U0FDRDtRQUNUOzs7WUFDSTs7O2dCQUNJOztzQkFBSyxTQUFTLEVBQUMsdUJBQXVCO29CQUNsQzs7MEJBQUssU0FBUyxFQUFDLHNCQUFzQjt3QkFDakM7OzhCQUFLLEVBQUUsRUFBQyxXQUFXOzRCQUNmLG9CQUFDLElBQUksT0FBUTt5QkFDWDtxQkFDSjtpQkFDSjthQUNKO1lBQ047O2tCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDOzs7b0JBQ2hCLDZCQUFLLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUIsRUFDdkQsRUFBQyxNQUFNLEVBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBQyxBQUN0RSxHQUNLO2lCQUNnQjthQUNKO1NBRUg7UUFDUDs7O1lBQ0k7O2tCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDLG9CQUFDLE9BQU8sSUFBQyxLQUFLLEVBQUUsS0FBSyxBQUFDLEdBQVc7YUFDL0I7U0FDRDtRQUNULGdDQUFRLEdBQUcsRUFBQyxXQUFXLEdBQVU7S0FDMUI7Q0FDRixBQUNaLENBQUMiLCJmaWxlIjoiZGVtby5odG1sLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKSxcbiAgICBsaW5rcyA9IHJlcXVpcmUoJy4uL2xpbmtzLmpzb24nKSxcbiAgICBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBlSGlnaGxpZ2h0aW5nID0gcmVxdWlyZSgnYXBlLWhpZ2hsaWdodGluZycpLFxuICAgIGhpZ2hsaWdodEpzeCA9IGFwZUhpZ2hsaWdodGluZy5oaWdobGlnaHRKc3gsXG4gICAgc3R5bGVzaGVldHMgPSByZXF1aXJlKCdhcGVtYW4tYXNzZXQtc3R5bGVzaGVldHMnKTtcblxuY29uc3QgRGVtbyA9IHJlcXVpcmUoJy4vZGVtby5jb21wb25lbnQuanMnKSxcbiAgICBBcENsb2NrU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfY2xvY2tfc3R5bGUnKSxcbiAgICBBcEFuYWxvZ0Nsb2NrU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfYW5hbG9nX2Nsb2NrX3N0eWxlJyksXG4gICAgYmFzaWMgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtYmFzaWMnKSxcbiAgICBBcFN0eWxlID0gYmFzaWMuQXBTdHlsZSxcbiAgICBBcEhlYWQgPSBiYXNpYy5BcEhlYWQsXG4gICAgQXBMaW5rcyA9IGJhc2ljLkFwTGlua3MsXG4gICAgQXBIdG1sID0gYmFzaWMuQXBIdG1sO1xuXG5jb25zdCBGQVZJQ09OX1VSTCA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwZW1hbi1hc3NldC1sYWJvL2FwZW1hbi1hc3NldC1pbWFnZXMvbWFzdGVyL2Rpc3QvZmF2aWNvbi9yZWFjdC1mYXZpY29uLnBuZ1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgICA8QXBIdG1sIGNsYXNzTmFtZT1cInJlYWN0LWRlbW9cIj5cbiAgICAgICAgPEFwSGVhZCBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtwa2cubmFtZSArICcgRGVtbyd9XG4gICAgICAgICAgICAgICAgaWNvbj17RkFWSUNPTl9VUkx9PlxuICAgICAgICAgICAgPEFwU3R5bGUgZGF0YT17ZnMucmVhZEZpbGVTeW5jKHN0eWxlc2hlZXRzLnJlYWN0RGVtbykudG9TdHJpbmcoKX0+PC9BcFN0eWxlPlxuICAgICAgICAgICAgPEFwQ2xvY2tTdHlsZT48L0FwQ2xvY2tTdHlsZT5cbiAgICAgICAgICAgIDxBcEFuYWxvZ0Nsb2NrU3R5bGU+PC9BcEFuYWxvZ0Nsb2NrU3R5bGU+XG4gICAgICAgIDwvQXBIZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD1cImRlbW8tc3R5bGVcIj48L2Rpdj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cGtnLmhvbWVwYWdlfT57cGtnLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tcGxheWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVtby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW8+PC9EZW1vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbjxwcmUgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1zcmNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17XG57X19odG1sOmhpZ2hsaWdodEpzeC5mcm9tRmlsZShyZXF1aXJlLnJlc29sdmUoJy4vZGVtby5jb21wb25lbnQuanN4JykpfVxufT5cbjwvcHJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxBcExpbmtzIGxpbmtzPXtsaW5rc30+PC9BcExpbmtzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4vZGVtby5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L2JvZHk+XG4gICAgPC9BcEh0bWw+XG4pO1xuIl19