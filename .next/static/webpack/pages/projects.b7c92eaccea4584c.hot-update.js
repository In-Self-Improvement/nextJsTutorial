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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\nfunction ProjectItem(param) {\n    var data = param.data;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12;\n    var properties = data.properties, cover = data.cover;\n    console.log(\"tttssss\", data, typeof data === \"undefined\" ? \"undefined\" : _typeof(data));\n    var title = (ref1 = properties === null || properties === void 0 ? void 0 : (ref = properties.Name) === null || ref === void 0 ? void 0 : ref.title[0]) === null || ref1 === void 0 ? void 0 : ref1.plain_text;\n    var github = properties === null || properties === void 0 ? void 0 : (ref2 = properties.Github) === null || ref2 === void 0 ? void 0 : ref2.url;\n    var youtube = properties === null || properties === void 0 ? void 0 : (ref3 = properties.Youtube) === null || ref3 === void 0 ? void 0 : ref3.url;\n    var description = (ref5 = properties === null || properties === void 0 ? void 0 : (ref4 = properties.Description) === null || ref4 === void 0 ? void 0 : ref4.rich_text[0]) === null || ref5 === void 0 ? void 0 : ref5.plain_text;\n    var imgSrc = (cover === null || cover === void 0 ? void 0 : (ref6 = cover.file) === null || ref6 === void 0 ? void 0 : ref6.url) || (cover === null || cover === void 0 ? void 0 : (ref7 = cover.external) === null || ref7 === void 0 ? void 0 : ref7.url);\n    var tags = properties === null || properties === void 0 ? void 0 : (ref8 = properties.Tags) === null || ref8 === void 0 ? void 0 : ref8.multi_select;\n    var start1 = properties === null || properties === void 0 ? void 0 : (ref9 = properties.WorkPeriod) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.date) === null || ref10 === void 0 ? void 0 : ref10.start;\n    var end1 = properties === null || properties === void 0 ? void 0 : (ref11 = properties.WorkPeriod) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.date) === null || ref12 === void 0 ? void 0 : ref12.end;\n    var calculatedPeriod = function(start, end) {\n        var startDateStringArray = start === null || start === void 0 ? void 0 : start.split(\"-\").map(Number);\n        var endDateStringArray = end === null || end === void 0 ? void 0 : end.split(\"-\").map(Number);\n        var startDate = new Date(startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[0], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[1], startDateStringArray === null || startDateStringArray === void 0 ? void 0 : startDateStringArray[2]);\n        var endDate = new Date(endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[0], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[1], endDateStringArray === null || endDateStringArray === void 0 ? void 0 : endDateStringArray[2]);\n        var diffInMs = Math === null || Math === void 0 ? void 0 : Math.abs(endDate.getTime() - startDate.getTime());\n        var result = diffInMs / (1000 * 60 * 60 * 24);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card\",\n        children: [\n            imgSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-t-xl\",\n                src: imgSrc,\n                alt: \"cover image\",\n                width: \"100%\",\n                height: \"50%\",\n                layout: \"responsive\",\n                objectFit: \"cover\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-4 text-xl\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: github,\n                        children: \"\\uAE43\\uD5C8\\uBE0C \\uBC14\\uB85C\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: youtube,\n                        children: \"\\uC720\\uD29C\\uBE0C \\uC2DC\\uC5F0\\uC601\\uC0C1 \\uBCF4\\uB7EC\\uAC00\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-1 \",\n                        children: [\n                            \"\\uC791\\uC5C5\\uAE30\\uAC04 : \",\n                            start1,\n                            \" ~ \",\n                            end1,\n                            \" (\",\n                            calculatedPeriod(start1, end1),\n                            \"\\uC77C)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start mt-2\",\n                        children: tags === null || tags === void 0 ? void 0 : tags.map(function(aTag) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 custom-border\",\n                                children: aTag === null || aTag === void 0 ? void 0 : aTag.name\n                            }, aTag === null || aTag === void 0 ? void 0 : aTag.id, false, {\n                                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bong/github/nextProjects/next-portfolio/components/projects/project-item.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n};\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUM2QyxJQUFFO3dCQUFDVCxTQUFTLEVBQUMsY0FBYztrQ0FBRTVCLFdBQVc7Ozs7OzRCQUFNO2tDQUMvQyw4REFBQ3NDLEdBQUM7d0JBQUNDLElBQUksRUFBRTVDLE1BQU07a0NBQUUsNkNBQVE7Ozs7OzRCQUFrQjtrQ0FDN0IsOERBQWIyQyxHQUFDO3dCQUFDQyxJQUFJLEVBQUV6QyxPQUFPO2tDQUFFLHNFQUFhOzs7Ozs0QkFBMEI7a0NBQ25DLDhEQUFyQjBDLEdBQUM7d0JBQUNaLFNBQVMsRUFBQyxPQUFPOzs0QkFBQyw2QkFDWjs0QkFBU25CLE1BQUs7NEJBQUMsS0FBRzs0QkFBQ0csSUFBRzs0QkFBQyxJQUFFOzRCQUFDQyxnQkFBZ0IsQ0FBQ0osTUFBSyxFQUFFRyxJQUFHLENBQUM7NEJBQUMsU0FDeEQ7Ozs7Ozs0QkFBSTtrQ0FDSiw4REFBQ2UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHVCQUF1QjtrQ0FDbkN0QixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRVUsR0FBRyxDQUFDeUIsU0FBQUEsSUFBSTswQ0FDYixxRUFBQ0wsSUFBRTtnQ0FDRFIsU0FBUyxFQUFDLHlFQUF5RTswQ0FHbEZhLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFQyxJQUFJOytCQUZORCxJQUFJLGFBQUpBLElBQUksV0FBSSxHQUFSQSxLQUFBQSxDQUFRLEdBQVJBLElBQUksQ0FBRUUsRUFBRTs7OztxQ0FHVjt5QkFDTixDQUFDOzs7Ozs0QkFDRTs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0g7QUF0RWV6RCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdC1pdGVtLnRzeD80MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudHlwZSBwcm9wZXJ0aWVzID0ge1xuICBEZXNjcmlwdGlvbjogeyBpZDogc3RyaW5nOyB0eXBlOiBzdHJpbmc7IHJpY2hfdGV4dDogW10gfTtcbiAgR2l0aHViOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgdXJsOiBudWxsIH07XG4gIE5hbWU6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyB0aXRsZTogdGl0bGVbXSB9O1xuICBUYWdzOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgbXVsdGlfc2VsZWN0OiBbXSB9O1xuICBXb3JrUGVyaW9kOiB7IGlkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgZGF0ZTogZGF0ZVtdIH07XG4gIFlvdXR1YmU6IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nOyB1cmw6IG51bGwgfTtcbiAgdXJsOiBzdHJpbmc7XG59O1xudHlwZSB0aXRsZSA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICB0ZXh0OiB0ZXh0W107XG4gIGFubm90YXRpb25zOiBhbm5vdGF0aW9uc1tdO1xuICBwbGFpbl90ZXh0OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG50eXBlIHRleHQgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufTtcbnR5cGUgYW5ub3RhdGlvbnMgPSB7XG4gIGJvbGQ6IGJvb2xlYW47XG4gIGNvZGU6IGJvb2xlYW47XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGl0YWxpYzogYm9vbGVhbjtcbiAgc3RyaWtldGhyb3VnaDogYm9vbGVhbjtcbiAgdW5kZXJsaW5lOiBib29sZWFuO1xufTtcbnR5cGUgY292ZXIgPSB7XG4gIGV4dGVybmFsOiB7IHVybDogc3RyaW5nIH07XG4gIHR5cGU6IHN0cmluZztcbn07XG50eXBlIGRhdGFUeXBlID0ge1xuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzO1xuICBjb3ZlcjogY292ZXI7XG59O1xudHlwZSBmaWxlID0ge307XG50eXBlIGRhdGUgPSB7XG4gIGVuZDogRGF0ZVtdO1xuICBzdGFydDogRGF0ZVtdO1xuICB0aW1lX3pvbmU6IHN0cmluZztcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SXRlbSh7IGRhdGEgfTogeyBkYXRhOiBkYXRhVHlwZSB9KSB7XG4gIGNvbnN0IHsgcHJvcGVydGllcywgY292ZXIgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKFwidHR0c3Nzc1wiLCBkYXRhLCB0eXBlb2YgZGF0YSk7XG5cbiAgY29uc3QgdGl0bGUgPSBwcm9wZXJ0aWVzPy5OYW1lPy50aXRsZVswXT8ucGxhaW5fdGV4dDtcbiAgY29uc3QgZ2l0aHViID0gcHJvcGVydGllcz8uR2l0aHViPy51cmw7XG4gIGNvbnN0IHlvdXR1YmUgPSBwcm9wZXJ0aWVzPy5Zb3V0dWJlPy51cmw7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllcz8uRGVzY3JpcHRpb24/LnJpY2hfdGV4dFswXT8ucGxhaW5fdGV4dDtcbiAgY29uc3QgaW1nU3JjID0gY292ZXI/LmZpbGU/LnVybCB8fCBjb3Zlcj8uZXh0ZXJuYWw/LnVybDtcbiAgY29uc3QgdGFncyA9IHByb3BlcnRpZXM/LlRhZ3M/Lm11bHRpX3NlbGVjdDtcbiAgY29uc3Qgc3RhcnQgPSBwcm9wZXJ0aWVzPy5Xb3JrUGVyaW9kPy5kYXRlPy5zdGFydDtcbiAgY29uc3QgZW5kID0gcHJvcGVydGllcz8uV29ya1BlcmlvZD8uZGF0ZT8uZW5kO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZWRQZXJpb2QgPSAoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RGF0ZVN0cmluZ0FycmF5ID0gc3RhcnQ/LnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICBjb25zdCBlbmREYXRlU3RyaW5nQXJyYXkgPSBlbmQ/LnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcblxuICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShcbiAgICAgIHN0YXJ0RGF0ZVN0cmluZ0FycmF5Py5bMF0sXG4gICAgICBzdGFydERhdGVTdHJpbmdBcnJheT8uWzFdLFxuICAgICAgc3RhcnREYXRlU3RyaW5nQXJyYXk/LlsyXVxuICAgICk7XG4gICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgIGVuZERhdGVTdHJpbmdBcnJheT8uWzBdLFxuICAgICAgZW5kRGF0ZVN0cmluZ0FycmF5Py5bMV0sXG4gICAgICBlbmREYXRlU3RyaW5nQXJyYXk/LlsyXVxuICAgICk7XG5cbiAgICBjb25zdCBkaWZmSW5NcyA9IE1hdGg/LmFicyhlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRpZmZJbk1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICB7aW1nU3JjICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsXCJcbiAgICAgICAgICBzcmM9e2ltZ1NyY31cbiAgICAgICAgICBhbHQ9XCJjb3ZlciBpbWFnZVwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MCVcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTQgdGV4dC14bFwiPntkZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICA8YSBocmVmPXtnaXRodWJ9Puq5g+2XiOu4jCDrsJTroZzqsIDquLA8L2E+XG4gICAgICAgIDxhIGhyZWY9e3lvdXR1YmV9PuycoO2KnOu4jCDsi5zsl7DsmIHsg4Eg67O065+s6rCA6riwPC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIFwiPlxuICAgICAgICAgIOyekeyXheq4sOqwhCA6IHtzdGFydH0gfiB7ZW5kfSAoe2NhbGN1bGF0ZWRQZXJpb2Qoc3RhcnQsIGVuZCl97J28KVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBtdC0yXCI+XG4gICAgICAgICAge3RhZ3M/Lm1hcChhVGFnID0+IChcbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgbXItMiByb3VuZGVkLW1kIGJnLXNreS0yMDAgZGFyazpiZy1za3ktNzAwIHctMzAgY3VzdG9tLWJvcmRlclwiXG4gICAgICAgICAgICAgIGtleT17YVRhZz8uaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthVGFnPy5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiUHJvamVjdEl0ZW0iLCJkYXRhIiwicHJvcGVydGllcyIsImNvdmVyIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiTmFtZSIsInBsYWluX3RleHQiLCJnaXRodWIiLCJHaXRodWIiLCJ1cmwiLCJ5b3V0dWJlIiwiWW91dHViZSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJyaWNoX3RleHQiLCJpbWdTcmMiLCJmaWxlIiwiZXh0ZXJuYWwiLCJ0YWdzIiwiVGFncyIsIm11bHRpX3NlbGVjdCIsInN0YXJ0IiwiV29ya1BlcmlvZCIsImRhdGUiLCJlbmQiLCJjYWxjdWxhdGVkUGVyaW9kIiwic3RhcnREYXRlU3RyaW5nQXJyYXkiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsImVuZERhdGVTdHJpbmdBcnJheSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiZGlmZkluTXMiLCJNYXRoIiwiYWJzIiwiZ2V0VGltZSIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwicXVhbGl0eSIsImgxIiwiaDMiLCJhIiwiaHJlZiIsInAiLCJhVGFnIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/project-item.tsx\n");

/***/ })

});