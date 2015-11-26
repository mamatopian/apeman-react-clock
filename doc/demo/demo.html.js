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
        React.createElement(ApDigitalClockStyle, null),
        React.createElement(ApStyle, { data: `
@font-face {
    font-family: digital-clock;
    src: url(digital-clock.ttf);
}
.ap-digital-clock {
    font-family: digital-clock;
}
` })
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
//# sourceMappingURL=data:application/json;base64,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ZGVtby5odG1sLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LWNsb2NrL2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKSxcbiAgICBsaW5rcyA9IHJlcXVpcmUoJy4uL2xpbmtzLmpzb24nKSxcbiAgICBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBlSGlnaGxpZ2h0aW5nID0gcmVxdWlyZSgnYXBlLWhpZ2hsaWdodGluZycpLFxuICAgIGhpZ2hsaWdodEpzeCA9IGFwZUhpZ2hsaWdodGluZy5oaWdobGlnaHRKc3gsXG4gICAgc3R5bGVzaGVldHMgPSByZXF1aXJlKCdhcGVtYW4tYXNzZXQtc3R5bGVzaGVldHMnKTtcblxuY29uc3QgRGVtbyA9IHJlcXVpcmUoJy4vZGVtby5jb21wb25lbnQuanMnKSxcbiAgICBBcENsb2NrU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfY2xvY2tfc3R5bGUnKSxcbiAgICBBcEFuYWxvZ0Nsb2NrU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfYW5hbG9nX2Nsb2NrX3N0eWxlJyksXG4gICAgQXBEaWdpdGFsQ2xvY2tTdHlsZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9hcF9kaWdpdGFsX2Nsb2NrX3N0eWxlJyksXG4gICAgYmFzaWMgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtYmFzaWMnKSxcbiAgICBBcFN0eWxlID0gYmFzaWMuQXBTdHlsZSxcbiAgICBBcEhlYWQgPSBiYXNpYy5BcEhlYWQsXG4gICAgQXBMaW5rcyA9IGJhc2ljLkFwTGlua3MsXG4gICAgQXBIdG1sID0gYmFzaWMuQXBIdG1sO1xuXG5jb25zdCBGQVZJQ09OX1VSTCA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwZW1hbi1hc3NldC1sYWJvL2FwZW1hbi1hc3NldC1pbWFnZXMvbWFzdGVyL2Rpc3QvZmF2aWNvbi9yZWFjdC1mYXZpY29uLnBuZ1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgICA8QXBIdG1sIGNsYXNzTmFtZT1cInJlYWN0LWRlbW9cIj5cbiAgICAgICAgPEFwSGVhZCBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtwa2cubmFtZSArICcgRGVtbyd9XG4gICAgICAgICAgICAgICAgaWNvbj17RkFWSUNPTl9VUkx9PlxuICAgICAgICAgICAgPEFwU3R5bGUgZGF0YT17ZnMucmVhZEZpbGVTeW5jKHN0eWxlc2hlZXRzLnJlYWN0RGVtbykudG9TdHJpbmcoKX0+PC9BcFN0eWxlPlxuICAgICAgICAgICAgPEFwQ2xvY2tTdHlsZT48L0FwQ2xvY2tTdHlsZT5cbiAgICAgICAgICAgIDxBcEFuYWxvZ0Nsb2NrU3R5bGU+PC9BcEFuYWxvZ0Nsb2NrU3R5bGU+XG4gICAgICAgICAgICA8QXBEaWdpdGFsQ2xvY2tTdHlsZT48L0FwRGlnaXRhbENsb2NrU3R5bGU+XG4gICAgICAgICAgICA8QXBTdHlsZSBkYXRhPXtcbmBcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsLWNsb2NrO1xuICAgIHNyYzogdXJsKGRpZ2l0YWwtY2xvY2sudHRmKTtcbn1cbi5hcC1kaWdpdGFsLWNsb2NrIHtcbiAgICBmb250LWZhbWlseTogZGlnaXRhbC1jbG9jaztcbn1cbmBcblxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDwvQXBTdHlsZT5cbiAgICAgICAgPC9BcEhlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwiZGVtby1zdHlsZVwiPjwvZGl2PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8taGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwa2cuaG9tZXBhZ2V9Pntwa2cubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1wbGF5Z3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZW1vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtbz48L0RlbW8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuPHByZSBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXNyY1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtcbntfX2h0bWw6aGlnaGxpZ2h0SnN4LmZyb21GaWxlKHJlcXVpcmUucmVzb2x2ZSgnLi9kZW1vLmNvbXBvbmVudC5qc3gnKSl9XG59PlxuPC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEFwTGlua3MgbGlua3M9e2xpbmtzfT48L0FwTGlua3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi9kZW1vLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L0FwSHRtbD5cbik7XG4iXX0=