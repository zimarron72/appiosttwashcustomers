(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_resetpassword_resetpassword_module_ts"], {
    /***/
    80552:
    /*!***************************************************************!*\
      !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPageRoutingModule": function ResetpasswordPageRoutingModule() {
          return (
            /* binding */
            _ResetpasswordPageRoutingModule
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


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resetpassword.page */
      80071);

      var routes = [{
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
      }];

      var _ResetpasswordPageRoutingModule = /*#__PURE__*/_createClass(function ResetpasswordPageRoutingModule() {
        _classCallCheck(this, ResetpasswordPageRoutingModule);
      });

      _ResetpasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ResetpasswordPageRoutingModule);
      /***/
    },

    /***/
    81869:
    /*!*******************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPageModule": function ResetpasswordPageModule() {
          return (
            /* binding */
            _ResetpasswordPageModule
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


      var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resetpassword-routing.module */
      80552);
      /* harmony import */


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./resetpassword.page */
      80071); // Form


      var _ResetpasswordPageModule = /*#__PURE__*/_createClass(function ResetpasswordPageModule() {
        _classCallCheck(this, ResetpasswordPageModule);
      });

      _ResetpasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
      })], _ResetpasswordPageModule);
      /***/
    },

    /***/
    80071:
    /*!*****************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPage": function ResetpasswordPage() {
          return (
            /* binding */
            _ResetpasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./resetpassword.page.html */
      70818);
      /* harmony import */


      var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./resetpassword.page.scss */
      83661);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/servicio.autenticacion */
      10240);

      var _ResetpasswordPage = /*#__PURE__*/function () {
        function ResetpasswordPage(snackBar, formBuilder, servicioauth, router) {
          _classCallCheck(this, ResetpasswordPage);

          this.snackBar = snackBar;
          this.formBuilder = formBuilder;
          this.servicioauth = servicioauth;
          this.router = router;
        }

        _createClass(ResetpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reactiveForm();
          }
        }, {
          key: "reactiveForm",
          value: function reactiveForm() {
            this.form_reset = this.formBuilder.group({
              email: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form_reset.valid) {
              var email = this.form_reset.get("email").value;
              return this.servicioauth.resetpassword(email);
            } else {
              this.snackBar.open("Please, this value is required", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['/login']);
          }
        }]);

        return ResetpasswordPage;
      }();

      _ResetpasswordPage.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__.ServicioAutenticacion
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _ResetpasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ResetpasswordPage);
      /***/
    },

    /***/
    83661:
    /*!*******************************************************!*\
      !*** ./src/app/resetpassword/resetpassword.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".etiqueta {\n  color: #fff;\n}\n\nion-content {\n  --ion-background-color:#cb033c;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\n.lleno {\n  --ion-item-background: #cb033c;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtBQUFKOztBQUdBO0VBQ0ksOEJBQUE7QUFBSjs7QUFNQTtFQUNJLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFFQSxpQkFBQTtBQUxKOztBQVFFO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7QUFOSiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldGlxdWV0YSB7XG5cbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojY2IwMzNjO1xufVxuXG5cblxuXG4uYXBwLWxvZ297XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FzaHR0LmNvbS9hcHBfbG9nb19pbmljaW8ucG5nKTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlM2Y4ZmY7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuICAubGxlbm8ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2NiMDMzYztcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    70818:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>Password recovery</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-icon name=\"information-circle\" slot='start' color=\"secondary\"></ion-icon>\n    <ion-title size=\"small\">Enter the correct email associated with your account to receive a password recovery email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"app-logo\"></div>\n\n  <form [formGroup]=\"form_reset\" (ngSubmit)=\"submit()\" novalidate>\n\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Email</ion-label>\n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\" placeholder=\"email of your account\" formControlName=\"email\" type=\"email\" required></ion-input>     \n    </ion-item>\n\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >SEND</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n  </form>\n  <ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"cancel()\" >CANCEL</ion-button>\n    </ion-col>\n  </ion-row> \n</ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_resetpassword_resetpassword_module_ts-es5.js.map