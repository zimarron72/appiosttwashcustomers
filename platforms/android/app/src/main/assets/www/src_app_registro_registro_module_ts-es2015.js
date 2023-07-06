(self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 84967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": function() { return /* binding */ RegistroPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 12299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 10636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": function() { return /* binding */ RegistroPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 84967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 12299);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);







// Material angular





// Form

let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 12299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": function() { return /* binding */ RegistroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 36344);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 85998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/servicio.autenticacion */ 10240);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);








let RegistroPage = class RegistroPage {
    constructor(snackBar, formBuilder, servicioauth, router) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.servicioauth = servicioauth;
        this.router = router;
        this.verboton = false;
    }
    ngOnInit() {
        this.reactiveForm();
    }
    reactiveForm() {
        this.form_registro = this.formBuilder.group({
            name: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }],
            email: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }],
            password: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }]
        });
    }
    segmentChanged(ev) {
        if (this.respuesta == 'YES') {
            this.verboton = true;
        }
        else {
            this.verboton = false;
        }
    }
    submit() {
        if (this.form_registro.valid) {
            var name = this.form_registro.get("name").value;
            var password = this.form_registro.get("password").value;
            var email = this.form_registro.get("email").value;
            return this.servicioauth.register(email, password, name);
        }
        else {
            this.snackBar.open("Please Fill all  field", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        }
    }
    login() {
        this.router.navigate(['login']);
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_2__.ServicioAutenticacion },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 85998:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#f2f2f2;\n}\n\n.separador {\n  text-align: center;\n  color: #f2f2f2;\n}\n\n.etiqueta {\n  color: #f2f2f2;\n}\n\n.app-logo {\n  background-image: url(https://washtt.com/app_logo_inicio_ttwash_express.png);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 20px auto;\n}\n\n.lleno {\n  --ion-text-color: #f2f2f2;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #f2f2f2;\n}\n\nion-content {\n  --ion-background-color: #2E4F9C;\n  --ion-background-color-rgb: 46, 79, 156;\n}\n\n::ng-deep ion-item {\n  --ion-item-background: #2E4F9C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFNQTtFQUVJLGNBQUE7QUFKSjs7QUFPQTtFQUNJLDRFQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFFQSxpQkFBQTtBQU5KOztBQVNFO0VBRUUseUJBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0FBUko7O0FBV0k7RUFDSSwrQkFBQTtFQUNBLHVDQUFBO0FBUlI7O0FBV007RUFDRSw4QkFBQTtBQVJSIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XG59XG5cbi5zZXBhcmFkb3Ige1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2YyZjJmMjtcbn1cblxuXG5cbi5ldGlxdWV0YSB7XG5cbiAgICBjb2xvcjogI2YyZjJmMjtcbn1cblxuLmFwcC1sb2dve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dhc2h0dC5jb20vYXBwX2xvZ29faW5pY2lvX3R0d2FzaF9leHByZXNzLnBuZyk7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDMyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZTNmOGZmO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICB9XG5cbiAgLmxsZW5vIHtcbiAgICBcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZjJmMmYyO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJFNEY5QztcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDQ2LCA3OSwgMTU2O1xuICAgICAgfVxuICAgIFxuICAgICAgOjpuZy1kZWVwIGlvbi1pdGVtIHtcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMkU0RjlDO1xuICAgICAgfSJdfQ== */");

/***/ }),

/***/ 36344:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n   \n    <ion-title>Sing in</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"app-logo\"></div>\n  <form [formGroup]=\"form_registro\" (ngSubmit)=\"submit()\" novalidate>\n    <!--<ion-list>-->\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Full name</ion-label>\n      <ion-icon name=\"person\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\" placeholder=\"Full name\" formControlName=\"name\" type=\"text\" required></ion-input>\n     \n    </ion-item>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">Email</ion-label>\n      <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-input color=\"light\"  placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n     \n    </ion-item>\n    <ion-item lines=\"full\" class=\"lleno\">\n      <ion-label position=\"floating\" class=\"etiqueta\">Password</ion-label>\n      <ion-icon name=\"lock-closed\" color=\"light\" slot=\"end\"></ion-icon>\n     \n      <ion-input color=\"light\" placeholder=\"Password\" formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n \n    <!--</ion-list>-->\n        <ion-button *ngIf ='verboton' type=\"submit\" color=\"primary\" expand=\"block\" >Sign in</ion-button>\n   \n  </form>\n <div style=\"text-align: center; padding:5px; color: #f2f2f2\" >Do you accept the <a href=\"https://www.washtt.com/terms-and-conditions\" target=\"_Blank\">Terms and Conditions?</a></div>\n<br>\n<br>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"respuesta\" value=\"NOT\" >\n    <ion-segment-button style=\"color: #004594; background-color:#fff; \" value=\"NOT\"  >\n      <ion-label>NOT</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"YES\" style=\"color: #f2f2f2; background-color:#004594; \">\n      <ion-label>YES</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n \n   \n<ion-grid>\n\n\n  <ion-row>\n    <ion-col>\n      <div class=\"separador\">I already have an account</div>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button   color=\"primary\" expand=\"block\" (click) = \"login()\" >LOGIN</ion-button>\n    </ion-col>\n  </ion-row> \n \n</ion-grid>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts-es2015.js.map