/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

console.log('¯\\_(ツ)_/¯');

var wrapper = document.querySelector('.wrapper');
var hero = document.querySelector('.hero');
var cv = document.querySelector('.hero__resume');

var cvOffset = hero.offsetHeight - cv.offsetTop;

var handleScroll = function handleScroll(e) {
  var scrolled = hero.getBoundingClientRect().bottom - cvOffset;
};

window.addEventListener('scroll', handleScroll);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dots = document.querySelectorAll('.dot');
var mouth = document.querySelector('.mouth');

function smile(e) {
  mouth.classList.add('smile');
}

function unSmile(e) {
  mouth.classList.remove('smile');
}

function creep(e) {
  var _window = window,
      height = _window.innerHeight,
      width = _window.innerWidth;
  var x = e.screenX,
      y = e.screenY;

  var distX = Math.round(x / width * 100);
  var distY = Math.round(y / height * 100);
  distX = distX < 80 ? distX : 80;
  distY = distY < 80 ? distY : 80;

  dots.forEach(function (dot) {
    dot.style.marginTop = 'calc(10px + ' + distY / 2 + '%)';
    dot.style.marginLeft = 'calc(6px + ' + distX / 2 + '%)';
  });
}

window.addEventListener('mousemove', creep);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);