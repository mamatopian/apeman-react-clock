'use strict';var _react=require('react');var _react2=_interopRequireDefault(_react);var _package=require('../../package.json');var _package2=_interopRequireDefault(_package);var _links=require('../links.json');var _links2=_interopRequireDefault(_links);var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _apeHighlighting=require('ape-highlighting');var _apemanAssetStylesheets=require('apeman-asset-stylesheets');var _apemanAssetStylesheets2=_interopRequireDefault(_apemanAssetStylesheets);var _demoComponent=require('./demo.component.js');var _demoComponent2=_interopRequireDefault(_demoComponent);var _ap_clock_style=require('../../lib/ap_clock_style');var _ap_clock_style2=_interopRequireDefault(_ap_clock_style);var _ap_analog_clock_style=require('../../lib/ap_analog_clock_style');var _ap_analog_clock_style2=_interopRequireDefault(_ap_analog_clock_style);var _ap_digital_clock_style=require('../../lib/ap_digital_clock_style');var _ap_digital_clock_style2=_interopRequireDefault(_ap_digital_clock_style);var _apemanReactBasic=require('apeman-react-basic');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FAVICON_URL='https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png';module.exports=_react2.default.createElement(_apemanReactBasic.ApHtml,{className:'react-demo'},_react2.default.createElement(_apemanReactBasic.ApHead,{charset:'UTF-8',title:_package2.default.name+' Demo',icon:FAVICON_URL},_react2.default.createElement(_apemanReactBasic.ApStyle,{data:_fs2.default.readFileSync(_apemanAssetStylesheets2.default.reactDemo).toString()}),_react2.default.createElement(_ap_clock_style2.default,null),_react2.default.createElement(_ap_analog_clock_style2.default,null),_react2.default.createElement(_ap_digital_clock_style2.default,null),_react2.default.createElement(_apemanReactBasic.ApStyle,{data:'\n@font-face { font-family: digital-clock; src: url(./digital-clock.ttf);\n}\n.ap-digital-clock { font-family: digital-clock;\n}\n'})),_react2.default.createElement('body',null,_react2.default.createElement('div',{id:'demo-style'}),_react2.default.createElement('header',{className:'react-demo-header'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('h1',null,_react2.default.createElement('a',{href:_package2.default.homepage},_package2.default.name)))),_react2.default.createElement('main',null,_react2.default.createElement('div',null,_react2.default.createElement('div',{className:'react-demo-playground'},_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',{id:'demo-wrap'},_react2.default.createElement(_demoComponent2.default,null))))),_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement('div',null,_react2.default.createElement('pre',{className:'react-demo-src',dangerouslySetInnerHTML:{__html:_apeHighlighting.highlightJsx.fromFile(require.resolve('./demo.component.jsx'))}})))),_react2.default.createElement('footer',null,_react2.default.createElement('div',{className:'react-demo-container'},_react2.default.createElement(_apemanReactBasic.ApLinks,{links:_links2.default}))),_react2.default.createElement('script',{src:'./demo.js'})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb29DQWdCQSxJQUFNLFlBQWMsK0dBQWQsQ0FFTixPQUFPLE9BQVAsQ0FDSSx3REFBUSxVQUFVLFlBQVYsQ0FBUixDQUNJLHdEQUFRLFFBQVEsT0FBUixDQUNBLE1BQU8sa0JBQUksSUFBSixDQUFXLE9BQVgsQ0FDUCxLQUFNLFdBQU4sQ0FGUixDQUdJLHlEQUFTLEtBQU0sYUFBRyxZQUFILENBQWdCLGlDQUFZLFNBQVosQ0FBaEIsQ0FBdUMsUUFBdkMsRUFBTixDQUFULENBSEosQ0FJSSw0REFKSixDQUtJLG1FQUxKLENBTUksb0VBTkosQ0FPSSx5REFBUywwSUFBVCxDQVBKLENBREosQ0FzQkksMENBQ0EscUNBQUssR0FBRyxZQUFILENBQUwsQ0FEQSxDQUVBLHdDQUFRLFVBQVUsbUJBQVYsQ0FBUixDQUNJLHFDQUFLLFVBQVUsc0JBQVYsQ0FBTCxDQUNJLHdDQUNJLG1DQUFHLEtBQU0sa0JBQUksUUFBSixDQUFULENBQXdCLGtCQUFJLElBQUosQ0FENUIsQ0FESixDQURKLENBRkEsQ0FTQSwwQ0FDSSx5Q0FDSSxxQ0FBSyxVQUFVLHVCQUFWLENBQUwsQ0FDSSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDSSxxQ0FBSyxHQUFHLFdBQUgsQ0FBTCxDQUNJLDJEQURKLENBREosQ0FESixDQURKLENBREosQ0FVSSxxQ0FBSyxVQUFVLHNCQUFWLENBQUwsQ0FDSSx5Q0FDaEIscUNBQUssVUFBVSxnQkFBVixDQUEyQix3QkFDaEMsQ0FBQyxPQUFPLDhCQUFhLFFBQWIsQ0FBc0IsUUFBUSxPQUFSLENBQWdCLHNCQUFoQixDQUF0QixDQUFQLENBRCtCLENBQWhDLENBRGdCLENBREosQ0FWSixDQVRBLENBNkJBLDRDQUNJLHFDQUFLLFVBQVUsc0JBQVYsQ0FBTCxDQUNJLHlEQUFTLHNCQUFULENBREosQ0FESixDQTdCQSxDQWtDQSx3Q0FBUSxJQUFJLFdBQUosQ0FBUixDQWxDQSxDQXRCSixDQURKIiwiZmlsZSI6ImRlbW8uaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9Qcm9qZWN0cy9hcGVtYW4tcHJvamVjdHMvYXBlbWFuLXJlYWN0LWNsb2NrL2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgbGlua3MgZnJvbSAnLi4vbGlua3MuanNvbic7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtoaWdobGlnaHRKc3h9IGZyb20gJ2FwZS1oaWdobGlnaHRpbmcnO1xuaW1wb3J0IHN0eWxlc2hlZXRzIGZyb20gJ2FwZW1hbi1hc3NldC1zdHlsZXNoZWV0cyc7XG5cbmltcG9ydCBEZW1vIGZyb20gJy4vZGVtby5jb21wb25lbnQuanMnO1xuaW1wb3J0IEFwQ2xvY2tTdHlsZSBmcm9tICcuLi8uLi9saWIvYXBfY2xvY2tfc3R5bGUnO1xuaW1wb3J0IEFwQW5hbG9nQ2xvY2tTdHlsZSBmcm9tICcuLi8uLi9saWIvYXBfYW5hbG9nX2Nsb2NrX3N0eWxlJztcbmltcG9ydCBBcERpZ2l0YWxDbG9ja1N0eWxlIGZyb20gJy4uLy4uL2xpYi9hcF9kaWdpdGFsX2Nsb2NrX3N0eWxlJztcblxuaW1wb3J0IHtBcFN0eWxlLCBBcElvbkljb25TdHlsZSwgQXBGYUljb25TdHlsZSwgQXBIZWFkLCBBcEJvZHksIEFwTGlua3MsIEFwSHRtbH0gZnJvbSAnYXBlbWFuLXJlYWN0LWJhc2ljJztcblxuY29uc3QgRkFWSUNPTl9VUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcGVtYW4tYXNzZXQtbGFiby9hcGVtYW4tYXNzZXQtaW1hZ2VzL21hc3Rlci9kaXN0L2Zhdmljb24vcmVhY3QtZmF2aWNvbi5wbmdcIjtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gICAgPEFwSHRtbCBjbGFzc05hbWU9XCJyZWFjdC1kZW1vXCI+XG4gICAgICAgIDxBcEhlYWQgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17cGtnLm5hbWUgKyAnIERlbW8nfVxuICAgICAgICAgICAgICAgIGljb249e0ZBVklDT05fVVJMfT5cbiAgICAgICAgICAgIDxBcFN0eWxlIGRhdGE9e2ZzLnJlYWRGaWxlU3luYyhzdHlsZXNoZWV0cy5yZWFjdERlbW8pLnRvU3RyaW5nKCl9PjwvQXBTdHlsZT5cbiAgICAgICAgICAgIDxBcENsb2NrU3R5bGUvPlxuICAgICAgICAgICAgPEFwQW5hbG9nQ2xvY2tTdHlsZS8+XG4gICAgICAgICAgICA8QXBEaWdpdGFsQ2xvY2tTdHlsZS8+XG4gICAgICAgICAgICA8QXBTdHlsZSBkYXRhPXtcbmBcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsLWNsb2NrO1xuICAgIHNyYzogdXJsKC4vZGlnaXRhbC1jbG9jay50dGYpO1xufVxuLmFwLWRpZ2l0YWwtY2xvY2sge1xuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsLWNsb2NrO1xufVxuYFxuXG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAgPC9BcFN0eWxlPlxuICAgICAgICA8L0FwSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJkZW1vLXN0eWxlXCI+PC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BrZy5ob21lcGFnZX0+e3BrZy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXBsYXlncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlbW8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vPjwvRGVtbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG48cHJlIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tc3JjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e1xue19faHRtbDpoaWdobGlnaHRKc3guZnJvbUZpbGUocmVxdWlyZS5yZXNvbHZlKCcuL2RlbW8uY29tcG9uZW50LmpzeCcpKX1cbn0+XG48L3ByZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QXBMaW5rcyBsaW5rcz17bGlua3N9PjwvQXBMaW5rcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2RlbW8uanNcIi8+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L0FwSHRtbD5cbik7XG4iXX0=