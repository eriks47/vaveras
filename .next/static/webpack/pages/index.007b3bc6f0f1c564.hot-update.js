"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/post/post.tsx":
/*!**********************************!*\
  !*** ./components/post/post.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.module.css */ \"./components/post/Post.module.css\");\n/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Post(params) {\n    const data = params.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"questions/\".concat(data.id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardPost),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.title\n                }, void 0, false, {\n                    fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: data.author\n                }, void 0, false, {\n                    fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.content\n                }, void 0, false, {\n                    fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Upvotes: \",\n                        data.upvote - data.downvote\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/erik/prog/web/vaveras/components/post/post.tsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QvcG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ1U7QUFXeEIsU0FBU0UsS0FBS0MsTUFBVyxFQUFFO0lBQ3hDLE1BQU1DLE9BQWlCRCxPQUFPQyxJQUFJO0lBQ2xDLHFCQUNJLDhEQUFDSixrREFBSUE7UUFBQ0ssTUFBTSxhQUFxQixPQUFSRCxLQUFLRSxFQUFFO2tCQUNsQyw0RUFBQ0M7WUFBSUMsV0FBV1Asa0VBQWU7OzhCQUMzQiw4REFBQ1M7OEJBQUlOLEtBQUtPLEtBQUs7Ozs7Ozs4QkFDZiw4REFBQ0M7OEJBQUlSLEtBQUtTLE1BQU07Ozs7Ozs4QkFDaEIsOERBQUNDOzhCQUFHVixLQUFLVyxPQUFPOzs7Ozs7OEJBQ2hCLDhEQUFDSDs7d0JBQUc7d0JBQVVSLEtBQUtZLE1BQU0sR0FBR1osS0FBS2EsUUFBUTs7Ozs7Ozs4QkFDekMsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztLQWJ1QmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdC9wb3N0LnRzeD83OTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUG9zdC5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBQb3N0RGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIGF1dGhvcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVwdm90ZTogbnVtYmVyO1xuICBkb3dudm90ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHBhcmFtczogYW55KSB7XG4gIGNvbnN0IGRhdGE6IFBvc3REYXRhID0gcGFyYW1zLmRhdGE7XG4gIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtgcXVlc3Rpb25zLyR7ZGF0YS5pZH1gfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRQb3N0fT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMj57ZGF0YS5hdXRob3J9PC9oMj5cbiAgICAgICAgPHA+e2RhdGEuY29udGVudH08L3A+XG4gICAgICAgIDxoMj5VcHZvdGVzOiB7ZGF0YS51cHZvdGUgLSBkYXRhLmRvd252b3RlfTwvaDI+XG4gICAgICAgIDxiciAvPlxuICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJQb3N0IiwicGFyYW1zIiwiZGF0YSIsImhyZWYiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmRQb3N0IiwiaDEiLCJ0aXRsZSIsImgyIiwiYXV0aG9yIiwicCIsImNvbnRlbnQiLCJ1cHZvdGUiLCJkb3dudm90ZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post/post.tsx\n"));

/***/ })

});