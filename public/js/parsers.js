!function(Q){function n(U){if(F[U])return F[U].exports;var t=F[U]={i:U,l:!1,exports:{}};return Q[U].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var F={};n.m=Q,n.c=F,n.i=function(Q){return Q},n.d=function(Q,F,U){n.o(Q,F)||Object.defineProperty(Q,F,{configurable:!1,enumerable:!0,get:U})},n.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return n.d(F,"a",F),F},n.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},n.p="",n(n.s=4)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar getNodeValue = function getNodeValue(x) {\n  return x.trim();\n};\n\nvar getTextOfTextNodes = function getTextOfTextNodes(nodes) {\n  return nodes.filter(function (x) {\n    return x.nodeType === Node.TEXT_NODE;\n  }).map(function (x) {\n    return x.data.trim();\n  }).join('');\n};\n\nvar getAttributes = function getAttributes(node) {\n  return Object.keys(node.attributes).reduce(function (attributes, currentAttributeKey) {\n    var attribute = node.attributes[currentAttributeKey];\n\n    attributes[attribute.name] = attribute.nodeValue;\n\n    return attributes;\n  }, {});\n};\n\nvar htmlParser = function htmlParser(nodes) {\n  return [].concat(_toConsumableArray(nodes)).map(function (node) {\n    var isContainer = node.children.length;\n\n    if (isContainer) {\n      return {\n        type: node.localName,\n        value: getTextOfTextNodes([].concat(_toConsumableArray(node.childNodes))),\n        attributes: getAttributes(node),\n        children: htmlParser(node.children)\n      };\n    }\n\n    return {\n      type: node.localName,\n      value: getNodeValue(node.innerHTML),\n      attributes: getAttributes(node)\n    };\n  });\n};\n\nexports.default = htmlParser;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaHRtbFBhcnNlci5qcz9jMzczIl0sIm5hbWVzIjpbImdldE5vZGVWYWx1ZSIsIngiLCJ0cmltIiwiZ2V0VGV4dE9mVGV4dE5vZGVzIiwibm9kZXMiLCJmaWx0ZXIiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJtYXAiLCJkYXRhIiwiam9pbiIsImdldEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwibm9kZSIsImF0dHJpYnV0ZXMiLCJyZWR1Y2UiLCJjdXJyZW50QXR0cmlidXRlS2V5IiwiYXR0cmlidXRlIiwibmFtZSIsIm5vZGVWYWx1ZSIsImh0bWxQYXJzZXIiLCJpc0NvbnRhaW5lciIsImNoaWxkcmVuIiwibGVuZ3RoIiwidHlwZSIsImxvY2FsTmFtZSIsInZhbHVlIiwiY2hpbGROb2RlcyIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFLQyxFQUFFQyxJQUFGLEVBQUw7QUFBQSxDQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixRQUFTO0FBQ2xDLFNBQU9DLE1BQ0pDLE1BREksQ0FDRztBQUFBLFdBQUtKLEVBQUVLLFFBQUYsS0FBZUMsS0FBS0MsU0FBekI7QUFBQSxHQURILEVBRUpDLEdBRkksQ0FFQTtBQUFBLFdBQUtSLEVBQUVTLElBQUYsQ0FBT1IsSUFBUCxFQUFMO0FBQUEsR0FGQSxFQUdKUyxJQUhJLENBR0MsRUFIRCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLE9BQVE7QUFDNUIsU0FBT0MsT0FBT0MsSUFBUCxDQUFZQyxLQUFLQyxVQUFqQixFQUE2QkMsTUFBN0IsQ0FBb0MsVUFBQ0QsVUFBRCxFQUFhRSxtQkFBYixFQUFxQztBQUM5RSxRQUFNQyxZQUFZSixLQUFLQyxVQUFMLENBQWdCRSxtQkFBaEIsQ0FBbEI7O0FBRUFGLGVBQVdHLFVBQVVDLElBQXJCLElBQTZCRCxVQUFVRSxTQUF2Qzs7QUFFQSxXQUFPTCxVQUFQO0FBQ0QsR0FOTSxFQU1KLEVBTkksQ0FBUDtBQU9ELENBUkQ7O0FBVUEsSUFBTU0sYUFBYSxTQUFiQSxVQUFhLENBQUNsQixLQUFELEVBQTBCO0FBQzNDLFNBQU8sNkJBQUlBLEtBQUosR0FBV0ssR0FBWCxDQUFlLGdCQUFRO0FBQzVCLFFBQU1jLGNBQWNSLEtBQUtTLFFBQUwsQ0FBY0MsTUFBbEM7O0FBRUEsUUFBSUYsV0FBSixFQUFpQjtBQUNmLGFBQU87QUFDTEcsY0FBTVgsS0FBS1ksU0FETjtBQUVMQyxlQUFPekIsZ0RBQXVCWSxLQUFLYyxVQUE1QixHQUZGO0FBR0xiLG9CQUFZSixjQUFjRyxJQUFkLENBSFA7QUFJTFMsa0JBQVVGLFdBQVdQLEtBQUtTLFFBQWhCO0FBSkwsT0FBUDtBQU1EOztBQUVELFdBQU87QUFDTEUsWUFBTVgsS0FBS1ksU0FETjtBQUVMQyxhQUFPNUIsYUFBYWUsS0FBS2UsU0FBbEIsQ0FGRjtBQUdMZCxrQkFBWUosY0FBY0csSUFBZDtBQUhQLEtBQVA7QUFLRCxHQWpCTSxDQUFQO0FBa0JELENBbkJEOztrQkFxQmVPLFUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmNvbnN0IGdldE5vZGVWYWx1ZSA9IHggPT4geC50cmltKClcblxuY29uc3QgZ2V0VGV4dE9mVGV4dE5vZGVzID0gbm9kZXMgPT4ge1xuICByZXR1cm4gbm9kZXNcbiAgICAuZmlsdGVyKHggPT4geC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpXG4gICAgLm1hcCh4ID0+IHguZGF0YS50cmltKCkpXG4gICAgLmpvaW4oJycpXG59XG5cbmNvbnN0IGdldEF0dHJpYnV0ZXMgPSBub2RlID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGUuYXR0cmlidXRlcykucmVkdWNlKChhdHRyaWJ1dGVzLCBjdXJyZW50QXR0cmlidXRlS2V5KSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2N1cnJlbnRBdHRyaWJ1dGVLZXldXG5cbiAgICBhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWVcblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sIHt9KVxufVxuXG5jb25zdCBodG1sUGFyc2VyID0gKG5vZGVzOiBBcnJheTxPYmplY3Q+KSA9PiB7XG4gIHJldHVybiBbLi4ubm9kZXNdLm1hcChub2RlID0+IHtcbiAgICBjb25zdCBpc0NvbnRhaW5lciA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoXG5cbiAgICBpZiAoaXNDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IG5vZGUubG9jYWxOYW1lLFxuICAgICAgICB2YWx1ZTogZ2V0VGV4dE9mVGV4dE5vZGVzKFsuLi5ub2RlLmNoaWxkTm9kZXNdKSxcbiAgICAgICAgYXR0cmlidXRlczogZ2V0QXR0cmlidXRlcyhub2RlKSxcbiAgICAgICAgY2hpbGRyZW46IGh0bWxQYXJzZXIobm9kZS5jaGlsZHJlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogbm9kZS5sb2NhbE5hbWUsXG4gICAgICB2YWx1ZTogZ2V0Tm9kZVZhbHVlKG5vZGUuaW5uZXJIVE1MKSxcbiAgICAgIGF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXMobm9kZSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWxQYXJzZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHRtbFBhcnNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar jsonParser = function jsonParser(elements) {\n  return elements.map(function (e) {\n    var isContainer = e.hasOwnProperty('children');\n    var type = e.type,\n        _e$value = e.value,\n        value = _e$value === undefined ? '' : _e$value,\n        _e$attributes = e.attributes,\n        attributes = _e$attributes === undefined ? {} : _e$attributes;\n\n\n    if (isContainer) {\n      var children = jsonParser(e.children);\n\n      return htmlElement(type, value + children, attributes);\n    }\n\n    return htmlElement(type, value, attributes);\n  }).join('');\n};\n\nvar htmlElement = function htmlElement(type, content, attributes) {\n  var htmlAttributes = Object.keys(attributes).map(function (key) {\n    return ' ' + key + '=\"' + attributes[key] + '\"';\n  }).join('');\n\n  return '<' + type + htmlAttributes + '>' + content + '</' + type + '>';\n};\n\nexports.default = jsonParser;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanNvblBhcnNlci5qcz81NmNmIl0sIm5hbWVzIjpbImpzb25QYXJzZXIiLCJlbGVtZW50cyIsIm1hcCIsImlzQ29udGFpbmVyIiwiZSIsImhhc093blByb3BlcnR5IiwidHlwZSIsInZhbHVlIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiaHRtbEVsZW1lbnQiLCJqb2luIiwiY29udGVudCIsImh0bWxBdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFNBQU9BLFNBQVNDLEdBQVQsQ0FBYSxhQUFLO0FBQ3ZCLFFBQU1DLGNBQWNDLEVBQUVDLGNBQUYsQ0FBaUIsVUFBakIsQ0FBcEI7QUFEdUIsUUFFaEJDLElBRmdCLEdBRXFCRixDQUZyQixDQUVoQkUsSUFGZ0I7QUFBQSxtQkFFcUJGLENBRnJCLENBRVZHLEtBRlU7QUFBQSxRQUVWQSxLQUZVLDRCQUVGLEVBRkU7QUFBQSx3QkFFcUJILENBRnJCLENBRUVJLFVBRkY7QUFBQSxRQUVFQSxVQUZGLGlDQUVlLEVBRmY7OztBQUl2QixRQUFJTCxXQUFKLEVBQWlCO0FBQ2YsVUFBTU0sV0FBV1QsV0FBV0ksRUFBRUssUUFBYixDQUFqQjs7QUFFQSxhQUFPQyxZQUFZSixJQUFaLEVBQWtCQyxRQUFRRSxRQUExQixFQUFvQ0QsVUFBcEMsQ0FBUDtBQUNEOztBQUVELFdBQU9FLFlBQVlKLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFQO0FBQ0QsR0FYTSxFQVdKRyxJQVhJLENBV0MsRUFYRCxDQUFQO0FBWUQsQ0FiRDs7QUFlQSxJQUFNRCxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0osSUFBRCxFQUFPTSxPQUFQLEVBQWdCSixVQUFoQixFQUErQjtBQUNqRCxNQUFNSyxpQkFBaUJDLE9BQU9DLElBQVAsQ0FBWVAsVUFBWixFQUNwQk4sR0FEb0IsQ0FDaEI7QUFBQSxpQkFBV2MsR0FBWCxVQUFtQlIsV0FBV1EsR0FBWCxDQUFuQjtBQUFBLEdBRGdCLEVBRXBCTCxJQUZvQixDQUVmLEVBRmUsQ0FBdkI7O0FBSUEsZUFBV0wsSUFBWCxHQUFrQk8sY0FBbEIsU0FBb0NELE9BQXBDLFVBQWdETixJQUFoRDtBQUNELENBTkQ7O2tCQVFlTixVIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqc29uUGFyc2VyID0gKGVsZW1lbnRzKSA9PiB7XG4gIHJldHVybiBlbGVtZW50cy5tYXAoZSA9PiB7XG4gICAgY29uc3QgaXNDb250YWluZXIgPSBlLmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpXG4gICAgY29uc3Qge3R5cGUsIHZhbHVlID0gJycsIGF0dHJpYnV0ZXMgPSB7fX0gPSBlXG5cbiAgICBpZiAoaXNDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0ganNvblBhcnNlcihlLmNoaWxkcmVuKVxuXG4gICAgICByZXR1cm4gaHRtbEVsZW1lbnQodHlwZSwgdmFsdWUgKyBjaGlsZHJlbiwgYXR0cmlidXRlcylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbEVsZW1lbnQodHlwZSwgdmFsdWUsIGF0dHJpYnV0ZXMpXG4gIH0pLmpvaW4oJycpXG59XG5cbmNvbnN0IGh0bWxFbGVtZW50ID0gKHR5cGUsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgaHRtbEF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKVxuICAgIC5tYXAoa2V5ID0+IGAgJHtrZXl9PVwiJHthdHRyaWJ1dGVzW2tleV19XCJgKVxuICAgIC5qb2luKCcnKVxuXG4gIHJldHVybiBgPCR7dHlwZX0ke2h0bWxBdHRyaWJ1dGVzfT4ke2NvbnRlbnR9PC8ke3R5cGV9PmBcbn1cblxuZXhwb3J0IGRlZmF1bHQganNvblBhcnNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uUGFyc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")},,,function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _htmlParser = __webpack_require__(0);\n\nvar _htmlParser2 = _interopRequireDefault(_htmlParser);\n\nvar _jsonParser = __webpack_require__(1);\n\nvar _jsonParser2 = _interopRequireDefault(_jsonParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loadSampleButton = document.querySelector('.editor__actions--sample');\nvar translateJsonButton = document.querySelector('.editor__actions--sample');\n\nvar EDITOR_PANELS = {\n    JSON_PANEL: document.querySelector('.editor__input--json'),\n    HTML_PANEL: document.querySelector('.editor__input--html'),\n    PREVIEW_PANEL: document.querySelector('.editor__content--preview')\n};\n\ndocument.onkeydown = function (e) {\n    var target = e.target;\n\n\n    if (e.key === \"Tab\") {\n        var value = target.value,\n            selectionStart = target.selectionStart,\n            selectionEnd = target.selectionEnd;\n\n\n        target.value = value.substring(0, selectionEnd) + '\\t' + value.substring(selectionEnd);\n\n        target.selectionStart = target.selectionEnd = selectionStart + 1;\n\n        event.preventDefault();\n    }\n};\n\nEDITOR_PANELS.JSON_PANEL.oninput = function () {\n    setHtmlPanelContent((0, _jsonParser2.default)(getJsonPanelContent()));\n    setPreviewPanelContent(getHtmlPanelContent());\n};\n\nEDITOR_PANELS.HTML_PANEL.oninput = function () {\n    setPreviewPanelContent(getHtmlPanelContent());\n    setJsonPanelContent((0, _htmlParser2.default)(EDITOR_PANELS.PREVIEW_PANEL.children));\n};\n\nvar loadExampleData = function loadExampleData() {\n    var json = [{ type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [{ type: 'h1', value: 'test' }, { type: 'p', value: 'hello world', children: [{ type: 'h1', value: 'hello' }] }]\n    }];\n\n    setJsonPanelContent(json);\n\n    var html = (0, _jsonParser2.default)(json);\n\n    setHtmlPanelContent(html);\n    setPreviewPanelContent(html);\n};\n\nloadSampleButton.onclick = loadExampleData;\n\nvar getHtmlPanelContent = function getHtmlPanelContent() {\n    return EDITOR_PANELS.HTML_PANEL.value;\n};\n\nvar getJsonPanelContent = function getJsonPanelContent() {\n    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);\n};\n\nvar setJsonPanelContent = function setJsonPanelContent(json) {\n    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar setHtmlPanelContent = function setHtmlPanelContent(content) {\n    EDITOR_PANELS.HTML_PANEL.value = content;\n};\n\nvar setPreviewPanelContent = function setPreviewPanelContent(content) {\n    EDITOR_PANELS.PREVIEW_PANEL.innerHTML = content;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9wYXJzZXJzLmpzPzE2MGIiXSwibmFtZXMiOlsibG9hZFNhbXBsZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRyYW5zbGF0ZUpzb25CdXR0b24iLCJFRElUT1JfUEFORUxTIiwiSlNPTl9QQU5FTCIsIkhUTUxfUEFORUwiLCJQUkVWSUVXX1BBTkVMIiwib25rZXlkb3duIiwidGFyZ2V0IiwiZSIsImtleSIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzdWJzdHJpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25pbnB1dCIsInNldEh0bWxQYW5lbENvbnRlbnQiLCJnZXRKc29uUGFuZWxDb250ZW50Iiwic2V0UHJldmlld1BhbmVsQ29udGVudCIsImdldEh0bWxQYW5lbENvbnRlbnQiLCJzZXRKc29uUGFuZWxDb250ZW50IiwiY2hpbGRyZW4iLCJsb2FkRXhhbXBsZURhdGEiLCJqc29uIiwidHlwZSIsImF0dHJpYnV0ZXMiLCJoZWxsbyIsInNyYyIsImh0bWwiLCJvbmNsaWNrIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY29udGVudCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsc0JBQXNCRixTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUE1Qjs7QUFFQSxJQUFNRSxnQkFBZ0I7QUFDbEJDLGdCQUFZSixTQUFTQyxhQUFULENBQXVCLHNCQUF2QixDQURNO0FBRWxCSSxnQkFBWUwsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FGTTtBQUdsQkssbUJBQWVOLFNBQVNDLGFBQVQsQ0FBdUIsMkJBQXZCO0FBSEcsQ0FBdEI7O0FBT0FELFNBQVNPLFNBQVQsR0FBcUIsYUFBSztBQUFBLFFBQ2ZDLE1BRGUsR0FDTEMsQ0FESyxDQUNmRCxNQURlOzs7QUFHdEIsUUFBSUMsRUFBRUMsR0FBRixLQUFVLEtBQWQsRUFBcUI7QUFBQSxZQUNWQyxLQURVLEdBQzZCSCxNQUQ3QixDQUNWRyxLQURVO0FBQUEsWUFDSEMsY0FERyxHQUM2QkosTUFEN0IsQ0FDSEksY0FERztBQUFBLFlBQ2FDLFlBRGIsR0FDNkJMLE1BRDdCLENBQ2FLLFlBRGI7OztBQUdqQkwsZUFBT0csS0FBUCxHQUFlQSxNQUFNRyxTQUFOLENBQWdCLENBQWhCLEVBQW1CRCxZQUFuQixJQUFtQyxJQUFuQyxHQUEwQ0YsTUFBTUcsU0FBTixDQUFnQkQsWUFBaEIsQ0FBekQ7O0FBRUFMLGVBQU9JLGNBQVAsR0FBd0JKLE9BQU9LLFlBQVAsR0FBc0JELGlCQUFpQixDQUEvRDs7QUFFQUcsY0FBTUMsY0FBTjtBQUNIO0FBRUosQ0FiRDs7QUFlQWIsY0FBY0MsVUFBZCxDQUF5QmEsT0FBekIsR0FBbUMsWUFBTTtBQUNyQ0Msd0JBQW9CLDBCQUFXQyxxQkFBWCxDQUFwQjtBQUNBQywyQkFBdUJDLHFCQUF2QjtBQUNILENBSEQ7O0FBS0FsQixjQUFjRSxVQUFkLENBQXlCWSxPQUF6QixHQUFtQyxZQUFNO0FBQ3JDRywyQkFBdUJDLHFCQUF2QjtBQUNBQyx3QkFBb0IsMEJBQVduQixjQUFjRyxhQUFkLENBQTRCaUIsUUFBdkMsQ0FBcEI7QUFDSCxDQUhEOztBQUtBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixRQUFNQyxPQUFPLENBQ1QsRUFBQ0MsTUFBTSxLQUFQLEVBQWNmLE9BQU8sYUFBckIsRUFBb0NnQixZQUFZLEVBQUNDLE9BQU8sT0FBUixFQUFpQkMsS0FBSyxNQUF0QixFQUFoRCxFQUErRU4sVUFBVSxDQUNyRixFQUFDRyxNQUFNLElBQVAsRUFBYWYsT0FBTyxNQUFwQixFQURxRixFQUVyRixFQUFDZSxNQUFNLEdBQVAsRUFBWWYsT0FBTyxhQUFuQixFQUFrQ1ksVUFBVSxDQUFDLEVBQUNHLE1BQU0sSUFBUCxFQUFhZixPQUFPLE9BQXBCLEVBQUQsQ0FBNUMsRUFGcUY7QUFBekYsS0FEUyxDQUFiOztBQVFBVyx3QkFBb0JHLElBQXBCOztBQUVBLFFBQU1LLE9BQU8sMEJBQVdMLElBQVgsQ0FBYjs7QUFFQVAsd0JBQW9CWSxJQUFwQjtBQUNBViwyQkFBdUJVLElBQXZCO0FBQ0gsQ0FmRDs7QUFpQkEvQixpQkFBaUJnQyxPQUFqQixHQUEyQlAsZUFBM0I7O0FBSUEsSUFBTUgsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixXQUFPbEIsY0FBY0UsVUFBZCxDQUF5Qk0sS0FBaEM7QUFDSCxDQUZEOztBQUtBLElBQU1RLHNCQUFzQixTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsV0FBT2EsS0FBS0MsS0FBTCxDQUFXOUIsY0FBY0MsVUFBZCxDQUF5Qk8sS0FBcEMsQ0FBUDtBQUNILENBRkQ7O0FBSUEsSUFBTVcsc0JBQXNCLFNBQXRCQSxtQkFBc0IsT0FBUTtBQUNoQ25CLGtCQUFjQyxVQUFkLENBQXlCTyxLQUF6QixHQUFpQ3FCLEtBQUtFLFNBQUwsQ0FBZVQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFqQztBQUNILENBRkQ7O0FBSUEsSUFBTVAsc0JBQXNCLFNBQXRCQSxtQkFBc0IsVUFBVztBQUNuQ2Ysa0JBQWNFLFVBQWQsQ0FBeUJNLEtBQXpCLEdBQWlDd0IsT0FBakM7QUFDSCxDQUZEOztBQUlBLElBQU1mLHlCQUF5QixTQUF6QkEsc0JBQXlCLFVBQVc7QUFDdENqQixrQkFBY0csYUFBZCxDQUE0QjhCLFNBQTVCLEdBQXdDRCxPQUF4QztBQUNILENBRkQiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodG1sUGFyc2VyIGZyb20gJy4uL2h0bWxQYXJzZXInO1xuaW1wb3J0IGpzb25QYXJzZXIgZnJvbSAnLi4vanNvblBhcnNlcic7XG5cbmNvbnN0IGxvYWRTYW1wbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS1zYW1wbGUnKTtcbmNvbnN0IHRyYW5zbGF0ZUpzb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS1zYW1wbGUnKVxuXG5jb25zdCBFRElUT1JfUEFORUxTID0ge1xuICAgIEpTT05fUEFORUw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2lucHV0LS1qc29uJyksXG4gICAgSFRNTF9QQU5FTDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9faW5wdXQtLWh0bWwnKSxcbiAgICBQUkVWSUVXX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19jb250ZW50LS1wcmV2aWV3Jylcbn07XG5cblxuZG9jdW1lbnQub25rZXlkb3duID0gZSA9PiB7XG4gICAgY29uc3Qge3RhcmdldH0gPSBlO1xuXG4gICAgaWYgKGUua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZH0gPSB0YXJnZXQ7XG5cbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbkVuZCkgKyAnXFx0JyArIHZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb25FbmQpO1xuXG4gICAgICAgIHRhcmdldC5zZWxlY3Rpb25TdGFydCA9IHRhcmdldC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25TdGFydCArIDE7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbn07XG5cbkVESVRPUl9QQU5FTFMuSlNPTl9QQU5FTC5vbmlucHV0ID0gKCkgPT4ge1xuICAgIHNldEh0bWxQYW5lbENvbnRlbnQoanNvblBhcnNlcihnZXRKc29uUGFuZWxDb250ZW50KCkpKTtcbiAgICBzZXRQcmV2aWV3UGFuZWxDb250ZW50KGdldEh0bWxQYW5lbENvbnRlbnQoKSk7XG59O1xuXG5FRElUT1JfUEFORUxTLkhUTUxfUEFORUwub25pbnB1dCA9ICgpID0+IHtcbiAgICBzZXRQcmV2aWV3UGFuZWxDb250ZW50KGdldEh0bWxQYW5lbENvbnRlbnQoKSk7XG4gICAgc2V0SnNvblBhbmVsQ29udGVudChodG1sUGFyc2VyKEVESVRPUl9QQU5FTFMuUFJFVklFV19QQU5FTC5jaGlsZHJlbikpXG59O1xuXG5jb25zdCBsb2FkRXhhbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QganNvbiA9IFtcbiAgICAgICAge3R5cGU6ICdkaXYnLCB2YWx1ZTogJ0hlbGxvIFdvcmxkJywgYXR0cmlidXRlczoge2hlbGxvOiAnd29ybGQnLCBzcmM6ICd0ZXN0J30sIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dHlwZTogJ2gxJywgdmFsdWU6ICd0ZXN0J30sXG4gICAgICAgICAgICB7dHlwZTogJ3AnLCB2YWx1ZTogJ2hlbGxvIHdvcmxkJywgY2hpbGRyZW46IFt7dHlwZTogJ2gxJywgdmFsdWU6ICdoZWxsbyd9XX1dXG4gICAgICAgIH1cbiAgICBdO1xuXG5cbiAgICBzZXRKc29uUGFuZWxDb250ZW50KGpzb24pO1xuXG4gICAgY29uc3QgaHRtbCA9IGpzb25QYXJzZXIoanNvbik7XG5cbiAgICBzZXRIdG1sUGFuZWxDb250ZW50KGh0bWwpO1xuICAgIHNldFByZXZpZXdQYW5lbENvbnRlbnQoaHRtbCk7XG59O1xuXG5sb2FkU2FtcGxlQnV0dG9uLm9uY2xpY2sgPSBsb2FkRXhhbXBsZURhdGE7XG5cblxuXG5jb25zdCBnZXRIdG1sUGFuZWxDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBFRElUT1JfUEFORUxTLkhUTUxfUEFORUwudmFsdWU7XG59O1xuXG5cbmNvbnN0IGdldEpzb25QYW5lbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoRURJVE9SX1BBTkVMUy5KU09OX1BBTkVMLnZhbHVlKTtcbn07XG5cbmNvbnN0IHNldEpzb25QYW5lbENvbnRlbnQgPSBqc29uID0+IHtcbiAgICBFRElUT1JfUEFORUxTLkpTT05fUEFORUwudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcbn07XG5cbmNvbnN0IHNldEh0bWxQYW5lbENvbnRlbnQgPSBjb250ZW50ID0+IHtcbiAgICBFRElUT1JfUEFORUxTLkhUTUxfUEFORUwudmFsdWUgPSBjb250ZW50O1xufTtcblxuY29uc3Qgc2V0UHJldmlld1BhbmVsQ29udGVudCA9IGNvbnRlbnQgPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuUFJFVklFV19QQU5FTC5pbm5lckhUTUwgPSBjb250ZW50O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby9wYXJzZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")}]);