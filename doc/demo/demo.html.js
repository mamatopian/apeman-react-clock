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
      ApDigitalClockStyle = require('../../lib/ap_digital_clock_style'),
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
        React.createElement(ApAnalogClockStyle, null),
        React.createElement(ApDigitalClockStyle, null)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNuQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUNoQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztNQUNsQixlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO01BQzdDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWTtNQUMzQyxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXRELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztNQUN2QyxZQUFZLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO01BQ2xELGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztNQUMvRCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUM7TUFDakUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNyQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87TUFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO01BQ3JCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztNQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsTUFBTSxXQUFXLEdBQUcsK0dBQStHLENBQUM7O0FBRXBJLE1BQU0sQ0FBQyxPQUFPLEdBQ1Y7QUFBQyxVQUFNO01BQUMsU0FBUyxFQUFDLFlBQVk7SUFDMUI7QUFBQyxjQUFNO1VBQUMsT0FBTyxFQUFDLE9BQU87QUFDZixpQkFBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxBQUFDO0FBQzFCLGdCQUFJLEVBQUUsV0FBVyxBQUFDO1FBQ3RCLG9CQUFDLE9BQU8sSUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEFBQUMsR0FBVztRQUM1RSxvQkFBQyxZQUFZLE9BQWdCO1FBQzdCLG9CQUFDLGtCQUFrQixPQUFzQjtRQUN6QyxvQkFBQyxtQkFBbUIsT0FBdUI7S0FDdEM7SUFDVDs7O1FBQ0EsNkJBQUssRUFBRSxFQUFDLFlBQVksR0FBTztRQUMzQjs7Y0FBUSxTQUFTLEVBQUMsbUJBQW1CO1lBQ2pDOztrQkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQzs7O29CQUNJOzswQkFBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQUFBQzt3QkFBRSxHQUFHLENBQUMsSUFBSTtxQkFBSztpQkFDcEM7YUFDSDtTQUNEO1FBQ1Q7OztZQUNJOzs7Z0JBQ0k7O3NCQUFLLFNBQVMsRUFBQyx1QkFBdUI7b0JBQ2xDOzswQkFBSyxTQUFTLEVBQUMsc0JBQXNCO3dCQUNqQzs7OEJBQUssRUFBRSxFQUFDLFdBQVc7NEJBQ2Ysb0JBQUMsSUFBSSxPQUFRO3lCQUNYO3FCQUNKO2lCQUNKO2FBQ0o7WUFDTjs7a0JBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakM7OztvQkFDaEIsNkJBQUssU0FBUyxFQUFDLGdCQUFnQixFQUFDLHVCQUF1QixFQUN2RCxFQUFDLE1BQU0sRUFBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFDLEFBQ3RFLEdBQ0s7aUJBQ2dCO2FBQ0o7U0FFSDtRQUNQOzs7WUFDSTs7a0JBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDakMsb0JBQUMsT0FBTyxJQUFDLEtBQUssRUFBRSxLQUFLLEFBQUMsR0FBVzthQUMvQjtTQUNEO1FBQ1QsZ0NBQVEsR0FBRyxFQUFDLFdBQVcsR0FBVTtLQUMxQjtDQUNGLEFBQ1osQ0FBQyIsImZpbGUiOiJkZW1vLmh0bWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtY2xvY2svZG9jL2RlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHBrZyA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLFxuICAgIGxpbmtzID0gcmVxdWlyZSgnLi4vbGlua3MuanNvbicpLFxuICAgIGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICBhcGVIaWdobGlnaHRpbmcgPSByZXF1aXJlKCdhcGUtaGlnaGxpZ2h0aW5nJyksXG4gICAgaGlnaGxpZ2h0SnN4ID0gYXBlSGlnaGxpZ2h0aW5nLmhpZ2hsaWdodEpzeCxcbiAgICBzdHlsZXNoZWV0cyA9IHJlcXVpcmUoJ2FwZW1hbi1hc3NldC1zdHlsZXNoZWV0cycpO1xuXG5jb25zdCBEZW1vID0gcmVxdWlyZSgnLi9kZW1vLmNvbXBvbmVudC5qcycpLFxuICAgIEFwQ2xvY2tTdHlsZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9hcF9jbG9ja19zdHlsZScpLFxuICAgIEFwQW5hbG9nQ2xvY2tTdHlsZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9hcF9hbmFsb2dfY2xvY2tfc3R5bGUnKSxcbiAgICBBcERpZ2l0YWxDbG9ja1N0eWxlID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX2RpZ2l0YWxfY2xvY2tfc3R5bGUnKSxcbiAgICBiYXNpYyA9IHJlcXVpcmUoJ2FwZW1hbi1yZWFjdC1iYXNpYycpLFxuICAgIEFwU3R5bGUgPSBiYXNpYy5BcFN0eWxlLFxuICAgIEFwSGVhZCA9IGJhc2ljLkFwSGVhZCxcbiAgICBBcExpbmtzID0gYmFzaWMuQXBMaW5rcyxcbiAgICBBcEh0bWwgPSBiYXNpYy5BcEh0bWw7XG5cbmNvbnN0IEZBVklDT05fVVJMID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBlbWFuLWFzc2V0LWxhYm8vYXBlbWFuLWFzc2V0LWltYWdlcy9tYXN0ZXIvZGlzdC9mYXZpY29uL3JlYWN0LWZhdmljb24ucG5nXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICAgIDxBcEh0bWwgY2xhc3NOYW1lPVwicmVhY3QtZGVtb1wiPlxuICAgICAgICA8QXBIZWFkIGNoYXJzZXQ9XCJVVEYtOFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3BrZy5uYW1lICsgJyBEZW1vJ31cbiAgICAgICAgICAgICAgICBpY29uPXtGQVZJQ09OX1VSTH0+XG4gICAgICAgICAgICA8QXBTdHlsZSBkYXRhPXtmcy5yZWFkRmlsZVN5bmMoc3R5bGVzaGVldHMucmVhY3REZW1vKS50b1N0cmluZygpfT48L0FwU3R5bGU+XG4gICAgICAgICAgICA8QXBDbG9ja1N0eWxlPjwvQXBDbG9ja1N0eWxlPlxuICAgICAgICAgICAgPEFwQW5hbG9nQ2xvY2tTdHlsZT48L0FwQW5hbG9nQ2xvY2tTdHlsZT5cbiAgICAgICAgICAgIDxBcERpZ2l0YWxDbG9ja1N0eWxlPjwvQXBEaWdpdGFsQ2xvY2tTdHlsZT5cbiAgICAgICAgPC9BcEhlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwiZGVtby1zdHlsZVwiPjwvZGl2PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8taGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwa2cuaG9tZXBhZ2V9Pntwa2cubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1wbGF5Z3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZW1vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtbz48L0RlbW8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuPHByZSBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXNyY1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtcbntfX2h0bWw6aGlnaGxpZ2h0SnN4LmZyb21GaWxlKHJlcXVpcmUucmVzb2x2ZSgnLi9kZW1vLmNvbXBvbmVudC5qc3gnKSl9XG59PlxuPC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEFwTGlua3MgbGlua3M9e2xpbmtzfT48L0FwTGlua3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi9kZW1vLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L0FwSHRtbD5cbik7XG4iXX0=