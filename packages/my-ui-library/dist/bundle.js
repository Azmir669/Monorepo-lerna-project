/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/my-ui-library.js":
/*!******************************!*\
  !*** ./lib/my-ui-library.js ***!
  \******************************/
/***/ (() => {

eval("// my-ui-library.js\n\n// Lifecycle events\nfunction onComponentMount() {\n  console.log('Component mounted');\n}\n\n// State\nlet state = {\n  count: 0\n};\n\n// Templating\nfunction renderUI() {\n  const countDisplay = document.getElementById('countDisplay');\n  countDisplay.innerText = state.count.toString();\n}\n\n// Update state and re-render UI\nfunction updateState(newState) {\n  state = { ...state, ...newState };\n  console.log('State changed:', state);\n  renderUI();\n}\n\n// Handle button click event\nfunction handleButtonClick() {\n  updateState({ count: state.count + 1 });\n}\n\n// Add event listener to button\ndocument.getElementById('incrementButton').addEventListener('click', handleButtonClick);\n\n// Lifecycle events\nwindow.onload = function () {\n  onComponentMount();\n  renderUI();\n};\n\n\n//# sourceURL=webpack:///./lib/my-ui-library.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/my-ui-library.js"]();
/******/ 	
/******/ })()
;