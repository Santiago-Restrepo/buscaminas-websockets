/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CUsuario%5CDocuments%5Cuniversity%5Cdistribuida%5Cbuscaminas%5Cclient%5Cpages%5Cindex.tsx&page=%2F!":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CUsuario%5CDocuments%5Cuniversity%5Cdistribuida%5Cbuscaminas%5Cclient%5Cpages%5Cindex.tsx&page=%2F! ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNVc3VhcmlvJTVDRG9jdW1lbnRzJTVDdW5pdmVyc2l0eSU1Q2Rpc3RyaWJ1aWRhJTVDYnVzY2FtaW5hcyU1Q2NsaWVudCU1Q3BhZ2VzJTVDaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MjIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CUsuario%5CDocuments%5Cuniversity%5Cdistribuida%5Cbuscaminas%5Cclient%5Cpages%5Cindex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./components/Matrix/Matrix.tsx":
/*!**************************************!*\
  !*** ./components/Matrix/Matrix.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Matrix\": function() { return /* binding */ Matrix; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Matrix(param) {\n    let { rows =10 , cols =10 , mines =10  } = param;\n    _s();\n    const [minesPositions, setMinesPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userGame, setUserGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lose: false,\n        win: false,\n        cellsClicked: 0,\n        totalCells: rows * cols - mines\n    });\n    const initialMatrix = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const matrix = Array(rows).fill(null).map(()=>Array(cols).fill(null).map(()=>({\n                    value: 0,\n                    visible: false,\n                    x: 0,\n                    y: 0\n                })));\n        return matrix;\n    }, [\n        rows,\n        cols,\n        mines\n    ]);\n    const [matrix, setMatrix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialMatrix);\n    function generateRandomPosition(positionsArray) {\n        const x = Math.floor(Math.random() * rows);\n        const y = Math.floor(Math.random() * cols);\n        const position = [\n            x,\n            y\n        ];\n        if (positionsArray.some((param)=>{\n            let [x, y] = param;\n            return x === position[0] && y === position[1];\n        })) {\n            return generateRandomPosition(positionsArray);\n        }\n        return position;\n    }\n    function handleMineClicked() {\n        setUserGame({\n            ...userGame,\n            lose: true\n        });\n    }\n    function handleCellClicked(param) {\n        let { x , y  } = param;\n        setUserGame({\n            ...userGame,\n            cellsClicked: userGame.cellsClicked + 1\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const positions = [];\n        while(positions.length < mines){\n            positions.push(generateRandomPosition(positions));\n        }\n        setMinesPositions(positions);\n    }, [\n        rows,\n        cols,\n        mines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-medium text-gray-200 text-center\",\n                children: \"Buscaminas con websockets\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium text-red-500 text-center\",\n                children: (userGame === null || userGame === void 0 ? void 0 : userGame.lose) && \"You lose\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium text-green-600 text-center\",\n                role: \"counter\",\n                children: [\n                    \"Counter \",\n                    userGame.cellsClicked,\n                    \" / \",\n                    userGame.totalCells\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-10 gap-2 mx-auto my-4\",\n                children: matrix.map((row, i)=>row.map((cell, j)=>{\n                        const isMine = minesPositions.some((param)=>{\n                            let [x, y] = param;\n                            return x === i && y === j;\n                        });\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            role: \"button\",\n                            className: \"bg-gray-200 text-gray-800 font-bold py-2 px-4 w-[2.5rem] h-[2.5rem] rounded inline-flex items-center justify-center\",\n                            \"data-x\": i,\n                            \"data-y\": j,\n                            onClick: ()=>{\n                                const newMatrix = matrix.map((row)=>row.map((cell)=>({\n                                            ...cell\n                                        })));\n                                newMatrix[i][j].visible = true;\n                                isMine ? handleMineClicked() : handleCellClicked(newMatrix[i][j]);\n                                setMatrix(newMatrix);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: !cell.visible ? \"hidden\" : \"\",\n                                role: isMine ? \"mine\" : \"cell\",\n                                children: isMine ? \"\\uD83D\\uDCA3\" : \"1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 37\n                            }, this)\n                        }, \"\".concat(i, \"-\").concat(j), false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 33\n                        }, this);\n                    }))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\components\\\\Matrix\\\\Matrix.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(Matrix, \"v9OLjrITect1ctfm4Wb67cjRSAc=\");\n_c = Matrix;\nvar _c;\n$RefreshReg$(_c, \"Matrix\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBS0QsTUFBTXFCLEtBQUtwQixNQUFNc0I7d0JBQUFBO3dCQUNoRSxxQkFDSSw4REFBQ0U7NEJBRUdOLE1BQU07NEJBQ05ILFdBQVU7NEJBQ1ZVLFVBQVFMOzRCQUNSTSxVQUFRSjs0QkFDUkssU0FBUyxJQUFNO2dDQUNYLE1BQU1DLFlBQVluQyxPQUFPRyxHQUFHLENBQUMsQ0FBQ3VCLE1BQVFBLElBQUl2QixHQUFHLENBQUMsQ0FBQ3lCLE9BQVU7NENBQUMsR0FBR0EsSUFBSTt3Q0FBQTtnQ0FDakVPLFNBQVMsQ0FBQ1IsRUFBRSxDQUFDRSxFQUFFLENBQUN4QixPQUFPLEdBQUcsSUFBSTtnQ0FDOUJ5QixTQUFTZCxzQkFBc0JDLGtCQUFrQmtCLFNBQVMsQ0FBQ1IsRUFBRSxDQUFDRSxFQUFFLENBQUM7Z0NBQ2pFckIsVUFBVTJCOzRCQUNkO3NDQUVBLDRFQUFDQztnQ0FDR2QsV0FBVyxDQUFDTSxLQUFLdkIsT0FBTyxHQUFHLFdBQVcsRUFBRTtnQ0FDeENvQixNQUFNSyxTQUFTLFNBQVMsTUFBTTswQ0FFN0JBLFNBQVMsaUJBQU8sR0FBRzs7Ozs7OzJCQWhCbkIsR0FBUUQsT0FBTEYsR0FBRSxLQUFLLE9BQUZFOzs7OztvQkFvQnpCOzs7Ozs7Ozs7Ozs7QUFNeEIsQ0FBQztHQXJHZTFDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWF0cml4L01hdHJpeC50c3g/OTQ0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLzAgbWVhbnMgZW1wdHksIDEgbWVhbnMgbWluZVxyXG5pbXBvcnQge1xyXG4gICAgTWF0cml4UHJvcHMsXHJcbiAgICBDZWxsLFxyXG4gICAgdXNlckdhbWVcclxufSBmcm9tICcuL01hdHJpeFR5cGVzJztcclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJpeCh7XHJcbiAgICByb3dzID0gMTAsXHJcbiAgICBjb2xzID0gMTAsXHJcbiAgICBtaW5lcyA9IDEwXHJcbn06IE1hdHJpeFByb3BzKSB7XHJcbiAgICBjb25zdCBbbWluZXNQb3NpdGlvbnMsIHNldE1pbmVzUG9zaXRpb25zXSA9IHVzZVN0YXRlPG51bWJlcltdW10+KFtdKTtcclxuICAgIGNvbnN0IFt1c2VyR2FtZSwgc2V0VXNlckdhbWVdID0gdXNlU3RhdGU8dXNlckdhbWU+KHtcclxuICAgICAgICBsb3NlOiBmYWxzZSxcclxuICAgICAgICB3aW46IGZhbHNlLFxyXG4gICAgICAgIGNlbGxzQ2xpY2tlZDogMCxcclxuICAgICAgICB0b3RhbENlbGxzOiAocm93cyAqIGNvbHMpIC0gbWluZXNcclxuICAgIH0pXHJcbiAgICBjb25zdCBpbml0aWFsTWF0cml4OiBDZWxsW11bXSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeDogQ2VsbFtdW10gPSBBcnJheShyb3dzKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShjb2xzKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9LCBbcm93cywgY29scywgbWluZXNdKTtcclxuICAgIGNvbnN0IFttYXRyaXgsIHNldE1hdHJpeF0gPSB1c2VTdGF0ZTxDZWxsW11bXT4oaW5pdGlhbE1hdHJpeCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbihwb3NpdGlvbnNBcnJheTogbnVtYmVyW11bXSk6IG51bWJlcltde1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29scyk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBbeCwgeV07XHJcbiAgICAgICAgaWYocG9zaXRpb25zQXJyYXkuc29tZSgoW3gsIHldKSA9PiB4ID09PSBwb3NpdGlvblswXSAmJiB5ID09PSBwb3NpdGlvblsxXSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbihwb3NpdGlvbnNBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1pbmVDbGlja2VkKCl7XHJcbiAgICAgICAgc2V0VXNlckdhbWUoe1xyXG4gICAgICAgICAgICAuLi51c2VyR2FtZSxcclxuICAgICAgICAgICAgbG9zZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2tlZCh7XHJcbiAgICAgICAgeCxcclxuICAgICAgICB5XHJcbiAgICB9OiBDZWxsKXtcclxuICAgICAgICBzZXRVc2VyR2FtZSh7XHJcbiAgICAgICAgICAgIC4uLnVzZXJHYW1lLFxyXG4gICAgICAgICAgICBjZWxsc0NsaWNrZWQ6IHVzZXJHYW1lLmNlbGxzQ2xpY2tlZCArIDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9ucy5sZW5ndGggPCBtaW5lcykge1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKHBvc2l0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNaW5lc1Bvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgfSwgW3Jvd3MsIGNvbHMsIG1pbmVzXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS0yMDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEJ1c2NhbWluYXMgY29uIHdlYnNvY2tldHNcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAge3VzZXJHYW1lPy5sb3NlICYmIFwiWW91IGxvc2VcIn1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGgyIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JlZW4tNjAwIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgcm9sZT0nY291bnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ291bnRlciB7dXNlckdhbWUuY2VsbHNDbGlja2VkfSAvIHt1c2VyR2FtZS50b3RhbENlbGxzfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEwIGdhcC0yIG14LWF1dG8gbXktNFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cubWFwKChjZWxsLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc01pbmUgPSBtaW5lc1Bvc2l0aW9ucy5zb21lKChbeCwgeV0pID0+IHggPT09IGkgJiYgeSA9PT0gaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpfS0ke2p9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17J2J1dHRvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCB3LVsyLjVyZW1dIGgtWzIuNXJlbV0gcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEteT17an1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TWF0cml4ID0gbWF0cml4Lm1hcCgocm93KSA9PiByb3cubWFwKChjZWxsKSA9PiAoey4uLmNlbGx9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4W2ldW2pdLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNaW5lID8gaGFuZGxlTWluZUNsaWNrZWQoKSA6IGhhbmRsZUNlbGxDbGlja2VkKG5ld01hdHJpeFtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRyaXgobmV3TWF0cml4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXshY2VsbC52aXNpYmxlID8gJ2hpZGRlbicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e2lzTWluZSA/ICdtaW5lJyA6ICdjZWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTWluZSA/ICfwn5KjJyA6ICcxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUVmZmVjdCIsIk1hdHJpeCIsInJvd3MiLCJjb2xzIiwibWluZXMiLCJtaW5lc1Bvc2l0aW9ucyIsInNldE1pbmVzUG9zaXRpb25zIiwidXNlckdhbWUiLCJzZXRVc2VyR2FtZSIsImxvc2UiLCJ3aW4iLCJjZWxsc0NsaWNrZWQiLCJ0b3RhbENlbGxzIiwiaW5pdGlhbE1hdHJpeCIsIm1hdHJpeCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInZhbHVlIiwidmlzaWJsZSIsIngiLCJ5Iiwic2V0TWF0cml4IiwiZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbiIsInBvc2l0aW9uc0FycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicG9zaXRpb24iLCJzb21lIiwiaGFuZGxlTWluZUNsaWNrZWQiLCJoYW5kbGVDZWxsQ2xpY2tlZCIsInBvc2l0aW9ucyIsImxlbmd0aCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwicm9sZSIsInJvdyIsImkiLCJjZWxsIiwiaiIsImlzTWluZSIsImJ1dHRvbiIsImRhdGEteCIsImRhdGEteSIsIm9uQ2xpY2siLCJuZXdNYXRyaXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Matrix/Matrix.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Matrix/Matrix */ \"./components/Matrix/Matrix.tsx\");\n//Components\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix, {\n            rows: 10,\n            cols: 10,\n            mines: 10\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\pages\\\\index.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Documents\\\\university\\\\distribuida\\\\buscaminas\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFlBQVk7O0FBQ3VDO0FBQ3BDLFNBQVNDLE9BQU87SUFDN0IscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDRiw2REFBTUE7WUFBQ0csTUFBTTtZQUFJQyxNQUFNO1lBQUlDLE9BQU87Ozs7Ozs7Ozs7O0FBR3pDLENBQUM7S0FOdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSBcIkAvY29tcG9uZW50cy9NYXRyaXgvTWF0cml4XCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TWF0cml4IHJvd3M9ezEwfSBjb2xzPXsxMH0gbWluZXM9ezEwfS8+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiTWF0cml4IiwiSG9tZSIsIm1haW4iLCJyb3dzIiwiY29scyIsIm1pbmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CUsuario%5CDocuments%5Cuniversity%5Cdistribuida%5Cbuscaminas%5Cclient%5Cpages%5Cindex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);