/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ \"./img/logo.png\");\n/* harmony import */ var _img_composition_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/composition.png */ \"./img/composition.png\");\n/* harmony import */ var _img_flower_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/flower.png */ \"./img/flower.png\");\n/* harmony import */ var _img_1service_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/1service.jpg */ \"./img/1service.jpg\");\n/* harmony import */ var _img_2service_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/2service.jpg */ \"./img/2service.jpg\");\n/* harmony import */ var _img_3service_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/3service.jpg */ \"./img/3service.jpg\");\n/* harmony import */ var _img_4service_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/4service.jpg */ \"./img/4service.jpg\");\n/* harmony import */ var _img_5service_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/5service.jpg */ \"./img/5service.jpg\");\n/* harmony import */ var _img_6service_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/6service.jpg */ \"./img/6service.jpg\");\n/* harmony import */ var _img_leafs_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/leafs.png */ \"./img/leafs.png\");\n/* harmony import */ var _img_women_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/women.png */ \"./img/women.png\");\n/* harmony import */ var _img_arrowDown_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/arrowDown.png */ \"./img/arrowDown.png\");\n/* harmony import */ var _img_insta_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/insta.png */ \"./img/insta.png\");\n/* harmony import */ var _img_facebook_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/facebook.png */ \"./img/facebook.png\");\n/* harmony import */ var _img_twitter_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/twitter.png */ \"./img/twitter.png\");\n/* harmony import */ var _img_pinterest_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/pinterest.png */ \"./img/pinterest.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//функция для выпадающих блоков\nconst accordionButton = document.querySelectorAll('.accordion');\nconst allAccordionBlock = document.querySelectorAll('.accordion-block');\nconst allAccordionArrow = document.querySelectorAll('.arrow');\naccordionButton.forEach(el => {\n  el.addEventListener('click', () => {\n    let accordionBlock = el.lastElementChild;\n    let accordionTitle = el.firstElementChild;\n    if (accordionBlock.style.display === \"block\") {\n      accordionBlock.style.display = \"none\";\n\n      //меняем цвет аккордеона при его закрытии\n      changeBackgroundForAllAccordions();\n      //меняем цвет стрелки при закрытии аккордеона\n      showStartArrowColor();\n    } else {\n      //скрываем все аккордеоны и показываем тот, который хотели открыть\n      closeAllAccordionBlocks();\n      accordionBlock.style.display = \"block\";\n      //меняем цвета у всех аккордеонов\n      changeBackgroundForAllAccordions();\n      //меняем цвета у всех стрелок\n      showStartArrowColor();\n      accordionTitle.lastElementChild.style.backgroundColor = \"#AEA1A1\";\n      accordionTitle.lastElementChild.style.color = \"#fff\";\n      accordionTitle.lastElementChild.style.transform = \"rotate(-90deg)\";\n      accordionBlock.closest(\"div[id]\").style.backgroundColor = \"#D6E7D2\";\n    }\n  });\n});\nfunction showStartArrowColor() {\n  allAccordionArrow.forEach(el => {\n    el.style.backgroundColor = \"#D9D9D9\";\n    el.style.color = \"#717171\";\n    el.style.transform = \"rotate(90deg)\";\n  });\n}\nfunction changeBackgroundForAllAccordions() {\n  allAccordionBlock.forEach(el => {\n    el.closest(\"div[id]\").style.backgroundColor = \"#EDF2EC\";\n  });\n}\nfunction closeAllAccordionBlocks() {\n  allAccordionBlock.forEach(el => {\n    el.style.display = \"none\";\n  });\n}\n\n//функция для выпадающего блока\nconst dropdownBtn = document.querySelector('.dropdown__btn');\nconst dropdownContent = document.querySelector('.dropdown__content');\nconst dropdownBtnArrow = document.querySelector('.dropdown__btn-arrow');\ndropdownBtn.addEventListener('click', function () {\n  if (dropdownContent.style.display === 'flex') {\n    dropdownContent.style.display = 'none';\n    dropdownBtn.style.backgroundColor = '#D6E7D2';\n    dropdownBtnArrow.style.transform = 'rotate(90deg)';\n    dropdownBtnArrow.style.backgroundColor = '#AEA1A1';\n  } else {\n    dropdownContent.style.display = 'flex';\n    dropdownBtn.style.backgroundColor = '#C1E698';\n    dropdownBtn.style.border = '.1rem solid #D6E7D2';\n    dropdownBtnArrow.style.transform = 'rotate(-90deg)';\n    dropdownBtnArrow.style.backgroundColor = '#8BA07E';\n  }\n});\n// const dropdownContentAll = document.querySelectorAll('.dropdown__content');\n// const dropdownBlockContainer = document.querySelectorAll('.dropdown-block-container');\n\n// dropdownContentAll.forEach((el) => el.addEventListener('click', function(){\n//     dropdownBlockContainer.forEach((block) => {\n//         const element = dropdownContentAll.indexOf(el);\n//         const dropBlock = dropdownBlockContainer.indexOf(block);\n//         if (element === dropBlock){\n//             console.log('1')\n//         }\n//     })\n// }));\n\n//бургер\nconst sidebar = document.querySelector('.sidebar');\nconst hamburger = document.querySelector('.hamburger');\nhamburger.addEventListener('click', () => {\n  if (sidebar.classList.contains('sidebar_active')) {\n    sidebar.classList.toggle('sidebar_active');\n  } else sidebar.classList.add('sidebar_active');\n});\n\n//# sourceURL=webpack://webpack/./main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.sass":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.sass ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, ::after, ::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  scroll-behavior: smooth;\\n}\\n@media only screen and (max-width: 1240px) {\\n  html {\\n    font-size: 56.25%;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  html {\\n    font-size: 35%;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  html {\\n    font-size: 25%;\\n  }\\n}\\n@media only screen and (min-width: 1800px) {\\n  html {\\n    font-size: 75%;\\n  }\\n}\\n\\nbody {\\n  background-color: #EDF2EC;\\n  font-family: \\\"Inter\\\", sans-serif;\\n}\\n\\n.container {\\n  position: relative;\\n  z-index: 0;\\n}\\n\\n.margin-top-button-5rem {\\n  margin: 5rem 0;\\n}\\n\\n.padding-11rem {\\n  padding: 0 11rem;\\n}\\n\\n.margin-top-90px {\\n  margin-top: 9rem;\\n}\\n\\n.second-title {\\n  font-family: \\\"Inika\\\", serif;\\n  font-weight: 400;\\n  font-size: 4rem;\\n  line-height: 5.1rem;\\n  color: #499A18;\\n}\\n\\n.fourth-title {\\n  font-weight: 700;\\n  font-size: 2rem;\\n  text-align: center;\\n  color: #E06733;\\n}\\n\\n.fifth-title {\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  letter-spacing: 0.05em;\\n  color: #000000;\\n}\\n\\n.btn, .btn:link, .btn:visited {\\n  display: inline-block;\\n  font-family: \\\"Inika\\\", serif;\\n  font-size: 2rem;\\n  border: 1px solid #E06733;\\n  text-decoration: none;\\n  color: #E06733;\\n  transition: all 0.5s;\\n  cursor: pointer;\\n  text-align: center;\\n  border-radius: 0.5rem;\\n}\\n.btn:hover {\\n  transform: translateY(-0.4rem);\\n}\\n.btn:active {\\n  transform: translateY(-0.2rem);\\n}\\n\\n.accordion-container {\\n  border: 0.1rem solid #E3E1D5;\\n  border-radius: 2rem;\\n  padding: 4.1rem 3.4rem;\\n  max-width: 33.2rem;\\n  transition: all 0.4s;\\n}\\n@media only screen and (max-width: 600px) {\\n  .accordion-container {\\n    margin: 0 auto;\\n    margin-bottom: 1.5rem;\\n  }\\n}\\n.accordion-container:hover {\\n  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.5);\\n}\\n\\n.accordion {\\n  width: 25rem;\\n  background-color: #EDF2EC;\\n  border-radius: 2rem;\\n  padding: 1.6rem 4.6rem 1.6rem 4rem;\\n  transition: all 0.5s;\\n  cursor: pointer;\\n}\\n.accordion:not(:last-child) {\\n  margin-bottom: 3.2rem;\\n}\\n.accordion:hover {\\n  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.3);\\n}\\n\\n.accordion-title {\\n  font-weight: 700;\\n  font-size: 2rem;\\n  color: #000000;\\n  border: none;\\n  background-color: rgba(0, 0, 0, 0);\\n}\\n\\n.title-container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.arrow {\\n  width: 1.6rem;\\n  height: 1.6rem;\\n  border-radius: 50%;\\n  background-color: #D9D9D9;\\n  color: #717171;\\n  align-self: center;\\n  transform: rotate(90deg);\\n  position: relative;\\n}\\n.arrow p {\\n  position: absolute;\\n  top: 0.1rem;\\n  right: 0.4rem;\\n}\\n\\n.accordion-block {\\n  display: none;\\n}\\n.accordion-block hr {\\n  margin-top: 1.1rem;\\n}\\n.accordion-block__text {\\n  font-weight: 300;\\n  font-size: 1rem;\\n  line-height: 1rem;\\n  color: #717171;\\n  margin: 0.6rem 0;\\n}\\n.accordion-block__price {\\n  font-weight: 400;\\n  font-size: 1.2rem;\\n  color: #000000;\\n  margin-bottom: 1.2rem;\\n}\\n.accordion-block__price span {\\n  font-weight: 700;\\n  color: #E06733;\\n}\\n.accordion-block__btn {\\n  font-weight: 700;\\n  font-size: 1.4rem;\\n  color: #717171;\\n  background: #FFFFFF;\\n  border-radius: 1rem;\\n  padding: 0.3rem 2rem;\\n  text-decoration: none;\\n}\\n\\n.service-list {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));\\n  grid-column-gap: 11.6rem;\\n  grid-row-gap: 5.5rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .service-list {\\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\\n  }\\n}\\n.service-list .service {\\n  justify-self: center;\\n  border: 0.1rem solid #E3E1D5;\\n  border-radius: 2rem;\\n  transition: all 0.4s;\\n  cursor: pointer;\\n}\\n.service-list .service:hover {\\n  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);\\n}\\n.service-list .service__img {\\n  border-radius: 2rem 2rem 0 0;\\n  margin-bottom: 1rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .service-list .service__img {\\n    width: 30rem;\\n  }\\n}\\n.service-list .service__title {\\n  margin-bottom: 1rem;\\n}\\n.service-list .service__text {\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  line-height: 2rem;\\n  color: #717171;\\n  text-align: center;\\n  margin-bottom: 3.6rem;\\n}\\n\\n.dropdown {\\n  grid-column: 3/4;\\n  grid-row: 1/4;\\n}\\n@media only screen and (max-width: 900px) {\\n  .dropdown {\\n    grid-row: 2/3;\\n    grid-column: 2/3;\\n    margin-bottom: 25rem;\\n  }\\n}\\n.dropdown__btn {\\n  border: none;\\n  background-color: #D6E7D2;\\n  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);\\n  font-size: 2rem;\\n  color: #717171;\\n  width: 100%;\\n  padding: 0.8rem 30rem 0.8rem 3.5rem;\\n  cursor: pointer;\\n  transition: all 0.4s;\\n  position: relative;\\n}\\n.dropdown__btn-arrow {\\n  position: absolute;\\n  top: 0.9rem;\\n  right: 3.5rem;\\n  background-color: #AEA1A1;\\n  color: #fff;\\n  font-size: 1.5rem;\\n}\\n.dropdown__content {\\n  display: none;\\n  background-color: #DCE9D9;\\n  padding: 3.1rem 3.5rem;\\n  flex-direction: column;\\n}\\n.dropdown__content-link, .dropdown__content-link:link, .dropdown__content-link:visited {\\n  text-decoration: none;\\n  font-size: 1.6rem;\\n  color: #499A18;\\n  transition: all 0.4s;\\n  cursor: pointer;\\n}\\n.dropdown__content-link:not(:last-child), .dropdown__content-link:link:not(:last-child), .dropdown__content-link:visited:not(:last-child) {\\n  margin-bottom: 1.2rem;\\n}\\n.dropdown__content-link:hover {\\n  color: #010201;\\n}\\n\\n.dropdown-block {\\n  display: none;\\n  grid-template-columns: repeat(2, 1fr);\\n  max-width: 45rem;\\n  background: #EDF2EC;\\n  border: 0.1rem solid #000;\\n  border-radius: 2rem;\\n  padding: 1.7rem 3.5rem 3.3rem 3.3rem;\\n  margin-top: 5rem;\\n}\\n.dropdown-block__title {\\n  margin-bottom: 0.5rem;\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  color: #000;\\n}\\n.dropdown-block__text {\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  color: #717171;\\n}\\n.dropdown-block__btn {\\n  grid-column: 1/3;\\n  justify-self: center;\\n  padding: 0.7rem 3rem;\\n  margin-top: 3rem;\\n}\\n.dropdown-block__btn, .dropdown-block__btn:link, .dropdown-block__btn:visited {\\n  font-weight: 700;\\n  font-size: 1rem;\\n  line-height: 1.3rem;\\n  text-align: center;\\n  color: #717171;\\n}\\n.dropdown-block__btn:hover {\\n  background-color: #E06733;\\n  color: #fff;\\n}\\n\\n.header {\\n  display: flex;\\n  height: 5rem;\\n  justify-content: space-between;\\n  font-family: \\\"Inika\\\", serif;\\n  align-items: center;\\n}\\n\\n.logo {\\n  align-self: start;\\n}\\n.logo__img {\\n  width: 1.9rem;\\n  height: 1.9rem;\\n}\\n.logo__text {\\n  display: inline-block;\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  color: #000;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  list-style-type: none;\\n}\\n.nav-list__item:not(:last-child) {\\n  margin-right: 4.4rem;\\n}\\n@media only screen and (max-width: 600px) {\\n  .nav-list {\\n    display: none;\\n  }\\n}\\n.nav-list__link {\\n  text-decoration: none;\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  color: #010201;\\n  transition: 0.3s;\\n  cursor: pointer;\\n}\\n.nav-list__link:hover {\\n  color: #E06733;\\n}\\n\\n.footer {\\n  padding-top: 4.1rem;\\n  padding-bottom: 4.1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #fff;\\n}\\n.footer__text {\\n  font-size: 2rem;\\n  color: #000;\\n}\\n.footer__link {\\n  text-decoration: none;\\n  color: #000;\\n}\\n@media only screen and (max-width: 600px) {\\n  .footer {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n\\n.footer-list {\\n  display: flex;\\n  list-style-type: none;\\n}\\n.footer-list__item:not(:last-child) {\\n  margin-right: 2rem;\\n}\\n\\n.sidebar {\\n  display: none;\\n  width: 5rem;\\n  height: 5rem;\\n}\\n.sidebar__nav {\\n  position: fixed;\\n  padding-top: 30%;\\n  right: 0;\\n  z-index: 20;\\n  height: 100%;\\n  width: 100%;\\n  background-color: #EDF2EC;\\n  transform: translateX(-100%);\\n  transition: all 0.4s;\\n}\\n.sidebar_active .hamburger {\\n  background-color: transparent;\\n}\\n.sidebar_active .hamburger::before {\\n  transform: rotate(45deg);\\n}\\n.sidebar_active .hamburger::after {\\n  transform: rotate(-45deg);\\n}\\n.sidebar_active .nav-list {\\n  display: flex;\\n  z-index: 30;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.sidebar_active .nav-list__link {\\n  font-weight: 400;\\n  font-size: 6rem;\\n}\\n.sidebar_active .nav-list__item:not(:last-child) {\\n  margin-bottom: 3rem;\\n}\\n.sidebar_active .sidebar__nav {\\n  transform: translateX(0%);\\n}\\n@media only screen and (max-width: 600px) {\\n  .sidebar {\\n    display: block;\\n  }\\n}\\n\\n.hamburger {\\n  height: 0.2rem;\\n  width: 4rem;\\n  background-color: #000;\\n  border: none;\\n  cursor: pointer;\\n  position: fixed;\\n  top: 6.5rem;\\n  right: 8rem;\\n  z-index: 30;\\n}\\n.hamburger::before, .hamburger::after {\\n  content: \\\"\\\";\\n  height: 0.2rem;\\n  width: 4rem;\\n  background-color: #000;\\n  display: block;\\n}\\n.hamburger::before {\\n  transform: translateY(1.1rem);\\n}\\n.hamburger::after {\\n  transform: translateY(-1.1rem);\\n}\\n\\n.first-section {\\n  margin-bottom: 10.8rem;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));\\n}\\n@media only screen and (max-width: 900px) {\\n  .first-section {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .first-section {\\n    grid-template-columns: none;\\n  }\\n}\\n\\n.grow {\\n  align-self: center;\\n}\\n.grow__title {\\n  font-weight: 700;\\n  font-size: 4.5rem;\\n  line-height: 5rem;\\n  color: #717171;\\n  margin-bottom: 4.2rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .grow__title {\\n    grid-column: 1/2;\\n  }\\n}\\n.grow__title span {\\n  color: #499A18;\\n}\\n.grow__text {\\n  font-weight: 400;\\n  font-size: 2rem;\\n  line-height: 3.5rem;\\n  color: #636060;\\n  margin-bottom: 4.8rem;\\n}\\n.grow__btn, .grow__btn:link, .grow__btn:visited {\\n  font-family: \\\"Inter\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 1.6rem;\\n  color: #000;\\n  text-transform: uppercase;\\n  padding: 1.2rem 2.5rem;\\n  border: 2px solid #e06733;\\n  border-radius: 1rem;\\n}\\n.grow__btn:hover {\\n  background-color: #e06733;\\n  color: #fff;\\n}\\n\\n.composition {\\n  filter: blur(0.2rem);\\n}\\n@media only screen and (max-width: 1240px) {\\n  .composition {\\n    width: 90%;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .composition {\\n    display: none;\\n  }\\n}\\n\\n.prof-gardens {\\n  padding: 8.2rem 11rem 10.5rem 11rem;\\n  background-color: #fff;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));\\n}\\n@media only screen and (max-width: 900px) {\\n  .prof-gardens {\\n    grid-template-columns: 100%;\\n    grid-template-rows: repeat(2, max-content);\\n    grid-row-gap: 4rem;\\n    justify-content: center;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .prof-gardens {\\n    grid-row-gap: 0;\\n  }\\n}\\n\\n.about {\\n  max-width: 60.5rem;\\n  align-self: center;\\n}\\n@media only screen and (max-width: 900px) {\\n  .about {\\n    max-width: 100%;\\n  }\\n}\\n.about__title {\\n  max-width: 46rem;\\n  margin-bottom: 4rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .about__title {\\n    text-align: center;\\n    margin: 0 auto;\\n    margin-bottom: 4rem;\\n  }\\n}\\n.about__title span {\\n  color: #E06733;\\n}\\n.about__text {\\n  font-weight: 400;\\n  font-size: 2rem;\\n  line-height: 3rem;\\n  color: #636060;\\n}\\n\\n.flower {\\n  justify-self: end;\\n}\\n@media only screen and (max-width: 1240px) {\\n  .flower {\\n    width: 90%;\\n    align-self: center;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .flower {\\n    width: 45%;\\n    justify-self: center;\\n  }\\n}\\n\\n.services {\\n  padding: 3.5rem 11.9rem;\\n}\\n\\n.services-header {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(31rem, max-content));\\n  grid-column-gap: 14rem;\\n  margin-bottom: 9.7rem;\\n}\\n@media only screen and (max-width: 1240px) {\\n  .services-header {\\n    grid-column-gap: 7rem;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .services-header {\\n    grid-template-columns: repeat(auto-fit, minmax(60rem, max-content));\\n    margin-bottom: 4rem;\\n  }\\n}\\n.services-header__title {\\n  max-width: 30.7rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .services-header__title {\\n    margin-bottom: 4rem;\\n  }\\n}\\n.services-header-list {\\n  align-self: center;\\n}\\n.services-header-list__btn, .services-header-list__btn:link, .services-header-list__btn:visited {\\n  width: 15rem;\\n  padding: 1.2rem 0;\\n}\\n.services-header-list__btn:not(:last-child), .services-header-list__btn:link:not(:last-child), .services-header-list__btn:visited:not(:last-child) {\\n  margin-right: 3.8rem;\\n}\\n@media only screen and (max-width: 1240px) {\\n  .services-header-list__btn, .services-header-list__btn:link, .services-header-list__btn:visited {\\n    width: 11rem;\\n  }\\n  .services-header-list__btn:not(:last-child), .services-header-list__btn:link:not(:last-child), .services-header-list__btn:visited:not(:last-child) {\\n    margin-right: 1.5rem;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .services-header-list__btn, .services-header-list__btn:link, .services-header-list__btn:visited {\\n    width: 15rem;\\n  }\\n  .services-header-list__btn:not(:last-child), .services-header-list__btn:link:not(:last-child), .services-header-list__btn:visited:not(:last-child) {\\n    margin-right: 3.8rem;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .services-header-list__btn, .services-header-list__btn:link, .services-header-list__btn:visited {\\n    width: 12.1rem;\\n  }\\n  .services-header-list__btn:not(:last-child), .services-header-list__btn:link:not(:last-child), .services-header-list__btn:visited:not(:last-child) {\\n    margin-right: 1.5rem;\\n  }\\n}\\n.services-header-list__btn:hover {\\n  background-color: #E06733;\\n  color: #fff;\\n}\\n\\n.prices {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));\\n  background-color: #fff;\\n  padding-top: 3.8rem;\\n  padding-bottom: 1.2rem;\\n}\\n@media only screen and (max-width: 600px) {\\n  .prices {\\n    justify-self: center;\\n  }\\n}\\n\\n.help {\\n  display: grid;\\n  justify-items: end;\\n}\\n.help__title {\\n  font-family: \\\"Inter\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 4rem;\\n  line-height: 5rem;\\n  color: #000;\\n  margin-bottom: 3.1rem;\\n  text-align: right;\\n  max-width: 45rem;\\n}\\n@media only screen and (max-width: 900px) {\\n  .help__title {\\n    text-align: center;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .help__title {\\n    justify-self: center;\\n  }\\n}\\n.help__title span {\\n  color: #499A18;\\n}\\n.help__btn, .help__btn:link, .help__btn:visited {\\n  padding: 1.2rem 0;\\n  width: 16.2rem;\\n  display: block;\\n  margin-bottom: 0.7rem;\\n}\\n@media only screen and (max-width: 600px) {\\n  .help__btn, .help__btn:link, .help__btn:visited {\\n    justify-self: center;\\n    align-self: center;\\n  }\\n}\\n.help__btn:hover {\\n  background-color: #E06733;\\n  color: #fff;\\n}\\n\\n.leafs {\\n  filter: blur(0.25rem);\\n}\\n@media only screen and (max-width: 900px) {\\n  .leafs {\\n    width: 53%;\\n    margin-top: 5.3rem;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .leafs {\\n    display: none;\\n  }\\n}\\n\\n.price__title {\\n  font-weight: 700;\\n  color: #000;\\n  font-family: \\\"Inter\\\", sans-serif;\\n  margin-bottom: 6rem;\\n}\\n@media only screen and (max-width: 600px) {\\n  .price__title {\\n    text-align: center;\\n  }\\n}\\n\\n.contacts {\\n  padding-top: 4.5rem;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n}\\n@media only screen and (max-width: 900px) {\\n  .contacts {\\n    grid-template-rows: repeat(4, max-content);\\n  }\\n}\\n.contacts__title {\\n  text-align: center;\\n  grid-column: 2/3;\\n}\\n@media only screen and (max-width: 1240px) {\\n  .contacts__title {\\n    grid-column: 3/4;\\n    grid-row: 1/2;\\n  }\\n}\\n@media only screen and (max-width: 900px) {\\n  .contacts__title {\\n    grid-row: 1/2;\\n    grid-column: 2/3;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .contacts__title {\\n    justify-self: center;\\n  }\\n}\\n\\n.women {\\n  grid-column: 1/2;\\n  grid-row: 1/2;\\n}\\n@media only screen and (max-width: 900px) {\\n  .women {\\n    width: 20rem;\\n    grid-row: 3/4;\\n    grid-column: 2/3;\\n    justify-self: center;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./sass/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./img/1service.jpg":
/*!**************************!*\
  !*** ./img/1service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/1service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/1service.jpg?");

/***/ }),

/***/ "./img/2service.jpg":
/*!**************************!*\
  !*** ./img/2service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/2service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/2service.jpg?");

/***/ }),

/***/ "./img/3service.jpg":
/*!**************************!*\
  !*** ./img/3service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/3service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/3service.jpg?");

/***/ }),

/***/ "./img/4service.jpg":
/*!**************************!*\
  !*** ./img/4service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/4service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/4service.jpg?");

/***/ }),

/***/ "./img/5service.jpg":
/*!**************************!*\
  !*** ./img/5service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/5service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/5service.jpg?");

/***/ }),

/***/ "./img/6service.jpg":
/*!**************************!*\
  !*** ./img/6service.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/6service.jpg\");\n\n//# sourceURL=webpack://webpack/./img/6service.jpg?");

/***/ }),

/***/ "./img/arrowDown.png":
/*!***************************!*\
  !*** ./img/arrowDown.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/arrowDown.png\");\n\n//# sourceURL=webpack://webpack/./img/arrowDown.png?");

/***/ }),

/***/ "./img/composition.png":
/*!*****************************!*\
  !*** ./img/composition.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/composition.png\");\n\n//# sourceURL=webpack://webpack/./img/composition.png?");

/***/ }),

/***/ "./img/facebook.png":
/*!**************************!*\
  !*** ./img/facebook.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/facebook.png\");\n\n//# sourceURL=webpack://webpack/./img/facebook.png?");

/***/ }),

/***/ "./img/flower.png":
/*!************************!*\
  !*** ./img/flower.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/flower.png\");\n\n//# sourceURL=webpack://webpack/./img/flower.png?");

/***/ }),

/***/ "./img/insta.png":
/*!***********************!*\
  !*** ./img/insta.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/insta.png\");\n\n//# sourceURL=webpack://webpack/./img/insta.png?");

/***/ }),

/***/ "./img/leafs.png":
/*!***********************!*\
  !*** ./img/leafs.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/leafs.png\");\n\n//# sourceURL=webpack://webpack/./img/leafs.png?");

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/logo.png\");\n\n//# sourceURL=webpack://webpack/./img/logo.png?");

/***/ }),

/***/ "./img/pinterest.png":
/*!***************************!*\
  !*** ./img/pinterest.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/pinterest.png\");\n\n//# sourceURL=webpack://webpack/./img/pinterest.png?");

/***/ }),

/***/ "./img/twitter.png":
/*!*************************!*\
  !*** ./img/twitter.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/twitter.png\");\n\n//# sourceURL=webpack://webpack/./img/twitter.png?");

/***/ }),

/***/ "./img/women.png":
/*!***********************!*\
  !*** ./img/women.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/women.png\");\n\n//# sourceURL=webpack://webpack/./img/women.png?");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./sass/style.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;