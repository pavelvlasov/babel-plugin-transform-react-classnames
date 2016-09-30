"use strict";

const TYPES = require('babel-types');
const delimiters = {
  element: '_',
  modifier: '--'
};

const getClassName = (attributeNode, className) => {
  if (!attributeNode) {
    return className;
  }

  const value = attributeNode.value;

  return className ?
    className + delimiters.element + value.value :
    value.value;
};

const findClassNameAttribute = (attributes) =>
  attributes.find((attribute) =>
    attribute.name.name === 'className'
  );

const getElementClassName = (path) => {
  const node = path.node;
  const attributes = node.openingElement.attributes;
  const parentClassName = path.parent &&
    path.parent.openingElement &&
    path.parent.openingElement.className;

  const classNameAttribute =  findClassNameAttribute(attributes);

  return getClassName(classNameAttribute, parentClassName);
};

const traverseElement = () => {
  return {
    JSXElement(path) {
      let className = getElementClassName(path);
      path.node.openingElement.className = className;
    },
    JSXAttribute(path) {
      if (!path.node.seen && path.node.name.name === 'className') {
        const className = path.parent &&
          path.parent.className;

        if (className) {
          const node = TYPES.JSXAttribute(
            TYPES.JSXIdentifier('className'),
            TYPES.valueToNode(className)
          );
          path.replaceWith(node);
          path.node.seen = true;
        }
      }
    }
  };
};

const main = () => {
  return {
    visitor: traverseElement('')
  };
};

module.exports = main;
