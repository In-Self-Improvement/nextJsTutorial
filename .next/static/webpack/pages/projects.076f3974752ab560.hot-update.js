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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProjectItem(param) {\n    var data = param.data;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11;\n    var properties = data.properties, cover = data.cover;\n    var title = (ref1 = properties === null || properties === void 0 ? void 0 : (ref = properties.Name) === null || ref === void 0 ? void 0 : ref.title[0]) === null || ref1 === void 0 ? void 0 : ref1.plain_text;\n    var github = properties === null || properties === void 0 ? void 0 : (ref2 = properties.Github) === null || ref2 === void 0 ? void 0 : ref2.url;\n    var youtube = properties === null || properties === void 0 ? void 0 : (ref3 = properties.Youtube) === null || ref3 === void 0 ? void 0 : ref3.url;\n    var description = (ref5 = properties === null || properties === void 0 ? void 0 : (ref4 = properties.Description) === null || ref4 === void 0 ? void 0 : ref4.rich_text[0]) === null || ref5 === void 0 ? void 0 : ref5.plain_text;\n    var imgSrc = cover === null || cover === void 0 ? void 0 : (ref6 = cover.external) === null || ref6 === void 0 ? void 0 : ref6.url;\n    var tags = properties === null || properties === void 0 ? void 0 : (ref7 = properties.Tags) === null || ref7 === void 0 ? void 0 : ref7.multi_select;\n    var start1 = properties === null || properties === void 0 ? void 0 : (ref8 = properties.WorkPeriod) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.date) === null || ref9 === void 0 ? void 0 : ref9.start;\n    var end1 = properties === null || properties === void 0 ? void 0 : (ref10 = properties.WorkPeriod) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.date) === null || ref11 === void 0 ? void 0 : ref11.end;\n    var calculatedPeriod = function(start, end) {\n        var startDateStringArray = start === null || start === void 0 ? void 0 : start.split(\"-\").map(Number);\n        var endDateStringArray = end === null || end === void 0 ? void 0 : end.split(\"-\").map(Number);\n        var startDate = new Date(startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[0], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[1], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[2]);\n        var endDate = new Date(endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[0], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[1], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[2]);\n        var diffInMs = Math === null || Math === void 0 ? void 0 : Math.abs(endDate.getTime() - startDate.getTime());\n        var result = diffInMs / (1000 * 60 * 60 * 24);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card\",\n        children: [\n            imgSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-t-xl\",\n                src: imgSrc,\n                alt: \"cover image\",\n                width: \"100%\",\n                height: \"50%\",\n                layout: \"responsive\",\n                objectFit: \"cover\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-4 text-xl\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: github,\n                        children: \"\\uAE43\\uD5C8\\uBE0C \\uBC14\\uB85C\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: youtube,\n                        children: \"\\uC720\\uD29C\\uBE0C \\uC2DC\\uC5F0\\uC601\\uC0C1 \\uBCF4\\uB7EC\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-1 \",\n                        children: [\n                            \"\\uC791\\uC5C5\\uAE30\\uAC04 : \",\n                            start1,\n                            \" ~ \",\n                            end1,\n                            \" (\",\n                            calculatedPeriod(start1, end1),\n                            \"\\uC77C)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start mt-2\",\n                        children: tags === null || tags === void 0 ? void 0 : tags.map(function(aTag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 custom-border\",\n                                children: aTag === null || aTag === void 0 ? void 0 : aTag.name\n                            }, aTag === null || aTag === void 0 ? void 0 : aTag.id, false, {\n                                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUc7NEJBQUNHLElBQUc7NEJBQUMsSUFBRTs0QkFBQ0MsZ0JBQWdCLENBQUNKLE1BQUssRUFBRUcsSUFBRyxDQUFDOzRCQUFDLFNBQ3hEOzs7Ozs7NEJBQUk7a0NBQ0osOERBQUNlLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7a0NBQ25DdEIsSUFBSSxhQUFKQSxJQUFJLFdBQUssR0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxJQUFJLENBQUVVLEdBQUcsQ0FBQ3lCLFNBQUFBLElBQUk7MENBQ2IscUVBQUNMLElBQUU7Z0NBQ0RSLFNBQVMsRUFBQyx5RUFBeUU7MENBR2xGYSxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRUMsSUFBSTsrQkFGTkQsSUFBSSxhQUFKQSxJQUFJLFdBQUksR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxJQUFJLENBQUVFLEVBQUU7Ozs7cUNBR1Y7eUJBQ04sQ0FBQzs7Ozs7NEJBQ0U7Ozs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBcEVldEQsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3QtaXRlbS50c3g/NDMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRhdGFUeXBlIH0gZnJvbSBcIi4vZGF0YVR5cGVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJdGVtKHsgZGF0YSB9OiB7IGRhdGE6IGRhdGFUeXBlIH0pIHtcbiAgY29uc3QgeyBwcm9wZXJ0aWVzLCBjb3ZlciB9ID0gZGF0YTtcbiAgY29uc3QgdGl0bGUgPSBwcm9wZXJ0aWVzPy5OYW1lPy50aXRsZVswXT8ucGxhaW5fdGV4dDtcbiAgY29uc3QgZ2l0aHViID0gcHJvcGVydGllcz8uR2l0aHViPy51cmw7XG4gIGNvbnN0IHlvdXR1YmUgPSBwcm9wZXJ0aWVzPy5Zb3V0dWJlPy51cmw7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllcz8uRGVzY3JpcHRpb24/LnJpY2hfdGV4dFswXT8ucGxhaW5fdGV4dDtcbiAgY29uc3QgaW1nU3JjID0gY292ZXI/LmV4dGVybmFsPy51cmw7XG4gIGNvbnN0IHRhZ3MgPSBwcm9wZXJ0aWVzPy5UYWdzPy5tdWx0aV9zZWxlY3Q7XG4gIGNvbnN0IHN0YXJ0ID0gcHJvcGVydGllcz8uV29ya1BlcmlvZD8uZGF0ZT8uc3RhcnQ7XG4gIGNvbnN0IGVuZCA9IHByb3BlcnRpZXM/LldvcmtQZXJpb2Q/LmRhdGU/LmVuZDtcblxuICBjb25zdCBjYWxjdWxhdGVkUGVyaW9kID0gKHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCBzdGFydERhdGVTdHJpbmdBcnJheSA9IHN0YXJ0Py5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgY29uc3QgZW5kRGF0ZVN0cmluZ0FycmF5ID0gZW5kPy5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG5cbiAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoXG4gICAgICBzdGFydERhdGVTdHJpbmdBcnJheT8uWzBdLFxuICAgICAgc3RhcnREYXRlU3RyaW5nQXJyYXk/LlsxXSxcbiAgICAgIHN0YXJ0RGF0ZVN0cmluZ0FycmF5Py5bMl1cbiAgICApO1xuICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoXG4gICAgICBlbmREYXRlU3RyaW5nQXJyYXk/LlswXSxcbiAgICAgIGVuZERhdGVTdHJpbmdBcnJheT8uWzFdLFxuICAgICAgZW5kRGF0ZVN0cmluZ0FycmF5Py5bMl1cbiAgICApO1xuXG4gICAgY29uc3QgZGlmZkluTXMgPSBNYXRoPy5hYnMoZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpKTtcbiAgICBjb25zdCByZXN1bHQgPSBkaWZmSW5NcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAge2ltZ1NyYyAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bFwiXG4gICAgICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICAgICAgYWx0PVwiY292ZXIgaW1hZ2VcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiNTAlXCJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQteGxcIj57ZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgPGEgaHJlZj17Z2l0aHVifT7quYPtl4jruIwg67CU66Gc6rCA6riwPC9hPlxuICAgICAgICA8YSBocmVmPXt5b3V0dWJlfT7snKDtipzruIwg7Iuc7Jew7JiB7IOBIOuztOufrOqwgOq4sDwvYT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMSBcIj5cbiAgICAgICAgICDsnpHsl4XquLDqsIQgOiB7c3RhcnR9IH4ge2VuZH0gKHtjYWxjdWxhdGVkUGVyaW9kKHN0YXJ0LCBlbmQpfeydvClcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgbXQtMlwiPlxuICAgICAgICAgIHt0YWdzPy5tYXAoYVRhZyA9PiAoXG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIG1yLTIgcm91bmRlZC1tZCBiZy1za3ktMjAwIGRhcms6Ymctc2t5LTcwMCB3LTMwIGN1c3RvbS1ib3JkZXJcIlxuICAgICAgICAgICAgICBrZXk9e2FUYWc/LmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YVRhZz8ubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2plY3RJdGVtIiwiZGF0YSIsInByb3BlcnRpZXMiLCJjb3ZlciIsInRpdGxlIiwiTmFtZSIsInBsYWluX3RleHQiLCJnaXRodWIiLCJHaXRodWIiLCJ1cmwiLCJ5b3V0dWJlIiwiWW91dHViZSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJyaWNoX3RleHQiLCJpbWdTcmMiLCJleHRlcm5hbCIsInRhZ3MiLCJUYWdzIiwibXVsdGlfc2VsZWN0Iiwic3RhcnQiLCJXb3JrUGVyaW9kIiwiZGF0ZSIsImVuZCIsImNhbGN1bGF0ZWRQZXJpb2QiLCJzdGFydERhdGVTdHJpbmdBcnJheSIsInNwbGl0IiwibWFwIiwiTnVtYmVyIiwiZW5kRGF0ZVN0cmluZ0FycmF5Iiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkaWZmSW5NcyIsIk1hdGgiLCJhYnMiLCJnZXRUaW1lIiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJxdWFsaXR5IiwiaDEiLCJoMyIsImEiLCJocmVmIiwicCIsImFUYWciLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/project-item.tsx\n");

/***/ })

});