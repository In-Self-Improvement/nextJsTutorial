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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProjectItem(param) {\n    var data = param.data;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11;\n    var properties = data.properties, cover = data.cover;\n    var title = (ref1 = properties === null || properties === void 0 ? void 0 : (ref = properties.Name) === null || ref === void 0 ? void 0 : ref.title[0]) === null || ref1 === void 0 ? void 0 : ref1.plain_text;\n    var github = properties === null || properties === void 0 ? void 0 : (ref2 = properties.Github) === null || ref2 === void 0 ? void 0 : ref2.url;\n    var youtube = properties === null || properties === void 0 ? void 0 : (ref3 = properties.Youtube) === null || ref3 === void 0 ? void 0 : ref3.url;\n    var description = (ref5 = properties === null || properties === void 0 ? void 0 : (ref4 = properties.Description) === null || ref4 === void 0 ? void 0 : ref4.rich_text[0]) === null || ref5 === void 0 ? void 0 : ref5.plain_text;\n    var imgSrc = cover === null || cover === void 0 ? void 0 : (ref6 = cover.external) === null || ref6 === void 0 ? void 0 : ref6.url;\n    var tags = properties === null || properties === void 0 ? void 0 : (ref7 = properties.Tags) === null || ref7 === void 0 ? void 0 : ref7.multi_select;\n    var start1 = properties === null || properties === void 0 ? void 0 : (ref8 = properties.WorkPeriod) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.date) === null || ref9 === void 0 ? void 0 : ref9.start;\n    var end1 = properties === null || properties === void 0 ? void 0 : (ref10 = properties.WorkPeriod) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.date) === null || ref11 === void 0 ? void 0 : ref11.end;\n    var calculatedPeriod = function(start, end) {\n        var startDateStringArray = start === null || start === void 0 ? void 0 : start.split(\"-\").map(Number);\n        var endDateStringArray = end === null || end === void 0 ? void 0 : end.split(\"-\").map(Number);\n        var startDate = new Date(startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[0], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[1], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[2]);\n        var endDate = new Date(endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[0], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[1], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[2]);\n        var diffInMs = Math === null || Math === void 0 ? void 0 : Math.abs(endDate.getTime() - startDate.getTime());\n        var result = diffInMs / (1000 * 60 * 60 * 24);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card\",\n        children: [\n            imgSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-t-xl\",\n                src: imgSrc,\n                alt: \"cover image\",\n                width: \"100%\",\n                height: \"50%\",\n                layout: \"responsive\",\n                objectFit: \"cover\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-4 text-xl\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: github,\n                        children: \"\\uAE43\\uD5C8\\uBE0C \\uBC14\\uB85C\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: youtube,\n                        children: \"\\uC720\\uD29C\\uBE0C \\uC2DC\\uC5F0\\uC601\\uC0C1 \\uBCF4\\uB7EC\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-1 \",\n                        children: [\n                            \"\\uC791\\uC5C5\\uAE30\\uAC04 : \",\n                            start1,\n                            \" ~ \",\n                            end1,\n                            \" (\",\n                            calculatedPeriod(start1, end1),\n                            \"\\uC77C)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start mt-2\",\n                        children: tags === null || tags === void 0 ? void 0 : tags.map(function(aTag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 custom-border\",\n                                children: aTag === null || aTag === void 0 ? void 0 : aTag.name\n                            }, aTag === null || aTag === void 0 ? void 0 : aTag.id, false, {\n                                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFHOzRCQUFDRyxJQUFHOzRCQUFDLElBQUU7NEJBQUNDLGdCQUFnQixDQUFDSixNQUFLLEVBQUVHLElBQUcsQ0FBQzs0QkFBQyxTQUN4RDs7Ozs7OzRCQUFJO2tDQUNKLDhEQUFDZSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsdUJBQXVCO2tDQUNuQ3RCLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFVSxHQUFHLENBQUN5QixTQUFBQSxJQUFJOzBDQUNiLHFFQUFDTCxJQUFFO2dDQUNEUixTQUFTLEVBQUMseUVBQXlFOzBDQUdsRmEsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVDLElBQUk7K0JBRk5ELElBQUksYUFBSkEsSUFBSSxXQUFJLEdBQVJBLEtBQUFBLENBQVEsR0FBUkEsSUFBSSxDQUFFRSxFQUFFOzs7O3FDQUdWO3lCQUNOLENBQUM7Ozs7OzRCQUNFOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ047Q0FDSDtBQXJFZXRELEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0LWl0ZW0udHN4PzQzM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG50eXBlIHByb3BlcnRpZXMgPSB7XG4gIERlc2NyaXB0aW9uOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgcmljaF90ZXh0OiByaWNoX3RleHRbXSB9O1xuICBHaXRodWI6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyB1cmw6IG51bGwgfTtcbiAgTmFtZTogeyBpZDogc3RyaW5nOyB0eXBlOiBzdHJpbmc7IHRpdGxlOiB0aXRsZVtdIH07XG4gIFRhZ3M6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBtdWx0aV9zZWxlY3Q6IFtdIH07XG4gIFdvcmtQZXJpb2Q6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBkYXRlOiBkYXRlIH07XG4gIFlvdXR1YmU6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyB1cmw6IG51bGwgfTtcbiAgdXJsOiBzdHJpbmc7XG59O1xudHlwZSB0aXRsZSA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICB0ZXh0OiB0ZXh0W107XG4gIGFubm90YXRpb25zOiBhbm5vdGF0aW9uO1xuICBwbGFpbl90ZXh0OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG50eXBlIHRleHQgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufTtcbnR5cGUgYW5ub3RhdGlvbiA9IHtcbiAgYm9sZDogYm9vbGVhbjtcbiAgY29kZTogYm9vbGVhbjtcbiAgY29sb3I6IHN0cmluZztcbiAgaXRhbGljOiBib29sZWFuO1xuICBzdHJpa2V0aHJvdWdoOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG59O1xudHlwZSBkYXRhVHlwZSA9IHtcbiAgcHJvcGVydGllczogcHJvcGVydGllcztcbiAgY292ZXI6IGNvdmVyO1xufTtcbnR5cGUgY292ZXIgPSB7XG4gIGV4dGVybmFsOiB7IHVybDogc3RyaW5nIH07XG4gIHR5cGU6IHN0cmluZztcbn07XG50eXBlIGZpbGUgPSB7XG4gIGV4dGVybmFsOiB7IHVybDogc3RyaW5nIH07XG4gIHR5cGU6IHN0cmluZztcbn07XG50eXBlIHJpY2hfdGV4dCA9IHtcbiAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zO1xuICBocmVmOiBzdHJpbmc7XG4gIHBsYWluX3RleHQ6IHN0cmluZztcbiAgdGV4dDogeyBjb250ZW50OiBzdHJpbmc7IGxpbms6IHN0cmluZyB9O1xuICB0eXBlOiBzdHJpbmc7XG59O1xudHlwZSBhbm5vdGF0aW9ucyA9IHtcbiAgYm9sZDogYm9vbGVhbjtcbiAgY29kZTogYm9vbGVhbjtcbiAgY29sb3I6IHN0cmluZztcbiAgaXRhbGljOiBib29sZWFuO1xuICBzdHJpa2V0aHJvdWdoOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG59O1xudHlwZSBkYXRlID0ge1xuICBlbmQ6IHN0cmluZztcbiAgc3RhcnQ6IHN0cmluZztcbiAgdGltZV96b25lOiBzdHJpbmc7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEl0ZW0oeyBkYXRhIH06IHsgZGF0YTogZGF0YVR5cGUgfSkge1xuICBjb25zdCB7IHByb3BlcnRpZXMsIGNvdmVyIH0gPSBkYXRhO1xuXG4gIGNvbnN0IHRpdGxlID0gcHJvcGVydGllcz8uTmFtZT8udGl0bGVbMF0/LnBsYWluX3RleHQ7XG4gIGNvbnN0IGdpdGh1YiA9IHByb3BlcnRpZXM/LkdpdGh1Yj8udXJsO1xuICBjb25zdCB5b3V0dWJlID0gcHJvcGVydGllcz8uWW91dHViZT8udXJsO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXM/LkRlc2NyaXB0aW9uPy5yaWNoX3RleHRbMF0/LnBsYWluX3RleHQ7XG4gIGNvbnN0IGltZ1NyYyA9IGNvdmVyPy5leHRlcm5hbD8udXJsO1xuICBjb25zdCB0YWdzID0gcHJvcGVydGllcz8uVGFncz8ubXVsdGlfc2VsZWN0O1xuICBjb25zdCBzdGFydCA9IHByb3BlcnRpZXM/LldvcmtQZXJpb2Q/LmRhdGU/LnN0YXJ0O1xuICBjb25zdCBlbmQgPSBwcm9wZXJ0aWVzPy5Xb3JrUGVyaW9kPy5kYXRlPy5lbmQ7XG5cbiAgY29uc3QgY2FsY3VsYXRlZFBlcmlvZCA9IChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qgc3RhcnREYXRlU3RyaW5nQXJyYXkgPSBzdGFydD8uc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuICAgIGNvbnN0IGVuZERhdGVTdHJpbmdBcnJheSA9IGVuZD8uc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuXG4gICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhcnREYXRlU3RyaW5nQXJyYXk/LlswXSxcbiAgICAgIHN0YXJ0RGF0ZVN0cmluZ0FycmF5Py5bMV0sXG4gICAgICBzdGFydERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcbiAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgZW5kRGF0ZVN0cmluZ0FycmF5Py5bMF0sXG4gICAgICBlbmREYXRlU3RyaW5nQXJyYXk/LlsxXSxcbiAgICAgIGVuZERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcblxuICAgIGNvbnN0IGRpZmZJbk1zID0gTWF0aD8uYWJzKGVuZERhdGUuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgY29uc3QgcmVzdWx0ID0gZGlmZkluTXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgIHtpbWdTcmMgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXQteGxcIlxuICAgICAgICAgIHNyYz17aW1nU3JjfVxuICAgICAgICAgIGFsdD1cImNvdmVyIGltYWdlXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjUwJVwiXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsXCI+e2Rlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgIDxhIGhyZWY9e2dpdGh1Yn0+6rmD7ZeI67iMIOuwlOuhnOqwgOq4sDwvYT5cbiAgICAgICAgPGEgaHJlZj17eW91dHViZX0+7Jyg7Yqc67iMIOyLnOyXsOyYgeyDgSDrs7Trn6zqsIDquLA8L2E+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTEgXCI+XG4gICAgICAgICAg7J6R7JeF6riw6rCEIDoge3N0YXJ0fSB+IHtlbmR9ICh7Y2FsY3VsYXRlZFBlcmlvZChzdGFydCwgZW5kKX3snbwpXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IG10LTJcIj5cbiAgICAgICAgICB7dGFncz8ubWFwKGFUYWcgPT4gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBtci0yIHJvdW5kZWQtbWQgYmctc2t5LTIwMCBkYXJrOmJnLXNreS03MDAgdy0zMCBjdXN0b20tYm9yZGVyXCJcbiAgICAgICAgICAgICAga2V5PXthVGFnPy5pZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FUYWc/Lm5hbWV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJwcm9wZXJ0aWVzIiwiY292ZXIiLCJ0aXRsZSIsIk5hbWUiLCJwbGFpbl90ZXh0IiwiZ2l0aHViIiwiR2l0aHViIiwidXJsIiwieW91dHViZSIsIllvdXR1YmUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwicmljaF90ZXh0IiwiaW1nU3JjIiwiZXh0ZXJuYWwiLCJ0YWdzIiwiVGFncyIsIm11bHRpX3NlbGVjdCIsInN0YXJ0IiwiV29ya1BlcmlvZCIsImRhdGUiLCJlbmQiLCJjYWxjdWxhdGVkUGVyaW9kIiwic3RhcnREYXRlU3RyaW5nQXJyYXkiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsImVuZERhdGVTdHJpbmdBcnJheSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiZGlmZkluTXMiLCJNYXRoIiwiYWJzIiwiZ2V0VGltZSIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwicXVhbGl0eSIsImgxIiwiaDMiLCJhIiwiaHJlZiIsInAiLCJhVGFnIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/project-item.tsx\n");

/***/ })

});