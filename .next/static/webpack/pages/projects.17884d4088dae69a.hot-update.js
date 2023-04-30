"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projects/project-item.tsx":
/*!**********************************************!*\
  !*** ./components/projects/project-item.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProjectItem(param) {\n    var data = param.data;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11;\n    var properties = data.properties, cover = data.cover;\n    var title = (ref1 = properties === null || properties === void 0 ? void 0 : (ref = properties.Name) === null || ref === void 0 ? void 0 : ref.title[0]) === null || ref1 === void 0 ? void 0 : ref1.plain_text;\n    var github = properties === null || properties === void 0 ? void 0 : (ref2 = properties.Github) === null || ref2 === void 0 ? void 0 : ref2.url;\n    var youtube = properties === null || properties === void 0 ? void 0 : (ref3 = properties.Youtube) === null || ref3 === void 0 ? void 0 : ref3.url;\n    var description = (ref5 = properties === null || properties === void 0 ? void 0 : (ref4 = properties.Description) === null || ref4 === void 0 ? void 0 : ref4.rich_text[0]) === null || ref5 === void 0 ? void 0 : ref5.plain_text;\n    var imgSrc = cover === null || cover === void 0 ? void 0 : (ref6 = cover.external) === null || ref6 === void 0 ? void 0 : ref6.url;\n    var tags = properties === null || properties === void 0 ? void 0 : (ref7 = properties.Tags) === null || ref7 === void 0 ? void 0 : ref7.multi_select;\n    var start1 = properties === null || properties === void 0 ? void 0 : (ref8 = properties.WorkPeriod) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.date) === null || ref9 === void 0 ? void 0 : ref9.start;\n    var end1 = properties === null || properties === void 0 ? void 0 : (ref10 = properties.WorkPeriod) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.date) === null || ref11 === void 0 ? void 0 : ref11.end;\n    var calculatedPeriod = function(start, end) {\n        var startDateStringArray = start === null || start === void 0 ? void 0 : start.split(\"-\");\n        var endDateStringArray = end === null || end === void 0 ? void 0 : end.split(\"-\");\n        var startDate = new Date(startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[0], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[1], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[2]);\n        var endDate = new Date(endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[0], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[1], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[2]);\n        var diffInMs = Math === null || Math === void 0 ? void 0 : Math.abs(endDate - startDate);\n        var result = diffInMs / (1000 * 60 * 60 * 24);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card\",\n        children: [\n            imgSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-t-xl\",\n                src: imgSrc,\n                alt: \"cover image\",\n                width: \"100%\",\n                height: \"50%\",\n                layout: \"responsive\",\n                objectFit: \"cover\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-4 text-xl\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: github,\n                        children: \"\\uAE43\\uD5C8\\uBE0C \\uBC14\\uB85C\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: youtube,\n                        children: \"\\uC720\\uD29C\\uBE0C \\uC2DC\\uC5F0\\uC601\\uC0C1 \\uBCF4\\uB7EC\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-1 \",\n                        children: [\n                            \"\\uC791\\uC5C5\\uAE30\\uAC04 : \",\n                            start1,\n                            \" ~ \",\n                            end1,\n                            \" (\",\n                            calculatedPeriod(start1, end1),\n                            \"\\uC77C)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start mt-2\",\n                        children: tags === null || tags === void 0 ? void 0 : tags.map(function(aTag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 custom-border\",\n                                children: aTag === null || aTag === void 0 ? void 0 : aTag.name\n                            }, aTag === null || aTag === void 0 ? void 0 : aTag.id, false, {\n                                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs0QkFBSTtrQ0FDSiw4REFBQ1ksS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHVCQUF1QjtrQ0FDbkNuQixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRWdDLEdBQUcsQ0FBQyxTQUFDQyxJQUFTOzBDQUNuQixxRUFBQ04sSUFBRTtnQ0FDRFIsU0FBUyxFQUFDLHlFQUF5RTswQ0FHbEZjLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFQyxJQUFJOytCQUZORCxJQUFJLGFBQUpBLElBQUksV0FBSSxHQUFSQSxLQUFBQSxDQUFRLEdBQVJBLElBQUksQ0FBRUUsRUFBRTs7OztxQ0FHVjt5QkFDTixDQUFDOzs7Ozs0QkFDRTs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0g7QUFwRWVwRCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdC1pdGVtLnRzeD80MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGF0YVR5cGUsIHRhZyB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SXRlbSh7IGRhdGEgfTogeyBkYXRhOiBkYXRhVHlwZSB9KSB7XG4gIGNvbnN0IHsgcHJvcGVydGllcywgY292ZXIgfSA9IGRhdGE7XG4gIGNvbnN0IHRpdGxlID0gcHJvcGVydGllcz8uTmFtZT8udGl0bGVbMF0/LnBsYWluX3RleHQ7XG4gIGNvbnN0IGdpdGh1YiA9IHByb3BlcnRpZXM/LkdpdGh1Yj8udXJsO1xuICBjb25zdCB5b3V0dWJlID0gcHJvcGVydGllcz8uWW91dHViZT8udXJsO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXM/LkRlc2NyaXB0aW9uPy5yaWNoX3RleHRbMF0/LnBsYWluX3RleHQ7XG4gIGNvbnN0IGltZ1NyYyA9IGNvdmVyPy5leHRlcm5hbD8udXJsO1xuICBjb25zdCB0YWdzID0gcHJvcGVydGllcz8uVGFncz8ubXVsdGlfc2VsZWN0O1xuICBjb25zdCBzdGFydCA9IHByb3BlcnRpZXM/LldvcmtQZXJpb2Q/LmRhdGU/LnN0YXJ0O1xuICBjb25zdCBlbmQgPSBwcm9wZXJ0aWVzPy5Xb3JrUGVyaW9kPy5kYXRlPy5lbmQ7XG5cbiAgY29uc3QgY2FsY3VsYXRlZFBlcmlvZCA9IChzdGFydDogYW55LCBlbmQ6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgY29uc3Qgc3RhcnREYXRlU3RyaW5nQXJyYXkgPSBzdGFydD8uc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGVuZERhdGVTdHJpbmdBcnJheSA9IGVuZD8uc3BsaXQoXCItXCIpO1xuXG4gICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhcnREYXRlU3RyaW5nQXJyYXk/LlswXSxcbiAgICAgIHN0YXJ0RGF0ZVN0cmluZ0FycmF5Py5bMV0sXG4gICAgICBzdGFydERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcbiAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgZW5kRGF0ZVN0cmluZ0FycmF5Py5bMF0sXG4gICAgICBlbmREYXRlU3RyaW5nQXJyYXk/LlsxXSxcbiAgICAgIGVuZERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcblxuICAgIGNvbnN0IGRpZmZJbk1zID0gTWF0aD8uYWJzKGVuZERhdGUgLSBzdGFydERhdGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRpZmZJbk1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICB7aW1nU3JjICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsXCJcbiAgICAgICAgICBzcmM9e2ltZ1NyY31cbiAgICAgICAgICBhbHQ9XCJjb3ZlciBpbWFnZVwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MCVcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTQgdGV4dC14bFwiPntkZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICA8YSBocmVmPXtnaXRodWJ9Puq5g+2XiOu4jCDrsJTroZzqsIDquLA8L2E+XG4gICAgICAgIDxhIGhyZWY9e3lvdXR1YmV9PuycoO2KnOu4jCDsi5zsl7DsmIHsg4Eg67O065+s6rCA6riwPC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIFwiPlxuICAgICAgICAgIOyekeyXheq4sOqwhCA6IHtzdGFydH0gfiB7ZW5kfSAoe2NhbGN1bGF0ZWRQZXJpb2Qoc3RhcnQsIGVuZCl97J28KVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBtdC0yXCI+XG4gICAgICAgICAge3RhZ3M/Lm1hcCgoYVRhZzogdGFnKSA9PiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIG1yLTIgcm91bmRlZC1tZCBiZy1za3ktMjAwIGRhcms6Ymctc2t5LTcwMCB3LTMwIGN1c3RvbS1ib3JkZXJcIlxuICAgICAgICAgICAgICBrZXk9e2FUYWc/LmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YVRhZz8ubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2plY3RJdGVtIiwiZGF0YSIsInByb3BlcnRpZXMiLCJjb3ZlciIsInRpdGxlIiwiTmFtZSIsInBsYWluX3RleHQiLCJnaXRodWIiLCJHaXRodWIiLCJ1cmwiLCJ5b3V0dWJlIiwiWW91dHViZSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJyaWNoX3RleHQiLCJpbWdTcmMiLCJleHRlcm5hbCIsInRhZ3MiLCJUYWdzIiwibXVsdGlfc2VsZWN0Iiwic3RhcnQiLCJXb3JrUGVyaW9kIiwiZGF0ZSIsImVuZCIsImNhbGN1bGF0ZWRQZXJpb2QiLCJzdGFydERhdGVTdHJpbmdBcnJheSIsInNwbGl0IiwiZW5kRGF0ZVN0cmluZ0FycmF5Iiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkaWZmSW5NcyIsIk1hdGgiLCJhYnMiLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIm9iamVjdEZpdCIsInF1YWxpdHkiLCJoMSIsImgzIiwiYSIsImhyZWYiLCJwIiwibWFwIiwiYVRhZyIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/project-item.tsx\n");

/***/ })

});