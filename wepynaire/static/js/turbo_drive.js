"use strict";
(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["turbo_drive"],{

/***/ "./src/application/turbo_drive.js":
/*!****************************************!*\
  !*** ./src/application/turbo_drive.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_turbo_drive_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/turbo_drive.scss */ "./src/styles/turbo_drive.scss");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");

 // nouveau

document.addEventListener('turbo:load', function () {
  // nouveau
  console.log('turbo:load');
});
document.addEventListener("turbo:before-cache", function () {
  console.log('turbo:before-cache');
  const form = document.querySelector('form');
  if (form) {
    form.reset();
  }
});

/***/ }),

/***/ "./src/styles/turbo_drive.scss":
/*!*************************************!*\
  !*** ./src/styles/turbo_drive.scss ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1681843770640
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_mini-css-extract-pl-b8eb91"], () => (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9091&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"), __webpack_exec__("./node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./src/application/turbo_drive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdHVyYm9fZHJpdmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBRVgsQ0FBQzs7QUFFMUJBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVk7RUFBRTtFQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFlBQVk7RUFDeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ2pDLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDLElBQUlELElBQUksRUFBRTtJQUNOQSxJQUFJLENBQUNFLEtBQUssRUFBRTtFQUNoQjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNkRjtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEpBQTZFLGNBQWMsZUFBZTtBQUN4SSxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2FwcGxpY2F0aW9uL3R1cmJvX2RyaXZlLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy90dXJib19kcml2ZS5zY3NzPzNhOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3R1cmJvX2RyaXZlLnNjc3NcIjtcblxuaW1wb3J0IFwiQGhvdHdpcmVkL3R1cmJvXCI7IC8vIG5vdXZlYXVcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86bG9hZCcsIGZ1bmN0aW9uICgpIHsgLy8gbm91dmVhdVxuICAgIGNvbnNvbGUubG9nKCd0dXJibzpsb2FkJyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmJlZm9yZS1jYWNoZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3R1cmJvOmJlZm9yZS1jYWNoZScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH1cbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODE4NDM3NzA2NDBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==