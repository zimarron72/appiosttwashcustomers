(self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







// Material angular
/*import {  MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';*/
// Form

let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            //MatButtonModule,
            //MatCardModule,
            //MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            // MatFormFieldModule,
            // MatInputModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 50437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/servicio.autenticacion */ 10240);








let LoginPage = class LoginPage {
    constructor(snackBar, formBuilder, servicioauth, router) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.servicioauth = servicioauth;
        this.router = router;
    }
    ngOnInit() {
        this.reactiveForm();
    }
    reactiveForm() {
        this.form_login = this.formBuilder.group({
            email: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }],
            password: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }]
        });
    }
    submit() {
        if (this.form_login.valid) {
            var email = this.form_login.get("email").value;
            var password = this.form_login.get("password").value;
            return this.servicioauth.login(email, password);
        }
        else {
            this.snackBar.open("Please Fill all  field", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        }
    }
    logingoogle() {
        return this.servicioauth.loginWithGoogle();
    }
    registro() {
        this.router.navigate(['registro']);
    }
    resetpassword() {
        this.router.navigate(['resetpassword']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__.ServicioAutenticacion },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 50437:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".etiqueta {\n  color: #fff;\n}\n\nion-content {\n  --ion-background-color:#cb033c;\n}\n\n.separador {\n  text-align: center;\n  color: #fff;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio_ttwash_express.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\n.lleno {\n  --ion-item-background: #cb033c;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFdBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0FBRko7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUNJLDRFQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFFQSxpQkFBQTtBQUxKOztBQVFFO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7QUFORiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmV0aXF1ZXRhIHtcblxuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNjYjAzM2M7XG59XG5cblxuLnNlcGFyYWRvciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXBwLWxvZ297XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FzaHR0LmNvbS9hcHBfbG9nb19pbmljaW9fdHR3YXNoX2V4cHJlc3MucG5nKTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlM2Y4ZmY7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuICAubGxlbm8ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNjYjAzM2M7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAtLWlvbi1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIH0iXX0= */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n   \n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"app-logo\"></div>\n\n  <form [formGroup]=\"form_login\" (ngSubmit)=\"submit()\" novalidate>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Email</ion-label>\n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\" placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n     \n    </ion-item>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label position=\"floating\" class=\"etiqueta\">Password</ion-label>\n      <ion-icon name=\"lock-closed\" color=\"light\" slot=\"end\"></ion-icon>\n     \n      <ion-input color=\"light\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >LOGIN</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n\n      \n      <ion-button  color=\"primary\" expand=\"block\" (click) = \"resetpassword()\" >FORGOT YOUR PASSWORD</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <div class=\"separador\">Or sign in with</div>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"logingoogle()\" >GOOGLE</ion-button>\n    </ion-col>\n  </ion-row> \n\n<ion-row>\n    <ion-col>\n      <div class=\"separador\">Don't have an account?</div>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"registro()\" >Create an account</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map