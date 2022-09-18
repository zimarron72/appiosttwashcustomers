(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_tabs-cliente_tabs-cliente_module_ts"], {
    /***/
    29039:
    /*!*************************************************************!*\
      !*** ./src/app/tabs-cliente/tabs-cliente-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsClientePageRoutingModule": function TabsClientePageRoutingModule() {
          return (
            /* binding */
            _TabsClientePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tabs_cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-cliente.page */
      10963);

      var routes = [{
        path: '',
        component: _tabs_cliente_page__WEBPACK_IMPORTED_MODULE_0__.TabsClientePage,
        children: [{
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js-node_modules_angular_mate-93e209"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js-node_modules_angular_ma-a367d9"), __webpack_require__.e("src_app_tab-cliente-profile_tab-cliente-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab-cliente-profile/tab-cliente-profile.module */
            84013)).then(function (m) {
              return m.TabClienteProfilePageModule;
            });
          }
        }, {
          path: 'tobook',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js-node_modules_angular_mate-93e209"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js-node_modules_angular_ma-a367d9"), __webpack_require__.e("default-node_modules_firebase_auth_dist_index_esm_js"), __webpack_require__.e("src_app_tab-cliente-tobook_tab-cliente-tobook_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab-cliente-tobook/tab-cliente-tobook.module */
            40560)).then(function (m) {
              return m.TabClienteTobookPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs-cliente/tobook',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs-cliente/tobook',
        pathMatch: 'full'
      }];

      var _TabsClientePageRoutingModule = /*#__PURE__*/_createClass(function TabsClientePageRoutingModule() {
        _classCallCheck(this, TabsClientePageRoutingModule);
      });

      _TabsClientePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TabsClientePageRoutingModule);
      /***/
    },

    /***/
    41007:
    /*!*****************************************************!*\
      !*** ./src/app/tabs-cliente/tabs-cliente.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsClientePageModule": function TabsClientePageModule() {
          return (
            /* binding */
            _TabsClientePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _tabs_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-cliente-routing.module */
      29039);
      /* harmony import */


      var _tabs_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs-cliente.page */
      10963);

      var _TabsClientePageModule = /*#__PURE__*/_createClass(function TabsClientePageModule() {
        _classCallCheck(this, TabsClientePageModule);
      });

      _TabsClientePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabs_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsClientePageRoutingModule],
        declarations: [_tabs_cliente_page__WEBPACK_IMPORTED_MODULE_1__.TabsClientePage]
      })], _TabsClientePageModule);
      /***/
    },

    /***/
    10963:
    /*!***************************************************!*\
      !*** ./src/app/tabs-cliente/tabs-cliente.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsClientePage": function TabsClientePage() {
          return (
            /* binding */
            _TabsClientePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabs_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs-cliente.page.html */
      43430);
      /* harmony import */


      var _tabs_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs-cliente.page.scss */
      40879);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TabsClientePage = /*#__PURE__*/function () {
        function TabsClientePage() {
          _classCallCheck(this, TabsClientePage);
        }

        _createClass(TabsClientePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsClientePage;
      }();

      _TabsClientePage.ctorParameters = function () {
        return [];
      };

      _TabsClientePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs-cliente',
        template: _raw_loader_tabs_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsClientePage);
      /***/
    },

    /***/
    40879:
    /*!*****************************************************!*\
      !*** ./src/app/tabs-cliente/tabs-cliente.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWNsaWVudGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    43430:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-cliente/tabs-cliente.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n <ion-tab-bar color = \"primary\" slot=\"bottom\">\n    <!--<ion-tab-button tab=\"map\">\n      <ion-icon name=\"map-outline\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>-->\n\n    <ion-tab-button tab=\"tobook\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <ion-label>Booking</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n    <!--<ion-tab-button tab=\"payments\">\n      <ion-icon name=\"cash-outline\"></ion-icon>\n      <ion-label>Payments</ion-label>\n    </ion-tab-button>-->\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs-cliente_tabs-cliente_module_ts-es5.js.map