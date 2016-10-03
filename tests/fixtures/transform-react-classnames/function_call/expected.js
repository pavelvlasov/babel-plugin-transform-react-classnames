'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MyComponent = function MyComponent(props) {
  return React.createElement(
    'div',
    {
      className: 'my-classname-here'
    },
    React.createElement(
      'div',
      {
        className: 'my-classname-here_nested'
      },
      React.createElement(
        'span',
        {
          className: 'my-classname-here_nested_my-class'
        },
        React.createElement('span', {
          className: 'my-classname-here_nested_my-class_last'
        })
      ),
      React.createElement('span', {
        className: 'my-classname-here_nested_sibling1'
      }),
      React.createElement('span', {
        className: 'my-classname-here_nested_sibling2'
      })
    )
  );
};

exports.default = MyComponent;
