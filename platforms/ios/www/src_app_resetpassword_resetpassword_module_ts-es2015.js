(self["webpackChunkttwashcustomers"] = self["webpackChunkttwashcustomers"] || []).push([["src_app_resetpassword_resetpassword_module_ts"],{

/***/ 80552:
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageRoutingModule": function() { return /* binding */ ResetpasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword.page */ 80071);




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetpasswordPageRoutingModule);



/***/ }),

/***/ 81869:
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageModule": function() { return /* binding */ ResetpasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword-routing.module */ 80552);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page */ 80071);







// Form

let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ 80071:
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPage": function() { return /* binding */ ResetpasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resetpassword.page.html */ 70818);
/* harmony import */ var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page.scss */ 83661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/servicio.autenticacion */ 10240);








let ResetpasswordPage = class ResetpasswordPage {
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
        this.form_reset = this.formBuilder.group({
            email: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }],
        });
    }
    submit() {
        if (this.form_reset.valid) {
            var email = this.form_reset.get("email").value;
            return this.servicioauth.resetpassword(email);
        }
        else {
            this.snackBar.open("Please, this value is required", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        }
    }
    cancel() {
        this.router.navigate(['/login']);
    }
};
ResetpasswordPage.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__.ServicioAutenticacion },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ResetpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetpasswordPage);



/***/ }),

/***/ 83661:
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".etiqueta {\n  color: #fff;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio_ttwash_express.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\n.lleno {\n  --ion-text-color: #f2f2f2;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #f2f2f2;\n}\n\nion-content {\n  --ion-background-color: #2E4F9C;\n  --ion-background-color-rgb: 46, 79, 156;\n}\n\n::ng-deep ion-item {\n  --ion-item-background: #2E4F9C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtBQUFKOztBQU9BO0VBQ0ksNEVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBRUEsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLGlCQUFBO0FBTko7O0FBU0U7RUFFRSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7QUFSSjs7QUFXSTtFQUNJLCtCQUFBO0VBQ0EsdUNBQUE7QUFSUjs7QUFXTTtFQUNFLDhCQUFBO0FBUlIiLCJmaWxlIjoicmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXRpcXVldGEge1xuXG4gICAgY29sb3I6ICNmZmY7XG59XG5cblxuXG5cblxuLmFwcC1sb2dve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dhc2h0dC5jb20vYXBwX2xvZ29faW5pY2lvX3R0d2FzaF9leHByZXNzLnBuZyk7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDMyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZTNmOGZmO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICB9XG5cbiAgLmxsZW5vIHtcbiAgICBcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZjJmMmYyO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJFNEY5QztcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDQ2LCA3OSwgMTU2O1xuICAgICAgfVxuICAgIFxuICAgICAgOjpuZy1kZWVwIGlvbi1pdGVtIHtcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMkU0RjlDO1xuICAgICAgfVxuXG4gICAgICAiXX0= */");

/***/ }),

/***/ 70818:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>Password recovery</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-icon name=\"information-circle\" slot='start' style=\"color:#f2f2f2\"></ion-icon>\n    <ion-title size=\"small\" style=\"color:#f2f2f2\">Enter the correct email associated with your account to receive a password recovery email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"form_reset\" (ngSubmit)=\"submit()\" novalidate>\n\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Email</ion-label>\n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\" placeholder=\"email of your account\" formControlName=\"email\" type=\"email\" required></ion-input>     \n    </ion-item>\n\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >SEND</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n  </form>\n  <ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"cancel()\" >CANCEL</ion-button>\n    </ion-col>\n  </ion-row> \n</ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_resetpassword_resetpassword_module_ts-es2015.js.map