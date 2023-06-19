(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_registro_registro_module_ts"], {
    /***/
    84967:
    /*!*****************************************************!*\
      !*** ./src/app/registro/registro-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPageRoutingModule": function RegistroPageRoutingModule() {
          return (
            /* binding */
            _RegistroPageRoutingModule
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


      var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registro.page */
      12299);

      var routes = [{
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
      }];

      var _RegistroPageRoutingModule = /*#__PURE__*/_createClass(function RegistroPageRoutingModule() {
        _classCallCheck(this, RegistroPageRoutingModule);
      });

      _RegistroPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegistroPageRoutingModule);
      /***/
    },

    /***/
    10636:
    /*!*********************************************!*\
      !*** ./src/app/registro/registro.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPageModule": function RegistroPageModule() {
          return (
            /* binding */
            _RegistroPageModule
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


      var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registro-routing.module */
      84967);
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registro.page */
      12299);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166); // Material angular
      // Form


      var _RegistroPageModule = /*#__PURE__*/_createClass(function RegistroPageModule() {
        _classCallCheck(this, RegistroPageModule);
      });

      _RegistroPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
      })], _RegistroPageModule);
      /***/
    },

    /***/
    12299:
    /*!*******************************************!*\
      !*** ./src/app/registro/registro.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPage": function RegistroPage() {
          return (
            /* binding */
            _RegistroPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./registro.page.html */
      36344);
      /* harmony import */


      var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registro.page.scss */
      85998);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/servicio.autenticacion */
      10240);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);

      var _RegistroPage = /*#__PURE__*/function () {
        function RegistroPage(snackBar, formBuilder, servicioauth, router) {
          _classCallCheck(this, RegistroPage);

          this.snackBar = snackBar;
          this.formBuilder = formBuilder;
          this.servicioauth = servicioauth;
          this.router = router;
          this.verboton = false;
        }

        _createClass(RegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reactiveForm();
          }
        }, {
          key: "reactiveForm",
          value: function reactiveForm() {
            this.form_registro = this.formBuilder.group({
              name: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }],
              email: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }],
              password: [, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
              }]
            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            if (this.respuesta == 'YES') {
              this.verboton = true;
            } else {
              this.verboton = false;
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form_registro.valid) {
              var name = this.form_registro.get("name").value;
              var password = this.form_registro.get("password").value;
              var email = this.form_registro.get("email").value;
              return this.servicioauth.register(email, password, name);
            } else {
              this.snackBar.open("Please Fill all  field", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });
            }
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['login']);
          }
        }]);

        return RegistroPage;
      }();

      _RegistroPage.ctorParameters = function () {
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

      _RegistroPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegistroPage);
      /***/
    },

    /***/
    85998:
    /*!*********************************************!*\
      !*** ./src/app/registro/registro.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#f2f2f2;\n}\n\n.separador {\n  text-align: center;\n  color: #d50042;\n}\n\n.etiqueta {\n  color: #f2f2f2;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio_ttwash_express.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\n.lleno {\n  --ion-item-background: #004594;\n  --ion-text-color: #f2f2f2;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFNQTtFQUVJLGNBQUE7QUFKSjs7QUFPQTtFQUNJLDRFQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFFQSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7QUFQSiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO1xufVxuXG4uc2VwYXJhZG9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNkNTAwNDI7XG59XG5cblxuXG4uZXRpcXVldGEge1xuXG4gICAgY29sb3I6ICNmMmYyZjI7XG59XG5cbi5hcHAtbG9nb3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93YXNodHQuY29tL2FwcF9sb2dvX2luaWNpb190dHdhc2hfZXhwcmVzcy5wbmcpO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy9ib3JkZXItcmFkaXVzOiAzMjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2UzZjhmZjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuXG4gIC5sbGVubyB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDA0NTk0O1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNmMmYyZjI7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuICBcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICNmMmYyZjI7XG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    36344:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n   \n    <ion-title>Sing in</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"app-logo\"></div>\n  <form [formGroup]=\"form_registro\" (ngSubmit)=\"submit()\" novalidate>\n    <!--<ion-list>-->\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Full name</ion-label>\n      <ion-icon name=\"person\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\" placeholder=\"Full name\" formControlName=\"name\" type=\"text\" required></ion-input>\n     \n    </ion-item>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Email</ion-label>\n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\"  placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n     \n    </ion-item>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label position=\"floating\" class=\"etiqueta\">Password</ion-label>\n      <ion-icon name=\"lock-closed\" color=\"light\" slot=\"end\"></ion-icon>\n     \n      <ion-input color=\"light\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n \n    <!--</ion-list>-->\n        <ion-button *ngIf ='verboton' type=\"submit\" color=\"primary\" expand=\"block\" >Sign in</ion-button>\n   \n  </form>\n <div style=\"text-align: center; padding:5px; color: #d50042\" >Do you accept the <a href=\"https://www.washtt.com/terms-and-conditions\" target=\"_Blank\">Terms and Conditions?</a></div>\n<br>\n<br>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"respuesta\" value=\"NOT\" >\n    <ion-segment-button style=\"color: #004594; background-color:#fff; \" value=\"NOT\"  >\n      <ion-label>NOT</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"YES\" style=\"color: #f2f2f2; background-color:#004594; \">\n      <ion-label>YES</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n \n   \n<ion-grid>\n\n\n  <ion-row>\n    <ion-col>\n      <div class=\"separador\">I already have an account</div>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"login()\" >LOGIN</ion-button>\n    </ion-col>\n  </ion-row> \n \n</ion-grid>\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_registro_registro_module_ts-es5.js.map