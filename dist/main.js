/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let content = document.querySelector('#content');
// create the child elements, then append them to the parent elements
const hero = () => {
    // Start with creating the links
    let createLink = (page) => {
        let a = document.createElement('a');
        a.innerText = page;
        a.setAttribute('href', '#');
        a.classList.add('links');
        return a;
    }
    // Then create the link container
    let createSubheader = () => {
        let pages = ['Home', 'Menu', 'About Us'];
        let div = document.createElement('div');
        div.classList.add('sub-header');
        for(let i = 0; i < pages.length; i++){
            let a = createLink(pages[i]);
            div.appendChild(a);
        }
        return div;
    }
    // The header is one the same level as the link container
    let createNavHeader = () => {
        let h1 = document.createElement('h1');
        h1.innerText = 'Korocafe';
        return h1;
    }
    // Create the nav element that houses the links and header
    let createNav = () => {
        let nav = document.createElement('nav');
        nav.appendChild(createNavHeader());
        nav.appendChild(createSubheader());
        return nav;
    }
    // The CTA (Call to Action) button is on the same level as the menu
    let createButton = () => {
        let button = document.createElement('button');
        button.innerText = 'Order Now';
        return button;
    }
    // The hero container, which houses everything we need for the hero section
    let createHero = () => {
        let div = document.createElement('div');
        div.classList.add('hero-container');
        div.appendChild(createNav());
        div.appendChild(createButton());
        content.appendChild(div);
    }
    createHero();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_hero_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;