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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\nfunction ProjectItem(param) {\n    var data = param.data;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12;\n    var properties = data.properties, cover = data.cover;\n    console.log(\"tttssss\", data, typeof data === \"undefined\" ? \"undefined\" : _typeof(data));\n    var title = (ref1 = properties === null || properties === void 0 ? void 0 : (ref = properties.Name) === null || ref === void 0 ? void 0 : ref.title[0]) === null || ref1 === void 0 ? void 0 : ref1.plain_text;\n    var github = properties === null || properties === void 0 ? void 0 : (ref2 = properties.Github) === null || ref2 === void 0 ? void 0 : ref2.url;\n    var youtube = properties === null || properties === void 0 ? void 0 : (ref3 = properties.Youtube) === null || ref3 === void 0 ? void 0 : ref3.url;\n    var description = (ref5 = properties === null || properties === void 0 ? void 0 : (ref4 = properties.Description) === null || ref4 === void 0 ? void 0 : ref4.rich_text[0]) === null || ref5 === void 0 ? void 0 : ref5.plain_text;\n    var imgSrc = (cover === null || cover === void 0 ? void 0 : (ref6 = cover.file) === null || ref6 === void 0 ? void 0 : ref6.url) || (cover === null || cover === void 0 ? void 0 : (ref7 = cover.external) === null || ref7 === void 0 ? void 0 : ref7.url);\n    var tags = properties === null || properties === void 0 ? void 0 : (ref8 = properties.Tags) === null || ref8 === void 0 ? void 0 : ref8.multi_select;\n    var start1 = properties === null || properties === void 0 ? void 0 : (ref9 = properties.WorkPeriod) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.date) === null || ref10 === void 0 ? void 0 : ref10.start;\n    var end1 = properties === null || properties === void 0 ? void 0 : (ref11 = properties.WorkPeriod) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.date) === null || ref12 === void 0 ? void 0 : ref12.end;\n    var calculatedPeriod = function(start, end) {\n        var startDateStringArray = start === null || start === void 0 ? void 0 : start.split(\"-\").map(Number);\n        var endDateStringArray = end === null || end === void 0 ? void 0 : end.split(\"-\").map(Number);\n        var startDate = new Date(startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[0], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[1], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[2]);\n        var endDate = new Date(endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[0], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[1], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[2]);\n        var diffInMs = Math === null || Math === void 0 ? void 0 : Math.abs(endDate.getTime() - startDate.getTime());\n        var result = diffInMs / (1000 * 60 * 60 * 24);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card\",\n        children: [\n            imgSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-t-xl\",\n                src: imgSrc,\n                alt: \"cover image\",\n                width: \"100%\",\n                height: \"50%\",\n                layout: \"responsive\",\n                objectFit: \"cover\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-4 text-xl\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: github,\n                        children: \"\\uAE43\\uD5C8\\uBE0C \\uBC14\\uB85C\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: youtube,\n                        children: \"\\uC720\\uD29C\\uBE0C \\uC2DC\\uC5F0\\uC601\\uC0C1 \\uBCF4\\uB7EC\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-1 \",\n                        children: [\n                            \"\\uC791\\uC5C5\\uAE30\\uAC04 : \",\n                            start1,\n                            \" ~ \",\n                            end1,\n                            \" (\",\n                            calculatedPeriod(start1, end1),\n                            \"\\uC77C)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start mt-2\",\n                        children: tags === null || tags === void 0 ? void 0 : tags.map(function(aTag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 custom-border\",\n                                children: aTag === null || aTag === void 0 ? void 0 : aTag.name\n                            }, aTag === null || aTag === void 0 ? void 0 : aTag.id, false, {\n                                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUM2QyxJQUFFO3dCQUFDVCxTQUFTLEVBQUMsY0FBYztrQ0FBRTVCLFdBQVc7Ozs7OzRCQUFNO2tDQUMvQyw4REFBQ3NDLEdBQUM7d0JBQUNDLElBQUksRUFBRTVDLE1BQU07a0NBQUUsNkNBQVE7Ozs7OzRCQUFrQjtrQ0FDN0IsOERBQWIyQyxHQUFDO3dCQUFDQyxJQUFJLEVBQUV6QyxPQUFPO2tDQUFFLHNFQUFhOzs7Ozs0QkFBMEI7a0NBQ25DLDhEQUFyQjBDLEdBQUM7d0JBQUNaLFNBQVMsRUFBQyxPQUFPOzs0QkFBQyw2QkFDWjs0QkFBU25CLE1BQUs7NEJBQUMsS0FBRzs0QkFBQ0csSUFBRzs0QkFBQyxJQUFFOzRCQUFDQyxnQkFBZ0IsQ0FBQ0osTUFBSyxFQUFFRyxJQUFHLENBQUM7NEJBQUMsU0FDeEQ7Ozs7Ozs0QkFBSTtrQ0FDSiw4REFBQ2UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHVCQUF1QjtrQ0FDbkN0QixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRVUsR0FBRyxDQUFDeUIsU0FBQUEsSUFBSTswQ0FDYixxRUFBQ0wsSUFBRTtnQ0FDRFIsU0FBUyxFQUFDLHlFQUF5RTswQ0FHbEZhLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFQyxJQUFJOytCQUZORCxJQUFJLGFBQUpBLElBQUksV0FBSSxHQUFSQSxLQUFBQSxDQUFRLEdBQVJBLElBQUksQ0FBRUUsRUFBRTs7OztxQ0FHVjt5QkFDTixDQUFDOzs7Ozs0QkFDRTs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0g7QUF0RWV6RCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdC1pdGVtLnRzeD80MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBwcm9wZXJ0aWVzID0ge1xuICBEZXNjcmlwdGlvbjogeyBpZDogc3RyaW5nOyB0eXBlOiBzdHJpbmc7IHJpY2hfdGV4dDogW10gfTtcbiAgR2l0aHViOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgdXJsOiBudWxsIH07XG4gIE5hbWU6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyB0aXRsZTogdGl0bGVbXSB9O1xuICBUYWdzOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgbXVsdGlfc2VsZWN0OiBbXSB9O1xuICBXb3JrUGVyaW9kOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgZGF0ZTogZGF0ZSB9O1xuICBZb3V0dWJlOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgdXJsOiBudWxsIH07XG4gIHVybDogc3RyaW5nO1xufTtcbnR5cGUgdGl0bGUgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgdGV4dDogdGV4dFtdO1xuICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbnNbXTtcbiAgcGxhaW5fdGV4dDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59O1xudHlwZSB0ZXh0ID0ge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn07XG50eXBlIGFubm90YXRpb25zID0ge1xuICBib2xkOiBib29sZWFuO1xuICBjb2RlOiBib29sZWFuO1xuICBjb2xvcjogc3RyaW5nO1xuICBpdGFsaWM6IGJvb2xlYW47XG4gIHN0cmlrZXRocm91Z2g6IGJvb2xlYW47XG4gIHVuZGVybGluZTogYm9vbGVhbjtcbn07XG50eXBlIGRhdGFUeXBlID0ge1xuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzO1xuICBjb3ZlcjogY292ZXI7XG59O1xudHlwZSBjb3ZlciA9IHtcbiAgZXh0ZXJuYWw6IHsgdXJsOiBzdHJpbmcgfTtcbiAgdHlwZTogc3RyaW5nO1xufTtcbnR5cGUgZmlsZSA9IHtcbiAgZXh0ZXJuYWw6IHsgdXJsOiBzdHJpbmcgfTtcbiAgdHlwZTogc3RyaW5nO1xufTtcbnR5cGUgZGF0ZSA9IHtcbiAgZW5kOiBzdHJpbmc7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIHRpbWVfem9uZTogc3RyaW5nO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJdGVtKHsgZGF0YSB9OiB7IGRhdGE6IGRhdGFUeXBlIH0pIHtcbiAgY29uc3QgeyBwcm9wZXJ0aWVzLCBjb3ZlciB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coXCJ0dHRzc3NzXCIsIGRhdGEsIHR5cGVvZiBkYXRhKTtcblxuICBjb25zdCB0aXRsZSA9IHByb3BlcnRpZXM/Lk5hbWU/LnRpdGxlWzBdPy5wbGFpbl90ZXh0O1xuICBjb25zdCBnaXRodWIgPSBwcm9wZXJ0aWVzPy5HaXRodWI/LnVybDtcbiAgY29uc3QgeW91dHViZSA9IHByb3BlcnRpZXM/LllvdXR1YmU/LnVybDtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzPy5EZXNjcmlwdGlvbj8ucmljaF90ZXh0WzBdPy5wbGFpbl90ZXh0O1xuICBjb25zdCBpbWdTcmMgPSBjb3Zlcj8uZmlsZT8udXJsIHx8IGNvdmVyPy5leHRlcm5hbD8udXJsO1xuICBjb25zdCB0YWdzID0gcHJvcGVydGllcz8uVGFncz8ubXVsdGlfc2VsZWN0O1xuICBjb25zdCBzdGFydCA9IHByb3BlcnRpZXM/LldvcmtQZXJpb2Q/LmRhdGU/LnN0YXJ0O1xuICBjb25zdCBlbmQgPSBwcm9wZXJ0aWVzPy5Xb3JrUGVyaW9kPy5kYXRlPy5lbmQ7XG5cbiAgY29uc3QgY2FsY3VsYXRlZFBlcmlvZCA9IChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgY29uc3Qgc3RhcnREYXRlU3RyaW5nQXJyYXkgPSBzdGFydD8uc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuICAgIGNvbnN0IGVuZERhdGVTdHJpbmdBcnJheSA9IGVuZD8uc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuXG4gICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhcnREYXRlU3RyaW5nQXJyYXk/LlswXSxcbiAgICAgIHN0YXJ0RGF0ZVN0cmluZ0FycmF5Py5bMV0sXG4gICAgICBzdGFydERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcbiAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgZW5kRGF0ZVN0cmluZ0FycmF5Py5bMF0sXG4gICAgICBlbmREYXRlU3RyaW5nQXJyYXk/LlsxXSxcbiAgICAgIGVuZERhdGVTdHJpbmdBcnJheT8uWzJdXG4gICAgKTtcblxuICAgIGNvbnN0IGRpZmZJbk1zID0gTWF0aD8uYWJzKGVuZERhdGUuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgY29uc3QgcmVzdWx0ID0gZGlmZkluTXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgIHtpbWdTcmMgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXQteGxcIlxuICAgICAgICAgIHNyYz17aW1nU3JjfVxuICAgICAgICAgIGFsdD1cImNvdmVyIGltYWdlXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjUwJVwiXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsXCI+e2Rlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgIDxhIGhyZWY9e2dpdGh1Yn0+6rmD7ZeI67iMIOuwlOuhnOqwgOq4sDwvYT5cbiAgICAgICAgPGEgaHJlZj17eW91dHViZX0+7Jyg7Yqc67iMIOyLnOyXsOyYgeyDgSDrs7Trn6zqsIDquLA8L2E+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTEgXCI+XG4gICAgICAgICAg7J6R7JeF6riw6rCEIDoge3N0YXJ0fSB+IHtlbmR9ICh7Y2FsY3VsYXRlZFBlcmlvZChzdGFydCwgZW5kKX3snbwpXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IG10LTJcIj5cbiAgICAgICAgICB7dGFncz8ubWFwKGFUYWcgPT4gKFxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBtci0yIHJvdW5kZWQtbWQgYmctc2t5LTIwMCBkYXJrOmJnLXNreS03MDAgdy0zMCBjdXN0b20tYm9yZGVyXCJcbiAgICAgICAgICAgICAga2V5PXthVGFnPy5pZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FUYWc/Lm5hbWV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJwcm9wZXJ0aWVzIiwiY292ZXIiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJOYW1lIiwicGxhaW5fdGV4dCIsImdpdGh1YiIsIkdpdGh1YiIsInVybCIsInlvdXR1YmUiLCJZb3V0dWJlIiwiZGVzY3JpcHRpb24iLCJEZXNjcmlwdGlvbiIsInJpY2hfdGV4dCIsImltZ1NyYyIsImZpbGUiLCJleHRlcm5hbCIsInRhZ3MiLCJUYWdzIiwibXVsdGlfc2VsZWN0Iiwic3RhcnQiLCJXb3JrUGVyaW9kIiwiZGF0ZSIsImVuZCIsImNhbGN1bGF0ZWRQZXJpb2QiLCJzdGFydERhdGVTdHJpbmdBcnJheSIsInNwbGl0IiwibWFwIiwiTnVtYmVyIiwiZW5kRGF0ZVN0cmluZ0FycmF5Iiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJkaWZmSW5NcyIsIk1hdGgiLCJhYnMiLCJnZXRUaW1lIiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJxdWFsaXR5IiwiaDEiLCJoMyIsImEiLCJocmVmIiwicCIsImFUYWciLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/project-item.tsx\n");

/***/ })

});