(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkttwashcustomers"] = self["webpackChunkttwashcustomers"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    45393:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825); // Material angular

      /*import {  MatButtonModule } from '@angular/material/button';
      import {  MatCardModule } from '@angular/material/card';
      import {  MatIconModule } from '@angular/material/icon';
      import {  MatFormFieldModule } from '@angular/material/form-field';
      import { MatInputModule } from '@angular/material/input';*/
      // Form


      var _LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, //MatButtonModule,
        //MatCardModule,
        //MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule // MatFormFieldModule,
        // MatInputModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      50437);
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

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(snackBar, formBuilder, servicioauth, router) {
          _classCallCheck(this, LoginPage);

          this.snackBar = snackBar;
          this.formBuilder = formBuilder;
          this.servicioauth = servicioauth;
          this.router = router;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reactiveForm();
          }
        }, {
          key: "reactiveForm",
          value: function reactiveForm() {
            this.form_login = this.formBuilder.group({
              email: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }],
              password: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form_login.valid) {
              var email = this.form_login.get("email").value;
              var password = this.form_login.get("password").value;
              return this.servicioauth.login(email, password);
            } else {
              this.snackBar.open("Please Fill all  field", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });
            }
          }
        }, {
          key: "logingoogle",
          value: function logingoogle() {
            return this.servicioauth.loginWithGoogle();
          }
        }, {
          key: "registro",
          value: function registro() {
            this.router.navigate(['registro']);
          }
        }, {
          key: "resetpassword",
          value: function resetpassword() {
            this.router.navigate(['resetpassword']);
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
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

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    50437:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label.platino {\n  --color:#fff;\n}\n\n::ng-deep .item-has-focus.platino {\n  --color:#fff;\n}\n\n.separador {\n  text-align: center;\n  color: #f2f2f2;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio_ttwash_express.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\nion-content {\n  --ion-background-color: #2E4F9C;\n  --ion-background-color-rgb: 46, 79, 156;\n}\n\n::ng-deep ion-item {\n  --ion-item-background: #2E4F9C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksNEVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBRUEsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLGlCQUFBO0FBTko7O0FBU0U7RUFDRSwrQkFBQTtFQUNBLHVDQUFBO0FBTko7O0FBU0U7RUFDRSw4QkFBQTtBQU5KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbC5wbGF0aW5vIHtcbiAgLS1jb2xvcjojZmZmO1xuXG59XG5cbjo6bmctZGVlcCAuaXRlbS1oYXMtZm9jdXMucGxhdGlubyAge1xuICAtLWNvbG9yOiNmZmY7XG59XG5cblxuXG5cblxuLnNlcGFyYWRvciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZjJmMmYyO1xufVxuXG4uYXBwLWxvZ297XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FzaHR0LmNvbS9hcHBfbG9nb19pbmljaW9fdHR3YXNoX2V4cHJlc3MucG5nKTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlM2Y4ZmY7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJFNEY5QztcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogNDYsIDc5LCAxNTY7XG4gIH1cblxuICA6Om5nLWRlZXAgaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzJFNEY5QztcbiAgfVxuXG4gICJdfQ== */";
      /***/
    },

    /***/
    76770:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n   \n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"app-logo\"></div>\n  <div style=\"text-align: center;\n   color: #ca083f;\n    font-weight: bolder;\n     font-size: larger;\n      margin-top: -23px;\n  font-style: oblique;\">Customers</div>\n    <div style=\"text-align: center;\n    color: #fff;  \n      font-size: x-small;  \n   font-style: oblique;\">with the usual care!</div>\n  <div style=\"text-align: center; font-weight: bolder; color:#f2f2f2\">2.1.3</div>\n  <form [formGroup]=\"form_login\" (ngSubmit)=\"submit()\" novalidate>\n    <ion-item lines=\"full\" class=\"platino\">\n      <ion-label  position=\"floating\" class=\"platino\">Email</ion-label>\n      \n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input   color=\"light\" placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n     \n    </ion-item>\n    \n\n\n\n    <ion-item lines=\"full\" >\n      <ion-label position=\"floating\" class=\"platino\">Password</ion-label>\n      <ion-icon name=\"lock-closed\" color=\"light\" slot=\"end\"></ion-icon>\n     \n      <ion-input color=\"light\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n\n      \n      <ion-button  color=\"primary\" expand=\"block\" (click) = \"resetpassword()\" >FORGOT YOUR PASSWORD</ion-button>\n    </ion-col>\n  </ion-row>\n\n \n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"logingoogle()\" >Sign in by Gmail</ion-button>\n    </ion-col>\n  </ion-row> \n\n<ion-row>\n    <ion-col>\n      <div class=\"separador\">Don't have an account?</div>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"registro()\" >Sing up an account</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map