"use strict";
(self["webpackChunk_w_vision_pimcore_skeleton"] = self["webpackChunk_w_vision_pimcore_skeleton"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_src_js_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/util */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ "./assets/js/polyfills/index.js");
/* harmony import */ var _base_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/uikit */ "./assets/js/base/uikit.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _components_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/example */ "./assets/js/components/example.js");


 // Import base


 // Import components



const app = () => {
  // Make UIkit accessible via browser console
  __webpack_require__.g.UIkit = _base_uikit__WEBPACK_IMPORTED_MODULE_2__["default"]; // Register components

  _base_uikit__WEBPACK_IMPORTED_MODULE_2__["default"].component('example', _components_example__WEBPACK_IMPORTED_MODULE_4__["default"]);
}; // Load polyfills first, then start the application


uikit_src_js_util__WEBPACK_IMPORTED_MODULE_5__.Promise.all(_polyfills__WEBPACK_IMPORTED_MODULE_1__["default"]).then(app);

/***/ }),

/***/ "./assets/js/base/imports/components.js":
/*!**********************************************!*\
  !*** ./assets/js/base/imports/components.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Countdown": () => (/* reexport safe */ uikit_src_js_components_countdown__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Filter": () => (/* reexport safe */ uikit_src_js_components_filter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Lightbox": () => (/* reexport safe */ uikit_src_js_components_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "LightboxPanel": () => (/* reexport safe */ uikit_src_js_components_lightbox_panel__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Notification": () => (/* reexport safe */ uikit_src_js_components_notification__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Parallax": () => (/* reexport safe */ uikit_src_js_components_parallax__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Slider": () => (/* reexport safe */ uikit_src_js_components_slider__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "SliderParallax": () => (/* reexport safe */ uikit_src_js_components_slider_parallax__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Slideshow": () => (/* reexport safe */ uikit_src_js_components_slideshow__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "SlideshowParallax": () => (/* reexport safe */ uikit_src_js_components_slider_parallax__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Sortable": () => (/* reexport safe */ uikit_src_js_components_sortable__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Tooltip": () => (/* reexport safe */ uikit_src_js_components_tooltip__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Upload": () => (/* reexport safe */ uikit_src_js_components_upload__WEBPACK_IMPORTED_MODULE_11__["default"])
/* harmony export */ });
/* harmony import */ var uikit_src_js_components_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/src/js/components/countdown */ "./node_modules/uikit/src/js/components/countdown.js");
/* harmony import */ var uikit_src_js_components_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/src/js/components/filter */ "./node_modules/uikit/src/js/components/filter.js");
/* harmony import */ var uikit_src_js_components_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit/src/js/components/lightbox */ "./node_modules/uikit/src/js/components/lightbox.js");
/* harmony import */ var uikit_src_js_components_lightbox_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/src/js/components/lightbox-panel */ "./node_modules/uikit/src/js/components/lightbox-panel.js");
/* harmony import */ var uikit_src_js_components_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/src/js/components/notification */ "./node_modules/uikit/src/js/components/notification.js");
/* harmony import */ var uikit_src_js_components_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/components/parallax */ "./node_modules/uikit/src/js/components/parallax.js");
/* harmony import */ var uikit_src_js_components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uikit/src/js/components/slider */ "./node_modules/uikit/src/js/components/slider.js");
/* harmony import */ var uikit_src_js_components_slider_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uikit/src/js/components/slideshow-parallax */ "./node_modules/uikit/src/js/components/slider-parallax.js");
/* harmony import */ var uikit_src_js_components_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uikit/src/js/components/slideshow */ "./node_modules/uikit/src/js/components/slideshow.js");
/* harmony import */ var uikit_src_js_components_sortable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uikit/src/js/components/sortable */ "./node_modules/uikit/src/js/components/sortable.js");
/* harmony import */ var uikit_src_js_components_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uikit/src/js/components/tooltip */ "./node_modules/uikit/src/js/components/tooltip.js");
/* harmony import */ var uikit_src_js_components_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uikit/src/js/components/upload */ "./node_modules/uikit/src/js/components/upload.js");














/***/ }),

/***/ "./assets/js/base/imports/core.js":
/*!****************************************!*\
  !*** ./assets/js/base/imports/core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* reexport safe */ uikit_src_js_core_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Alert": () => (/* reexport safe */ uikit_src_js_core_alert__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Cover": () => (/* reexport safe */ uikit_src_js_core_cover__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Drop": () => (/* reexport safe */ uikit_src_js_core_drop__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Dropdown": () => (/* reexport safe */ uikit_src_js_core_drop__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "FormCustom": () => (/* reexport safe */ uikit_src_js_core_form_custom__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Gif": () => (/* reexport safe */ uikit_src_js_core_gif__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Grid": () => (/* reexport safe */ uikit_src_js_core_grid__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "HeightMatch": () => (/* reexport safe */ uikit_src_js_core_height_match__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "HeightViewport": () => (/* reexport safe */ uikit_src_js_core_height_viewport__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Icon": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Img": () => (/* reexport safe */ uikit_src_js_core_img__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Leader": () => (/* reexport safe */ uikit_src_js_core_leader__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Margin": () => (/* reexport safe */ uikit_src_js_core_margin__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Modal": () => (/* reexport safe */ uikit_src_js_core_modal__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "Nav": () => (/* reexport safe */ uikit_src_js_core_nav__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "Navbar": () => (/* reexport safe */ uikit_src_js_core_navbar__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "Offcanvas": () => (/* reexport safe */ uikit_src_js_core_offcanvas__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "OverflowAuto": () => (/* reexport safe */ uikit_src_js_core_overflow_auto__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "Responsive": () => (/* reexport safe */ uikit_src_js_core_responsive__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "Scroll": () => (/* reexport safe */ uikit_src_js_core_scroll__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "Scrollspy": () => (/* reexport safe */ uikit_src_js_core_scrollspy__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "ScrollspyNav": () => (/* reexport safe */ uikit_src_js_core_scrollspy_nav__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "Sticky": () => (/* reexport safe */ uikit_src_js_core_sticky__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "Svg": () => (/* reexport safe */ uikit_src_js_core_svg__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "Switcher": () => (/* reexport safe */ uikit_src_js_core_switcher__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "Tab": () => (/* reexport safe */ uikit_src_js_core_tab__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "Toggle": () => (/* reexport safe */ uikit_src_js_core_toggle__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "Video": () => (/* reexport safe */ uikit_src_js_core_video__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "Close": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.Close),
/* harmony export */   "Spinner": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.Spinner),
/* harmony export */   "SlidenavNext": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.Slidenav),
/* harmony export */   "SlidenavPrevious": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.Slidenav),
/* harmony export */   "SearchIcon": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.Search),
/* harmony export */   "Marker": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent),
/* harmony export */   "NavbarToggleIcon": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent),
/* harmony export */   "OverlayIcon": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent),
/* harmony export */   "PaginationNext": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent),
/* harmony export */   "PaginationPrevious": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent),
/* harmony export */   "Totop": () => (/* reexport safe */ uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__.IconComponent)
/* harmony export */ });
/* harmony import */ var uikit_src_js_core_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/src/js/core/accordion */ "./node_modules/uikit/src/js/core/accordion.js");
/* harmony import */ var uikit_src_js_core_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/src/js/core/alert */ "./node_modules/uikit/src/js/core/alert.js");
/* harmony import */ var uikit_src_js_core_cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit/src/js/core/cover */ "./node_modules/uikit/src/js/core/cover.js");
/* harmony import */ var uikit_src_js_core_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/src/js/core/drop */ "./node_modules/uikit/src/js/core/drop.js");
/* harmony import */ var uikit_src_js_core_form_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/src/js/core/form-custom */ "./node_modules/uikit/src/js/core/form-custom.js");
/* harmony import */ var uikit_src_js_core_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/core/gif */ "./node_modules/uikit/src/js/core/gif.js");
/* harmony import */ var uikit_src_js_core_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uikit/src/js/core/grid */ "./node_modules/uikit/src/js/core/grid.js");
/* harmony import */ var uikit_src_js_core_height_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uikit/src/js/core/height-match */ "./node_modules/uikit/src/js/core/height-match.js");
/* harmony import */ var uikit_src_js_core_height_viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uikit/src/js/core/height-viewport */ "./node_modules/uikit/src/js/core/height-viewport.js");
/* harmony import */ var uikit_src_js_core_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uikit/src/js/core/icon */ "./node_modules/uikit/src/js/core/icon.js");
/* harmony import */ var uikit_src_js_core_img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uikit/src/js/core/img */ "./node_modules/uikit/src/js/core/img.js");
/* harmony import */ var uikit_src_js_core_leader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uikit/src/js/core/leader */ "./node_modules/uikit/src/js/core/leader.js");
/* harmony import */ var uikit_src_js_core_margin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uikit/src/js/core/margin */ "./node_modules/uikit/src/js/core/margin.js");
/* harmony import */ var uikit_src_js_core_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uikit/src/js/core/modal */ "./node_modules/uikit/src/js/core/modal.js");
/* harmony import */ var uikit_src_js_core_nav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uikit/src/js/core/nav */ "./node_modules/uikit/src/js/core/nav.js");
/* harmony import */ var uikit_src_js_core_navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uikit/src/js/core/navbar */ "./node_modules/uikit/src/js/core/navbar.js");
/* harmony import */ var uikit_src_js_core_offcanvas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uikit/src/js/core/offcanvas */ "./node_modules/uikit/src/js/core/offcanvas.js");
/* harmony import */ var uikit_src_js_core_overflow_auto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! uikit/src/js/core/overflow-auto */ "./node_modules/uikit/src/js/core/overflow-auto.js");
/* harmony import */ var uikit_src_js_core_responsive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uikit/src/js/core/responsive */ "./node_modules/uikit/src/js/core/responsive.js");
/* harmony import */ var uikit_src_js_core_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! uikit/src/js/core/scroll */ "./node_modules/uikit/src/js/core/scroll.js");
/* harmony import */ var uikit_src_js_core_scrollspy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! uikit/src/js/core/scrollspy */ "./node_modules/uikit/src/js/core/scrollspy.js");
/* harmony import */ var uikit_src_js_core_scrollspy_nav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! uikit/src/js/core/scrollspy-nav */ "./node_modules/uikit/src/js/core/scrollspy-nav.js");
/* harmony import */ var uikit_src_js_core_sticky__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! uikit/src/js/core/sticky */ "./node_modules/uikit/src/js/core/sticky.js");
/* harmony import */ var uikit_src_js_core_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! uikit/src/js/core/svg */ "./node_modules/uikit/src/js/core/svg.js");
/* harmony import */ var uikit_src_js_core_switcher__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! uikit/src/js/core/switcher */ "./node_modules/uikit/src/js/core/switcher.js");
/* harmony import */ var uikit_src_js_core_tab__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! uikit/src/js/core/tab */ "./node_modules/uikit/src/js/core/tab.js");
/* harmony import */ var uikit_src_js_core_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! uikit/src/js/core/toggle */ "./node_modules/uikit/src/js/core/toggle.js");
/* harmony import */ var uikit_src_js_core_video__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! uikit/src/js/core/video */ "./node_modules/uikit/src/js/core/video.js");



























 // Icon components













/***/ }),

/***/ "./assets/js/base/uikit.js":
/*!*********************************!*\
  !*** ./assets/js/base/uikit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/src/js/api/index */ "./node_modules/uikit/src/js/api/index.js");
/* harmony import */ var uikit_src_js_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/core/core */ "./node_modules/uikit/src/js/core/core.js");
/* harmony import */ var uikit_src_js_api_boot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uikit/src/js/api/boot */ "./node_modules/uikit/src/js/api/boot.js");
/* harmony import */ var uikit_src_js_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/src/js/util */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit-icons */ "./node_modules/uikit/dist/js/uikit-icons.js");
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imports_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports/core */ "./assets/js/base/imports/core.js");
/* harmony import */ var _imports_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imports/components */ "./assets/js/base/imports/components.js");



 // Import Icons file

 // import Icons from 'uikit/dist/js/uikit-icons-custom';
// Import UIkit components


 // Register core components

(0,uikit_src_js_util__WEBPACK_IMPORTED_MODULE_3__.each)(_imports_core__WEBPACK_IMPORTED_MODULE_1__, (component, name) => uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"].component(name, component)); // Core functionality

uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"].use(uikit_src_js_core_core__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,uikit_src_js_api_boot__WEBPACK_IMPORTED_MODULE_6__["default"])(uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"]); // Set version

uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"].version = "3.10.1"; // Register components

(0,uikit_src_js_util__WEBPACK_IMPORTED_MODULE_3__.each)(_imports_components__WEBPACK_IMPORTED_MODULE_2__, (component, name) => uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"].component(name, component)); // Register icons

uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"].use((uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ __webpack_exports__["default"] = (uikit_src_js_api_index__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./assets/js/components/example.js":
/*!*****************************************!*\
  !*** ./assets/js/components/example.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_src_js_mixin_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit/src/js/mixin/class */ "./node_modules/uikit/src/js/mixin/class.js");
/* harmony import */ var _scss_components_example_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/components/example.scss */ "./assets/scss/components/example.scss");




function Line(opts, ctx, tick, baseRad, dieX, dieY) {
  this.opts = opts;
  this.ctx = ctx;
  this.tick = tick;
  this.baseRad = baseRad;
  this.dieX = dieX;
  this.dieY = dieY;
  this.reset();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [uikit_src_js_mixin_class__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: {
    w: window.innerWidth,
    h: window.innerHeight,
    tick: 0,
    lines: [],
    baseRad: Math.PI * (2 / 6),
    opts: {
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.05,
      spawnChance: 1,
      sparkChance: 0.1,
      sparkDist: 10,
      sparkSize: 2,
      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10,
      // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: window.innerWidth / 2,
      cy: window.innerHeight / 2,
      repaintAlpha: 0.04,
      hueChange: 0.1
    }
  },

  connected() {
    this.c = this.$el;
    this.ctx = this.c.getContext('2d');
    this.c.width = this.w;
    this.c.height = this.h;
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.dieX = this.w / 2 / this.opts.len;
    this.dieY = this.h / 2 / this.opts.len;
    this.loop();
    console.warn('⚠️ Don\'t forget to remove this component as it only serves as an example!');
  },

  events: [{
    name: 'resize',

    el() {
      return window;
    },

    handler() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.c.width = this.w;
      this.c.height = this.h;
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.opts.cx = this.w / 2;
      this.opts.cy = this.h / 2;
      this.dieX = this.w / 2 / this.opts.len;
      this.dieY = this.h / 2 / this.opts.len;
    }

  }],
  methods: {
    loop() {
      window.requestAnimationFrame(this.loop);
      this.tick += 1;
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', this.opts.repaintAlpha);
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.ctx.globalCompositeOperation = 'lighter';

      if (this.lines.length < this.opts.count && Math.random() < this.opts.spawnChance) {
        this.lines.push(new Line(this.opts, this.ctx, this.tick, this.baseRad, this.dieX, this.dieY));
      }

      this.lines.forEach(line => {
        line.step();
      });
    }

  }
});

Line.prototype.reset = function reset() {
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  this.rad = 0;
  this.lightInputMultiplier = this.opts.baseLightInputMultiplier + this.opts.addedLightInputMultiplier * Math.random();
  this.color = this.opts.color.replace('hue', this.tick * this.opts.hueChange);
  this.cumulativeTime = 0;
  this.beginPhase();
};

Line.prototype.beginPhase = function beginPhase() {
  this.x += this.addedX;
  this.y += this.addedY;
  this.time = 0;
  this.targetTime = this.opts.baseTime + this.opts.addedTime * Math.random() || 0;
  this.rad += this.baseRad * (Math.random() < 0.5 ? 1 : -1);
  this.addedX = Math.cos(this.rad);
  this.addedY = Math.sin(this.rad);

  if (Math.random() < this.opts.dieChance || this.x > this.dieX || this.x < -this.dieX || this.y > this.dieY || this.y < -this.dieY) {
    this.reset();
  }
};

Line.prototype.step = function step() {
  this.time += 1;
  this.cumulativeTime += 1;

  if (this.time >= this.targetTime) {
    this.beginPhase();
  }

  const prop = this.time / this.targetTime;
  const wave = Math.sin(prop * (Math.PI / 2));
  const x = this.addedX * wave;
  const y = this.addedY * wave;
  this.ctx.shadowBlur = prop * this.opts.shadowToTimePropMult;
  this.ctx.fillStyle = this.color.replace('light', this.opts.baseLight + this.opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
  this.ctx.shadowColor = this.ctx.fillStyle;
  this.ctx.fillRect(this.opts.cx + (this.x + x) * this.opts.len, this.opts.cy + (this.y + y) * this.opts.len, 2, 2);

  if (Math.random() < this.opts.sparkChance) {
    this.ctx.fillRect(this.opts.cx + (this.x + x) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - this.opts.sparkSize / 2, this.opts.cy + (this.y + y) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - this.opts.sparkSize / 2, this.opts.sparkSize, this.opts.sparkSize);
  }
};

/***/ }),

/***/ "./assets/js/polyfills/index.js":
/*!**************************************!*\
  !*** ./assets/js/polyfills/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/components/example.scss":
/*!*********************************************!*\
  !*** ./assets/scss/components/example.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_uikit_dist_js_uikit-icons_js-node_modules_uikit_src_js_api_boot_js-node_-8a3ba3"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3pCLElBQUwsQ0FBVXlCLFNBTFosRUFNRSxLQUFLekIsSUFBTCxDQUFVeUIsU0FOWjtBQVFEO0FBQ0YsQ0FqQ0Q7Ozs7Ozs7Ozs7O0FDckpBLCtEQUFlLEVBQWY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHctdmlzaW9uL3BpbWNvcmUtc2tlbGV0b24vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovL0B3LXZpc2lvbi9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL2Jhc2UvaW1wb3J0cy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL0B3LXZpc2lvbi9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL2Jhc2UvaW1wb3J0cy9jb3JlLmpzIiwid2VicGFjazovL0B3LXZpc2lvbi9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL2Jhc2UvdWlraXQuanMiLCJ3ZWJwYWNrOi8vQHctdmlzaW9uL3BpbWNvcmUtc2tlbGV0b24vLi9hc3NldHMvanMvY29tcG9uZW50cy9leGFtcGxlLmpzIiwid2VicGFjazovL0B3LXZpc2lvbi9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL3BvbHlmaWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ady12aXNpb24vcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2YyZDEiLCJ3ZWJwYWNrOi8vQHctdmlzaW9uL3BpbWNvcmUtc2tlbGV0b24vLi9hc3NldHMvc2Nzcy9jb21wb25lbnRzL2V4YW1wbGUuc2Nzcz82NDZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb21pc2UgfSBmcm9tICd1aWtpdC9zcmMvanMvdXRpbCc7XG5pbXBvcnQgcG9seWZpbGxzIGZyb20gJy4vcG9seWZpbGxzJztcblxuLy8gSW1wb3J0IGJhc2VcbmltcG9ydCBVSWtpdCBmcm9tICcuL2Jhc2UvdWlraXQnO1xuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLy8gSW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9leGFtcGxlJztcblxuY29uc3QgYXBwID0gKCkgPT4ge1xuICAvLyBNYWtlIFVJa2l0IGFjY2Vzc2libGUgdmlhIGJyb3dzZXIgY29uc29sZVxuICBnbG9iYWwuVUlraXQgPSBVSWtpdDtcblxuICAvLyBSZWdpc3RlciBjb21wb25lbnRzXG4gIFVJa2l0LmNvbXBvbmVudCgnZXhhbXBsZScsIEV4YW1wbGUpO1xufTtcblxuLy8gTG9hZCBwb2x5ZmlsbHMgZmlyc3QsIHRoZW4gc3RhcnQgdGhlIGFwcGxpY2F0aW9uXG5Qcm9taXNlLmFsbChwb2x5ZmlsbHMpLnRoZW4oYXBwKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ291bnRkb3duIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvbXBvbmVudHMvY291bnRkb3duJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsdGVyIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvbXBvbmVudHMvZmlsdGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlnaHRib3ggfSBmcm9tICd1aWtpdC9zcmMvanMvY29tcG9uZW50cy9saWdodGJveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpZ2h0Ym94UGFuZWwgfSBmcm9tICd1aWtpdC9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC1wYW5lbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGlmaWNhdGlvbiB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAndWlraXQvc3JjL2pzL2NvbXBvbmVudHMvcGFyYWxsYXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbGlkZXIgfSBmcm9tICd1aWtpdC9zcmMvanMvY29tcG9uZW50cy9zbGlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbGlkZXJQYXJhbGxheCB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb21wb25lbnRzL3NsaWRlci1wYXJhbGxheCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlc2hvdyB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb21wb25lbnRzL3NsaWRlc2hvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlc2hvd1BhcmFsbGF4IH0gZnJvbSAndWlraXQvc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzaG93LXBhcmFsbGF4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU29ydGFibGUgfSBmcm9tICd1aWtpdC9zcmMvanMvY29tcG9uZW50cy9zb3J0YWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2x0aXAgfSBmcm9tICd1aWtpdC9zcmMvanMvY29tcG9uZW50cy90b29sdGlwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXBsb2FkIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvbXBvbmVudHMvdXBsb2FkJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkaW9uIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvYWNjb3JkaW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9hbGVydCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdmVyIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvY292ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wLCBkZWZhdWx0IGFzIERyb3Bkb3duIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvZHJvcCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1DdXN0b20gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9mb3JtLWN1c3RvbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdpZiB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL2dpZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9ncmlkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVpZ2h0TWF0Y2ggfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9oZWlnaHQtbWF0Y2gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWlnaHRWaWV3cG9ydCB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL2hlaWdodC12aWV3cG9ydCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb24gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW1nIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvaW1nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhZGVyIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvbGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFyZ2luIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvbWFyZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9tb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdiB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL25hdic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL25hdmJhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9mZmNhbnZhcyB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL29mZmNhbnZhcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE92ZXJmbG93QXV0byB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL292ZXJmbG93LWF1dG8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNwb25zaXZlIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvcmVzcG9uc2l2ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjcm9sbCB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL3Njcm9sbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjcm9sbHNweSB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL3Njcm9sbHNweSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjcm9sbHNweU5hdiB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL3Njcm9sbHNweS1uYXYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGlja3kgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9zdGlja3knO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdmcgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9zdmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2l0Y2hlciB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL3N3aXRjaGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvdGFiJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9nZ2xlIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvdG9nZ2xlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmlkZW8gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS92aWRlbyc7XG5cbi8vIEljb24gY29tcG9uZW50c1xuZXhwb3J0IHsgQ2xvc2UgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IFNwaW5uZXIgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IFNsaWRlbmF2IGFzIFNsaWRlbmF2TmV4dCB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL2ljb24nO1xuZXhwb3J0IHsgU2xpZGVuYXYgYXMgU2xpZGVuYXZQcmV2aW91cyB9IGZyb20gJ3Vpa2l0L3NyYy9qcy9jb3JlL2ljb24nO1xuZXhwb3J0IHsgU2VhcmNoIGFzIFNlYXJjaEljb24gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgTWFya2VyIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvaWNvbic7XG5leHBvcnQgeyBJY29uQ29tcG9uZW50IGFzIE5hdmJhclRvZ2dsZUljb24gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgT3ZlcmxheUljb24gfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgUGFnaW5hdGlvbk5leHQgfSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9pY29uJztcbmV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgUGFnaW5hdGlvblByZXZpb3VzIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvaWNvbic7XG5leHBvcnQgeyBJY29uQ29tcG9uZW50IGFzIFRvdG9wIH0gZnJvbSAndWlraXQvc3JjL2pzL2NvcmUvaWNvbic7XG4iLCJpbXBvcnQgVUlraXQgZnJvbSAndWlraXQvc3JjL2pzL2FwaS9pbmRleCc7XG5pbXBvcnQgQ29yZSBmcm9tICd1aWtpdC9zcmMvanMvY29yZS9jb3JlJztcbmltcG9ydCBib290IGZyb20gJ3Vpa2l0L3NyYy9qcy9hcGkvYm9vdCc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAndWlraXQvc3JjL2pzL3V0aWwnO1xuXG4vLyBJbXBvcnQgSWNvbnMgZmlsZVxuaW1wb3J0IEljb25zIGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMnO1xuLy8gaW1wb3J0IEljb25zIGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMtY3VzdG9tJztcblxuLy8gSW1wb3J0IFVJa2l0IGNvbXBvbmVudHNcbmltcG9ydCAqIGFzIGNvcmVDb21wb25lbnRzIGZyb20gJy4vaW1wb3J0cy9jb3JlJztcbmltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9pbXBvcnRzL2NvbXBvbmVudHMnO1xuXG4vLyBSZWdpc3RlciBjb3JlIGNvbXBvbmVudHNcbmVhY2goY29yZUNvbXBvbmVudHMsIChjb21wb25lbnQsIG5hbWUpID0+IFVJa2l0LmNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpKTtcblxuLy8gQ29yZSBmdW5jdGlvbmFsaXR5XG5VSWtpdC51c2UoQ29yZSk7XG5ib290KFVJa2l0KTtcblxuLy8gU2V0IHZlcnNpb25cblVJa2l0LnZlcnNpb24gPSBWRVJTSU9OO1xuXG4vLyBSZWdpc3RlciBjb21wb25lbnRzXG5lYWNoKGNvbXBvbmVudHMsIChjb21wb25lbnQsIG5hbWUpID0+IFVJa2l0LmNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpKTtcblxuLy8gUmVnaXN0ZXIgaWNvbnNcblVJa2l0LnVzZShJY29ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJa2l0O1xuIiwiaW1wb3J0IENsYXNzIGZyb20gJ3Vpa2l0L3NyYy9qcy9taXhpbi9jbGFzcyc7XG5pbXBvcnQgJy4uLy4uL3Njc3MvY29tcG9uZW50cy9leGFtcGxlLnNjc3MnO1xuXG5mdW5jdGlvbiBMaW5lKG9wdHMsIGN0eCwgdGljaywgYmFzZVJhZCwgZGllWCwgZGllWSkge1xuICB0aGlzLm9wdHMgPSBvcHRzO1xuICB0aGlzLmN0eCA9IGN0eDtcbiAgdGhpcy50aWNrID0gdGljaztcbiAgdGhpcy5iYXNlUmFkID0gYmFzZVJhZDtcbiAgdGhpcy5kaWVYID0gZGllWDtcbiAgdGhpcy5kaWVZID0gZGllWTtcblxuICB0aGlzLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbQ2xhc3NdLFxuXG4gIGRhdGE6IHtcbiAgICB3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgdGljazogMCxcbiAgICBsaW5lczogW10sXG4gICAgYmFzZVJhZDogTWF0aC5QSSAqICgyIC8gNiksXG4gICAgb3B0czoge1xuICAgICAgbGVuOiAyMCxcbiAgICAgIGNvdW50OiA1MCxcbiAgICAgIGJhc2VUaW1lOiAxMCxcbiAgICAgIGFkZGVkVGltZTogMTAsXG4gICAgICBkaWVDaGFuY2U6IDAuMDUsXG4gICAgICBzcGF3bkNoYW5jZTogMSxcbiAgICAgIHNwYXJrQ2hhbmNlOiAwLjEsXG4gICAgICBzcGFya0Rpc3Q6IDEwLFxuICAgICAgc3BhcmtTaXplOiAyLFxuICAgICAgY29sb3I6ICdoc2woaHVlLDEwMCUsbGlnaHQlKScsXG4gICAgICBiYXNlTGlnaHQ6IDUwLFxuICAgICAgYWRkZWRMaWdodDogMTAsIC8vIFs1MC0xMCw1MCsxMF1cbiAgICAgIHNoYWRvd1RvVGltZVByb3BNdWx0OiA2LFxuICAgICAgYmFzZUxpZ2h0SW5wdXRNdWx0aXBsaWVyOiAwLjAxLFxuICAgICAgYWRkZWRMaWdodElucHV0TXVsdGlwbGllcjogMC4wMixcbiAgICAgIGN4OiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgICBjeTogd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgIHJlcGFpbnRBbHBoYTogMC4wNCxcbiAgICAgIGh1ZUNoYW5nZTogMC4xLFxuICAgIH0sXG4gIH0sXG5cbiAgY29ubmVjdGVkKCkge1xuICAgIHRoaXMuYyA9IHRoaXMuJGVsO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLmMud2lkdGggPSB0aGlzLnc7XG4gICAgdGhpcy5jLmhlaWdodCA9IHRoaXMuaDtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgdGhpcy5kaWVYID0gdGhpcy53IC8gMiAvIHRoaXMub3B0cy5sZW47XG4gICAgdGhpcy5kaWVZID0gdGhpcy5oIC8gMiAvIHRoaXMub3B0cy5sZW47XG5cbiAgICB0aGlzLmxvb3AoKTtcblxuICAgIGNvbnNvbGUud2Fybign4pqg77iPIERvblxcJ3QgZm9yZ2V0IHRvIHJlbW92ZSB0aGlzIGNvbXBvbmVudCBhcyBpdCBvbmx5IHNlcnZlcyBhcyBhbiBleGFtcGxlIScpO1xuICB9LFxuXG4gIGV2ZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdyZXNpemUnLFxuXG4gICAgICBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMudyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jLndpZHRoID0gdGhpcy53O1xuICAgICAgICB0aGlzLmMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgdGhpcy5vcHRzLmN4ID0gdGhpcy53IC8gMjtcbiAgICAgICAgdGhpcy5vcHRzLmN5ID0gdGhpcy5oIC8gMjtcblxuICAgICAgICB0aGlzLmRpZVggPSB0aGlzLncgLyAyIC8gdGhpcy5vcHRzLmxlbjtcbiAgICAgICAgdGhpcy5kaWVZID0gdGhpcy5oIC8gMiAvIHRoaXMub3B0cy5sZW47XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgbWV0aG9kczoge1xuICAgIGxvb3AoKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICB0aGlzLnRpY2sgKz0gMTtcblxuICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsYWxwKScucmVwbGFjZSgnYWxwJywgdGhpcy5vcHRzLnJlcGFpbnRBbHBoYSk7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG4gICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG5cbiAgICAgIGlmICh0aGlzLmxpbmVzLmxlbmd0aCA8IHRoaXMub3B0cy5jb3VudCAmJiBNYXRoLnJhbmRvbSgpIDwgdGhpcy5vcHRzLnNwYXduQ2hhbmNlKSB7XG4gICAgICAgIHRoaXMubGluZXMucHVzaChcbiAgICAgICAgICBuZXcgTGluZSh0aGlzLm9wdHMsIHRoaXMuY3R4LCB0aGlzLnRpY2ssIHRoaXMuYmFzZVJhZCwgdGhpcy5kaWVYLCB0aGlzLmRpZVkpLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgbGluZS5zdGVwKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcblxuTGluZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5hZGRlZFggPSAwO1xuICB0aGlzLmFkZGVkWSA9IDA7XG5cbiAgdGhpcy5yYWQgPSAwO1xuXG4gIHRoaXMubGlnaHRJbnB1dE11bHRpcGxpZXIgPSB0aGlzLm9wdHMuYmFzZUxpZ2h0SW5wdXRNdWx0aXBsaWVyXG4gICAgKyB0aGlzLm9wdHMuYWRkZWRMaWdodElucHV0TXVsdGlwbGllclxuICAgICogTWF0aC5yYW5kb20oKTtcblxuICB0aGlzLmNvbG9yID0gdGhpcy5vcHRzLmNvbG9yLnJlcGxhY2UoJ2h1ZScsIHRoaXMudGljayAqIHRoaXMub3B0cy5odWVDaGFuZ2UpO1xuICB0aGlzLmN1bXVsYXRpdmVUaW1lID0gMDtcblxuICB0aGlzLmJlZ2luUGhhc2UoKTtcbn07XG5cbkxpbmUucHJvdG90eXBlLmJlZ2luUGhhc2UgPSBmdW5jdGlvbiBiZWdpblBoYXNlKCkge1xuICB0aGlzLnggKz0gdGhpcy5hZGRlZFg7XG4gIHRoaXMueSArPSB0aGlzLmFkZGVkWTtcblxuICB0aGlzLnRpbWUgPSAwO1xuICB0aGlzLnRhcmdldFRpbWUgPSAodGhpcy5vcHRzLmJhc2VUaW1lICsgdGhpcy5vcHRzLmFkZGVkVGltZSAqIE1hdGgucmFuZG9tKCkpIHx8IDA7XG5cbiAgdGhpcy5yYWQgKz0gdGhpcy5iYXNlUmFkICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpO1xuICB0aGlzLmFkZGVkWCA9IE1hdGguY29zKHRoaXMucmFkKTtcbiAgdGhpcy5hZGRlZFkgPSBNYXRoLnNpbih0aGlzLnJhZCk7XG5cbiAgaWYgKE1hdGgucmFuZG9tKCkgPCB0aGlzLm9wdHMuZGllQ2hhbmNlXG4gICAgfHwgdGhpcy54ID4gdGhpcy5kaWVYIHx8IHRoaXMueCA8IC10aGlzLmRpZVggfHwgdGhpcy55ID4gdGhpcy5kaWVZIHx8IHRoaXMueSA8IC10aGlzLmRpZVkpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbn07XG5cbkxpbmUucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiBzdGVwKCkge1xuICB0aGlzLnRpbWUgKz0gMTtcbiAgdGhpcy5jdW11bGF0aXZlVGltZSArPSAxO1xuXG4gIGlmICh0aGlzLnRpbWUgPj0gdGhpcy50YXJnZXRUaW1lKSB7XG4gICAgdGhpcy5iZWdpblBoYXNlKCk7XG4gIH1cblxuICBjb25zdCBwcm9wID0gdGhpcy50aW1lIC8gdGhpcy50YXJnZXRUaW1lO1xuICBjb25zdCB3YXZlID0gTWF0aC5zaW4ocHJvcCAqIChNYXRoLlBJIC8gMikpO1xuICBjb25zdCB4ID0gdGhpcy5hZGRlZFggKiB3YXZlO1xuICBjb25zdCB5ID0gdGhpcy5hZGRlZFkgKiB3YXZlO1xuXG4gIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSBwcm9wICogdGhpcy5vcHRzLnNoYWRvd1RvVGltZVByb3BNdWx0O1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLnJlcGxhY2UoJ2xpZ2h0JywgdGhpcy5vcHRzLmJhc2VMaWdodCArIHRoaXMub3B0cy5hZGRlZExpZ2h0ICogTWF0aC5zaW4odGhpcy5jdW11bGF0aXZlVGltZSAqIHRoaXMubGlnaHRJbnB1dE11bHRpcGxpZXIpKTtcbiAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSB0aGlzLmN0eC5maWxsU3R5bGU7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgIHRoaXMub3B0cy5jeCArICh0aGlzLnggKyB4KSAqIHRoaXMub3B0cy5sZW4sXG4gICAgdGhpcy5vcHRzLmN5ICsgKHRoaXMueSArIHkpICogdGhpcy5vcHRzLmxlbixcbiAgICAyLFxuICAgIDIsXG4gICk7XG5cbiAgaWYgKE1hdGgucmFuZG9tKCkgPCB0aGlzLm9wdHMuc3BhcmtDaGFuY2UpIHtcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMub3B0cy5jeCArICh0aGlzLnggKyB4KSAqIHRoaXMub3B0cy5sZW4gKyBNYXRoLnJhbmRvbSgpXG4gICAgICAqIHRoaXMub3B0cy5zcGFya0Rpc3QgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgLSB0aGlzLm9wdHMuc3BhcmtTaXplIC8gMixcbiAgICAgIHRoaXMub3B0cy5jeSArICh0aGlzLnkgKyB5KSAqIHRoaXMub3B0cy5sZW4gKyBNYXRoLnJhbmRvbSgpXG4gICAgICAqIHRoaXMub3B0cy5zcGFya0Rpc3QgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgLSB0aGlzLm9wdHMuc3BhcmtTaXplIC8gMixcbiAgICAgIHRoaXMub3B0cy5zcGFya1NpemUsXG4gICAgICB0aGlzLm9wdHMuc3BhcmtTaXplLFxuICAgICk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBbXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicG9seWZpbGxzIiwiVUlraXQiLCJFeGFtcGxlIiwiYXBwIiwiZ2xvYmFsIiwiY29tcG9uZW50IiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJDb3VudGRvd24iLCJGaWx0ZXIiLCJMaWdodGJveCIsIkxpZ2h0Ym94UGFuZWwiLCJOb3RpZmljYXRpb24iLCJQYXJhbGxheCIsIlNsaWRlciIsIlNsaWRlclBhcmFsbGF4IiwiU2xpZGVzaG93IiwiU2xpZGVzaG93UGFyYWxsYXgiLCJTb3J0YWJsZSIsIlRvb2x0aXAiLCJVcGxvYWQiLCJBY2NvcmRpb24iLCJBbGVydCIsIkNvdmVyIiwiRHJvcCIsIkRyb3Bkb3duIiwiRm9ybUN1c3RvbSIsIkdpZiIsIkdyaWQiLCJIZWlnaHRNYXRjaCIsIkhlaWdodFZpZXdwb3J0IiwiSWNvbiIsIkltZyIsIkxlYWRlciIsIk1hcmdpbiIsIk1vZGFsIiwiTmF2IiwiTmF2YmFyIiwiT2ZmY2FudmFzIiwiT3ZlcmZsb3dBdXRvIiwiUmVzcG9uc2l2ZSIsIlNjcm9sbCIsIlNjcm9sbHNweSIsIlNjcm9sbHNweU5hdiIsIlN0aWNreSIsIlN2ZyIsIlN3aXRjaGVyIiwiVGFiIiwiVG9nZ2xlIiwiVmlkZW8iLCJDbG9zZSIsIlNwaW5uZXIiLCJTbGlkZW5hdiIsIlNsaWRlbmF2TmV4dCIsIlNsaWRlbmF2UHJldmlvdXMiLCJTZWFyY2giLCJTZWFyY2hJY29uIiwiSWNvbkNvbXBvbmVudCIsIk1hcmtlciIsIk5hdmJhclRvZ2dsZUljb24iLCJPdmVybGF5SWNvbiIsIlBhZ2luYXRpb25OZXh0IiwiUGFnaW5hdGlvblByZXZpb3VzIiwiVG90b3AiLCJDb3JlIiwiYm9vdCIsImVhY2giLCJJY29ucyIsImNvcmVDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIm5hbWUiLCJ1c2UiLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkNsYXNzIiwiTGluZSIsIm9wdHMiLCJjdHgiLCJ0aWNrIiwiYmFzZVJhZCIsImRpZVgiLCJkaWVZIiwicmVzZXQiLCJtaXhpbnMiLCJkYXRhIiwidyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJsaW5lcyIsIk1hdGgiLCJQSSIsImxlbiIsImNvdW50IiwiYmFzZVRpbWUiLCJhZGRlZFRpbWUiLCJkaWVDaGFuY2UiLCJzcGF3bkNoYW5jZSIsInNwYXJrQ2hhbmNlIiwic3BhcmtEaXN0Iiwic3BhcmtTaXplIiwiY29sb3IiLCJiYXNlTGlnaHQiLCJhZGRlZExpZ2h0Iiwic2hhZG93VG9UaW1lUHJvcE11bHQiLCJiYXNlTGlnaHRJbnB1dE11bHRpcGxpZXIiLCJhZGRlZExpZ2h0SW5wdXRNdWx0aXBsaWVyIiwiY3giLCJjeSIsInJlcGFpbnRBbHBoYSIsImh1ZUNoYW5nZSIsImNvbm5lY3RlZCIsImMiLCIkZWwiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImxvb3AiLCJjb25zb2xlIiwid2FybiIsImV2ZW50cyIsImVsIiwiaGFuZGxlciIsIm1ldGhvZHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJzaGFkb3dCbHVyIiwicmVwbGFjZSIsImxlbmd0aCIsInJhbmRvbSIsInB1c2giLCJmb3JFYWNoIiwibGluZSIsInN0ZXAiLCJwcm90b3R5cGUiLCJ4IiwieSIsImFkZGVkWCIsImFkZGVkWSIsInJhZCIsImxpZ2h0SW5wdXRNdWx0aXBsaWVyIiwiY3VtdWxhdGl2ZVRpbWUiLCJiZWdpblBoYXNlIiwidGltZSIsInRhcmdldFRpbWUiLCJjb3MiLCJzaW4iLCJwcm9wIiwid2F2ZSIsInNoYWRvd0NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==