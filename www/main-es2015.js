(self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



//import {AuthGuard} from './shared/auth.guard'
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'tabs-cliente',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs-cliente_tabs-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs-cliente/tabs-cliente.module */ 41007)).then(m => m.TabsClientePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js-node_modules_angular_mate-93e209"), __webpack_require__.e("src_app_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 10636)).then(m => m.RegistroPageModule)
    },
    {
        path: 'resetpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_resetpassword_resetpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resetpassword/resetpassword.module */ 81869)).then(m => m.ResetpasswordPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 46420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/wonderpush/ngx */ 14769);








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, wonderPush, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.wonderPush = wonderPush;
        this.statusBar = statusBar;
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.wonderPush.subscribeToNotifications();
            this.wonderPush.addTag('clientes');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__.WonderPush },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/servicio.autenticacion */ 10240);
/* harmony import */ var _shared_servicio_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/servicio.api */ 63381);
/* harmony import */ var _shared_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/database-service */ 21904);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/storage.service */ 86945);
/* harmony import */ var _shared_square_servicio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/square.servicio */ 73258);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/loading.services */ 68369);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/wonderpush/ngx */ 14769);












//servicios






// Material angular


// Form
// Other




//import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_22__.IonicStorageModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule,
        ],
        providers: [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__.SQLite,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy
            },
            _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_13__.WonderPush,
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__.GooglePlus,
            _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_4__.ServicioAutenticacion,
            _shared_servicio_api__WEBPACK_IMPORTED_MODULE_5__.ServicioApi,
            _shared_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService,
            _shared_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService,
            _shared_square_servicio__WEBPACK_IMPORTED_MODULE_8__.SquareServicio,
            _shared_loading_services__WEBPACK_IMPORTED_MODULE_9__.LoadingService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 21904:
/*!********************************************!*\
  !*** ./src/app/shared/database-service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": function() { return /* binding */ DatabaseService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);





let DatabaseService = class DatabaseService {
    constructor(platform, sqlite) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'todos.db',
                location: 'default'
            })
                .then((db) => {
                this.database = db;
                this.createTables().then(() => {
                    //communicate we are ready!
                    this.dbReady.next(true);
                });
            });
        });
    }
    createTables() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.database.executeSql(`CREATE TABLE IF NOT EXISTS Mybooks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        order_number TEXT,
        order_total REAL,
        order_subtotal REAL,
        order_discount REAL,
        order_status INTEGER,
        order_date TEXT,
        order_item_id INTEGER,
        product_item_price REAL,
        product_name TEXT,
        mimap TEXT,
        cita TEXT,
        citahora TEXT,
        vehiculotipo TEXT,
        Order_Item_Status INTEGER,
        wash_id INTEGER,
        latitud REAL,
        longitud REAL,
        discount_item REAL,
        total_item REAL,
        rp_monto REAL,
        rp_concepto TEXT,
        rp_aprobacion REAL


      );`, [])
                .then(() => {
                return this.database.executeSql(`CREATE TABLE IF NOT EXISTS Mypays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  txn_id TEXT,
  status TEXT,
  fechapago TEXT,
  amount REAL,
  userid INTEGER,
  order_id INTEGER,
  order_item_id INTEGER,
  order_number TEXT,
  service TEXT,
  price REAL,
  descuento REAL,
  propina REAL,
  total REAL
  

);`, []);
            }).catch((err) => console.log("error detected creating tables", err));
        });
    }
    isReady() {
        return new Promise((resolve, _reject) => {
            //if dbReady is true, resolve
            if (this.dbReady.getValue()) {
                resolve();
            }
            //otherwise, wait to resolve until dbReady returns true
            else {
                this.dbReady.subscribe((ready) => {
                    if (ready) {
                        resolve();
                    }
                });
            }
        });
    }
    addOrder(items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            //var items = Object.values(datos)
            for (let item of items) {
                this.database.executeSql(`INSERT INTO Mybooks(
          
        order_id,
        order_number ,
        order_total,
        order_subtotal ,
        order_discount,
        order_status ,
        order_date,
        order_item_id ,
        product_item_price ,
        product_name,
        mimap ,
        cita ,
        citahora ,
        vehiculotipo,
        Order_Item_Status ,
        wash_id ,
        latitud ,
        longitud ,
        discount_item,
        total_item
        
        
        
        ) VALUES (
        
        '${item.order_id}',
        '${item.order_number}',
        '${item.order_total}',
        '${item.order_subtotal}',
        '${item.order_discount}',
        '${item.order_status}',
        '${item.order_date}',
        '${item.order_item_id}',
        '${item.product_item_price}',
        '${item.product_name}',
        '${item.mimap}',
        '${item.cita}',
        '${item.citahora}',
        '${item.vehiculotipo}',
        '${item.Order_Item_Status}',
        '${item.wash_id}',
        '${item.latitud}',
        '${item.longitud}',
        '${item.discount}',
        '${item.total}',
        '${item.rp_monto}',
        '${item.rp_concepto}',
        '${item.rp_aprobacion}'

        );`, []);
            }
        });
    }
    addMypays(pays) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            for (let pay of pays) {
                this.database.executeSql(`INSERT INTO Mypays(
          
        txn_id,
        status,
        fechapago,
        amount,
        userid,
        order_id,
        order_item_id,
        order_number,
        service,
        price,
        descuent,
        propina,
        total
         
        
        
        ) VALUES (
        
        '${pay.txn_id}',
        '${pay.status}',
        '${pay.payment_date}',
        '${pay.auth_amount}',
        '${pay.user_id}',
        '${pay.order_id}',
        '${pay.order_item_id}',
        '${pay.order_number}',
        '${pay.service}',
        '${pay.precio}',
        '${pay.discount}',
        '${pay.propina}',
        '${pay.total}',
         
       
        );`, []);
            }
        });
    }
    /*async addTokenFcm( token : string) {
      await this.isReady();
      this.database.executeSql(`INSERT INTO TokenFCM(
            
        token
        
        ) VALUES (
        
        '${token}'
         
       
        );`, []);
  
    }
  
    async gettokenFCM() {
      await this.isReady();
      const data = await this.database.executeSql(`SELECT * from TokenFCM`, []);
  let token = data.rows.item(0).token
  
  return token
  
    }*/
    getTodosItems() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            const data = yield this.database.executeSql(`SELECT * from Mybooks`, []);
            let mybooks = [];
            for (let i = 0; i < data.rows.length; i++) {
                if (data.rows.item(i).Order_Item_Status == '1'
                    || data.rows.item(i).Order_Item_Status == '2'
                    || data.rows.item(i).Order_Item_Status == '7'
                    || data.rows.item(i).Order_Item_Status == '8') {
                    switch (data.rows.item(i).Order_Item_Status) {
                        case 1: // por confirmar
                            this.status_item = 'on hold';
                            this.botonpagar = false;
                            let now = Date.now();
                            let dosdiasenmilisegundos = 2 * 24 * 60 * 60 * 1000;
                            let fecha = new Date(data.rows.item(i).order_date);
                            let fechadeordenmili = fecha.getTime();
                            let fechaDentroDedosdias = fechadeordenmili + dosdiasenmilisegundos;
                            if (now >= fechaDentroDedosdias) {
                                this.botonborrar = false;
                            }
                            else {
                                this.botonborrar = true;
                            }
                            break;
                        case 2: // confirmada por un lavador
                            this.status_item = 'accepted';
                            this.botonborrar = false;
                            this.botonpagar = false;
                            break;
                        case 7: // atendida pendiente de pago
                            this.status_item = 'to pay';
                            this.botonborrar = false;
                            this.botonpagar = true;
                            break;
                        case 8: // pagada
                            this.status_item = 'paid out';
                            this.botonborrar = false;
                            this.botonpagar = false;
                            break;
                    }
                    mybooks.push({
                        id: data.rows.item(i).id,
                        order_id: data.rows.item(i).order_id,
                        Order: data.rows.item(i).order_number,
                        total: data.rows.item(i).order_total,
                        subtotal: data.rows.item(i).order_subtotal,
                        discount: data.rows.item(i).order_discount,
                        order_status: data.rows.item(i).order_status,
                        order_date: data.rows.item(i).order_date,
                        order_item_id: data.rows.item(i).order_item_id,
                        Price: data.rows.item(i).product_item_price,
                        product_name: data.rows.item(i).product_name,
                        mimap: data.rows.item(i).mimap,
                        Appointment: data.rows.item(i).cita,
                        citahora: data.rows.item(i).citahora,
                        vehiculotipo: data.rows.item(i).vehiculotipo,
                        Status: this.status_item,
                        wash_id: data.rows.item(i).wash_id,
                        longitud: data.rows.item(i).longitud,
                        latitud: data.rows.item(i).latitud,
                        discount_item: data.rows.item(i).discount_item,
                        total_item: data.rows.item(i).total_item,
                        verborrar: this.botonborrar,
                        verpagar: this.botonpagar
                    });
                }
            }
            return mybooks;
        });
    }
    getTodosPays() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            const data = yield this.database.executeSql(`SELECT * from Mypays`, []);
            let mypays = [];
            for (let i = 0; i < data.rows.length; i++) {
                mypays.push({
                    id: data.rows.item(i).id,
                    txn_id: data.rows.item(i).txn_id,
                    status: data.rows.item(i).status,
                    fechapago: data.rows.item(i).fechapago,
                    amount: data.rows.item(i).amount,
                    userid: data.rows.item(i).userid,
                    order_id: data.rows.item(i).order_id,
                    order_item_id: data.rows.item(i).order_item_id,
                    order_number: data.rows.item(i).order_number,
                    service: data.rows.item(i).service,
                    price: data.rows.item(i).price,
                    descuento: data.rows.item(i).descuento,
                    propina: data.rows.item(i).propina,
                    total: data.rows.item(i).total,
                });
            }
        });
    }
    getItems(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const formatter$ = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            });
            yield this.isReady();
            const data = yield this.database.executeSql(`SELECT * from Mybooks`, []);
            let Items = [];
            for (let i = 0; i < data.rows.length; i++) {
                if (data.rows.item(i).Order_Item_Status == n) {
                    switch (data.rows.item(i).Order_Item_Status) {
                        case 1: // por confirmar
                            this.status_item = 'on hold';
                            break;
                        case 2: // confirmada por un lavador
                            this.status_item = 'accepted';
                            break;
                        case 7: // atendida pendiente de pago
                            this.status_item = 'to pay';
                            break;
                        case 8: // pagada
                            this.status_item = 'paid out';
                            break;
                        case 9: // cancelado
                            this.status_item = 'cancelled';
                            break;
                    }
                    if (!data.rows.item(i).wash_id) {
                        var washid = "ND";
                    }
                    else {
                        washid = data.rows.item(i).wash_id;
                    }
                    var status = '';
                    var vercharge = false;
                    var verenlace3 = false;
                    switch (data.rows.item(i).rp_aprobacion) {
                        case 0:
                            status = 'Without approval';
                            vercharge = true;
                            var verenlace3 = false;
                            break;
                        case 1:
                            status = 'Waiting for approval';
                            vercharge = true;
                            var verenlace3 = false;
                            break;
                        case 2:
                            status = 'Passed';
                            vercharge = true;
                            var verenlace3 = false;
                            break;
                        default:
                            vercharge = false;
                            var verenlace3 = true;
                    }
                    Items.push({
                        id: data.rows.item(i).id,
                        order_id: data.rows.item(i).order_id,
                        Order: data.rows.item(i).order_number,
                        total: data.rows.item(i).order_total,
                        subtotal: data.rows.item(i).order_subtotal,
                        discount: data.rows.item(i).order_discount,
                        order_status: data.rows.item(i).order_status,
                        order_date: data.rows.item(i).order_date,
                        order_item_id: data.rows.item(i).order_item_id,
                        Price: data.rows.item(i).product_item_price,
                        Service: data.rows.item(i).product_name,
                        mimap: data.rows.item(i).mimap,
                        Appointment: data.rows.item(i).cita,
                        citahora: data.rows.item(i).citahora,
                        vehiculotipo: data.rows.item(i).vehiculotipo,
                        Status: this.status_item,
                        wash_id: washid,
                        longitud: data.rows.item(i).longitud,
                        latitud: data.rows.item(i).latitud,
                        discount_item: data.rows.item(i).discount_item,
                        total_item: data.rows.item(i).total_item,
                        Price_item_string: formatter$.format(data.rows.item(i).product_item_price),
                        Descuento_item_string: formatter$.format(data.rows.item(i).discount_item),
                        Total_item_string: formatter$.format(data.rows.item(i).total_item),
                        rp_monto_item: formatter$.format(data.rows.item(i).rp_monto),
                        rp_concepto_item: data.rows.item(i).rp_concepto,
                        rp_aprobacion_item: status,
                        vercharge_item: vercharge,
                        verenlace3_item: verenlace3
                    });
                }
            }
            return Items;
        });
    }
    getPays(p) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const formatter$ = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            });
            yield this.isReady();
            const data = yield this.database.executeSql(`SELECT * from Mypays`, []);
            let Pays = [];
            for (let i = 0; i < data.rows.length; i++) {
                if (data.rows.item(i).status == p) {
                    switch (data.rows.item(i).status) {
                        case 'Verifying': // verificando
                            this.status_pay = 'IN REVIEW';
                            break;
                        case 'Denied': // negado
                            this.status_pay = 'REJECT';
                            break;
                        case 'Processed': // aceptado
                            this.status_pay = 'ADMITTED';
                            break;
                    }
                    var date = new Date(data.rows.item(i).fechapago);
                    var dia = date.getDate();
                    var mesIndex = date.getMonth();
                    var year = date.getFullYear();
                    if (mesIndex >= 9) {
                        this.date_pay = (mesIndex + 1) + '-' + dia + '-' + year;
                    }
                    else {
                        this.date_pay = '0' + (mesIndex + 1) + '-' + dia + '-' + year;
                    }
                    Pays.push({
                        id: data.rows.item(i).id,
                        txn_id: data.rows.item(i).txn_id,
                        status: this.status_pay,
                        fechapago: this.date_pay,
                        amount: data.rows.item(i).amount,
                        userid: data.rows.item(i).userid,
                        order_id: data.rows.item(i).order_id,
                        order_item_id: data.rows.item(i).order_item_id,
                        order_number: data.rows.item(i).order_number,
                        service: data.rows.item(i).service,
                        price: data.rows.item(i).price,
                        descuento: data.rows.item(i).descuento,
                        propina: data.rows.item(i).propina,
                        total: data.rows.item(i).total,
                        Price_item_string: formatter$.format(data.rows.item(i).price),
                        Descuento_item_string: formatter$.format(data.rows.item(i).descuento),
                        Total_item_string: formatter$.format(data.rows.item(i).total),
                        Propina_string: formatter$.format(data.rows.item(i).propina),
                        Amount_string: formatter$.format(data.rows.item(i).amount),
                    });
                }
            }
            return Pays;
        });
    }
    borrarTobook(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            return yield this.database.executeSql(`DELETE FROM Mybooks WHERE order_item_id = ${id}`, []);
        });
    }
    UpdateOrders(items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            if (items.length !== 0) {
                for (let item of items) {
                    const data = yield this.database.executeSql(`SELECT * from Mybooks WHERE order_item_id = ${item.order_item_id}`, []);
                    if (data.rows.length == 1) {
                        yield this.database.executeSql(`UPDATE Mybooks SET      
      
        Order_Item_Status = ?,
        wash_id = ?
        WHERE order_item_id = ${item.order_item_id}
        `, [
                            item.Order_Item_Status,
                            item.wash_id
                        ]);
                    }
                    else {
                        this.database.executeSql(`INSERT INTO Mybooks(
          
          order_id,
          order_number ,
          order_total,
          order_subtotal ,
          order_discount,
          order_status ,
          order_date,
          order_item_id ,
          product_item_price ,
          product_name,
          mimap ,
          cita ,
          citahora ,
          vehiculotipo,
          Order_Item_Status ,
          wash_id ,
          latitud ,
          longitud,
          discount_item,
          total_item ,
          rp_monto,
          rp_concepto,
          rp_aprobacion 
          
          
          
          ) VALUES (
          
          '${item.order_id}',
          '${item.order_number}',
          '${item.order_total}',
          '${item.order_subtotal}',
          '${item.order_discount}',
          '${item.order_status}',
          '${item.order_date}',
          '${item.order_item_id}',
          '${item.product_item_price}',
          '${item.product_name}',
          '${item.mimap}',
          '${item.cita}',
          '${item.citahora}',
          '${item.vehiculotipo}',
          '${item.Order_Item_Status}',
          '${item.wash_id}',
          '${item.latitud}',
          '${item.longitud}',
          '${item.discount}',
          '${item.total}'
          );`, []);
                    }
                }
            }
            else {
                return this.database.executeSql(`DELETE FROM Mybooks`, []);
            }
        });
    }
    UpdatePays(pays) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.isReady();
            if (pays.length !== 0) {
                for (let pay of pays) {
                    const data = yield this.database.executeSql(`SELECT * from Mypays WHERE order_item_id = ${pay.order_item_id}`, []);
                    if (data.rows.length == 1) {
                        yield this.database.executeSql(`UPDATE Mypays SET      
    
      status = ?
      WHERE order_item_id = ${pay.order_item_id}
      `, [
                            pay.status,
                        ]);
                    }
                    else {
                        this.database.executeSql(`INSERT INTO Mypays(
        
        txn_id,
        status,
        fechapago,
        amount,
        userid,
        order_id,
        order_item_id,
        order_number,
        service,
        price,
        descuento,
        propina,
        total   
        
        
        
        ) VALUES (
        
        '${pay.txn_id}',
        '${pay.status}',
        '${pay.payment_date}',
        '${pay.auth_amount}',
        '${pay.user_id}',
        '${pay.order_id}',
        '${pay.order_item_id}',
        '${pay.order_number}',
        '${pay.service}',
        '${pay.precio}',
        '${pay.discount}',
        '${pay.propina}' ,
        '${pay.total}' 

        );`, []);
                    }
                }
            }
            else {
                return this.database.executeSql(`DELETE FROM Mypays`, []);
            }
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], DatabaseService);



/***/ }),

/***/ 68369:
/*!********************************************!*\
  !*** ./src/app/shared/loading.services.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    // Simple loader
    simpleLoader() {
        this.loadingController.create({
            message: 'One moment, please...',
            cssClass: 'custom-loader-class'
        }).then((response) => {
            response.present();
        });
    }
    // Dismiss loader
    dismissLoader() {
        this.loadingController.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 63381:
/*!****************************************!*\
  !*** ./src/app/shared/servicio.api.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicioApi": function() { return /* binding */ ServicioApi; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 61628);





let ServicioApi = class ServicioApi {
    constructor(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
    }
    getlocalstorage(clave) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get(clave);
        });
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var use = yield this.getlocalstorage('user');
            var user = JSON.parse(use);
            //var user =   JSON.parse(localStorage.getItem('user'));
            var uid = user.uid;
            var email = user.email;
            this.http.post('https://washtt.com/apigetprofile.php', { email: email, id: uid }).subscribe({
                next: data => {
                    switch (data.respuesta) {
                        case 'ERROR1':
                            console.log(data.mensaje);
                            break;
                        case 'ERROR2':
                            console.log(data.mensaje);
                            break;
                        case 'EXCEPCION1':
                            console.log(data.mensaje);
                            break;
                        case 'ERROR3':
                            console.log(data.mensaje);
                            break;
                        case 'PERFIL_INCOMPLETO':
                            this.router.navigate(['/ingresaperfil/']);
                            break;
                        case 'SITE_INCOMPLETO':
                            this.router.navigate(['/ingresasite/']);
                            break;
                        case 'NO_FLOTA':
                            this.router.navigate(['/ingresatruck/']);
                            break;
                        case 'OK_TODO':
                            this.router.navigate(['/tobooksite/']);
                            break;
                    }
                },
                error: error => {
                    var errorMensaje = error.message;
                    console.error('There was an error!' + errorMensaje);
                }
            });
        });
    }
};
ServicioApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
ServicioApi = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ServicioApi);



/***/ }),

/***/ 10240:
/*!**************************************************!*\
  !*** ./src/app/shared/servicio.autenticacion.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicioAutenticacion": function() { return /* binding */ ServicioAutenticacion; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 86945);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loading.services */ 68369);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/wonderpush/ngx */ 14769);












let ServicioAutenticacion = class ServicioAutenticacion {
    constructor(angularAuth, router, snackBar, http, platform, googlePlus, wonderPush, localstorage, loading) {
        this.angularAuth = angularAuth;
        this.router = router;
        this.snackBar = snackBar;
        this.http = http;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.wonderPush = wonderPush;
        this.localstorage = localstorage;
        this.loading = loading;
    }
    login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.angularAuth.signInWithEmailAndPassword(email, password).then((_userCredential) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                var data = firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().currentUser;
                yield this.localstorage.setObject('usuario', data);
                var idtoken = yield firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().currentUser.getIdToken(true);
                yield this.localstorage.setData('idtoken', idtoken);
                var email = data.email;
                console.log(idtoken);
                this.loading.simpleLoader();
                this.http.post('https://washtt.com/v1_api_clientes_login.php', { idtoken: idtoken, email: email }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'TODO_OK':
                                this.wonderPush.setUserId(data.userid);
                                this.wonderPush.addTag('clientes');
                                yield this.localstorage.setData('autenticacion_tipo', 'correo_pass');
                                this.router.navigate(['/tabs-cliente/tobook']);
                                break;
                            case 'TOKEN ERROR':
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMessage = error.message;
                        console.error('There was an error!');
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            })).catch((error) => {
                this.loading.dismissLoader();
                var errorMessage = error.message;
                console.error('There was an error!' + errorMessage);
                this.router.navigate(['/login']);
                this.snackBar.open(errorMessage, "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            });
        });
    }
    loginWithGoogle() {
        if (this.platform.is('android')) {
            this.loginGoogleAndroid();
        }
        else {
            this.loginGoogleWeb();
        }
    }
    loginGoogleAndroid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then((readySource) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('Platform ready from', readySource);
                // Platform now ready, execute any required native code
                const res = yield this.googlePlus.login({
                    'webClientId': '658811684880-1ifeco7pafvknenrf0kq6bimcae2na37.apps.googleusercontent.com',
                    'offline': true
                }).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    const resConfirmed = yield this.angularAuth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth.GoogleAuthProvider.credential(res.idToken));
                    if (resConfirmed) {
                        yield this.localstorage.setObject('usuario', res);
                        yield this.localstorage.setData('idtoken', res.idToken);
                        this.http.post('https://washtt.com/v1_api_clientes_logingoogle.php', {
                            idtoken: res.idToken,
                            email: res.email,
                            uid: res.userId,
                            fullname: res.displayName,
                            lname: res.familyName,
                            fname: res.givenName,
                            profile_imagen: res.imageUrl,
                        }).subscribe({
                            next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                switch (data.respuesta) {
                                    case 'ERROR':
                                        this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close", {
                                            horizontalPosition: "start",
                                            verticalPosition: "top",
                                        });
                                        console.log(data.mensaje);
                                        break;
                                    case 'TOKEN ERROR':
                                        this.snackBar.open("Invalid or expired token,please login again (google)", "Close", {
                                            horizontalPosition: "start",
                                            verticalPosition: "top",
                                        });
                                        console.log(data.mensaje);
                                        break;
                                    case 'ESCLIENTE':
                                        this.wonderPush.setUserId(data.userid);
                                        this.wonderPush.addTag('clientes');
                                        yield this.localstorage.setData('autenticacion_tipo', 'google');
                                        this.router.navigate(['/tabs-cliente/tobook']);
                                        console.log(res);
                                        break;
                                }
                            }),
                            error: error => {
                                var errorMessage = error.message;
                                console.error('There was an error!' + errorMessage);
                                this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                            }
                        });
                    }
                })).catch(error => {
                    var errorMessage = error.message;
                    console.error('There was an error!');
                    this.snackBar.open(errorMessage, "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                });
            }));
        });
    }
    loginGoogleWeb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.angularAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth.GoogleAuthProvider());
            const user = res.user;
            if (user) {
                yield this.localstorage.setData('autenticacion_tipo', 'google');
                this.router.navigate(['/tabs-cliente/tobook']);
                console.log(user);
            }
        });
    }
    logout_regular() {
        this.angularAuth.signOut().then(() => {
            // Sign-out successful.
            this.localstorage.clearData();
            this.router.navigate(['login']);
        }).catch((error) => {
            // An error happened.
            var errorMessage = error.message;
            console.error('There was an error!' + errorMessage);
        });
    }
    logout_google() {
        this.platform.ready().then((readySource) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
            yield this.googlePlus.logout().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.localstorage.clearData();
                this.router.navigate(['login']);
            })).catch(err => {
                console.error(err);
            });
        }));
    }
    register(email, password, name) {
        this.loading.simpleLoader();
        this.angularAuth.createUserWithEmailAndPassword(email, password).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var data = firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().currentUser;
            yield this.localstorage.setObject('usuario', data);
            var idtoken = yield firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().currentUser.getIdToken(true);
            yield this.localstorage.setData('idtoken', idtoken);
            yield this.localstorage.setData('autenticacion_tipo', 'correo_pass');
            this.http.post('https://washtt.com/v1_api_clientes_registro.php', {
                name: name, email: email, password: password, idtoken: idtoken
            }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.loading.dismissLoader();
                    switch (data.respuesta) {
                        case 'ERROR':
                            this.snackBar.open("Sorry, an error occurred,Please try again error 1: " + data.mensaje, "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(data.mensaje);
                            break;
                        case 'DUPLICADO_USUARIO':
                            this.snackBar.open('There is already an account with this email', "Close", {
                                duration: 3000,
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(data.mensaje);
                            break;
                        case 'OK':
                            this.wonderPush.setUserId(data.userid);
                            this.wonderPush.addTag('clientes');
                            yield this.localstorage.setData('autenticacion_tipo', 'correo_pass');
                            this.router.navigate(['/tabs-cliente/tobook']);
                            break;
                    }
                }),
                error: error => {
                    this.loading.dismissLoader();
                    var errorMessage = error.message;
                    this.snackBar.open(errorMessage, "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                    console.error('There was an error!' + errorMessage);
                }
            });
        })).catch((error) => {
            // Handle Errors here.
            this.loading.dismissLoader();
            var errorMessage = error.message;
            this.snackBar.open("Sorry, an error occurred,Please try again error3:" + error.message, "Close", {
                duration: 3000,
                horizontalPosition: "start",
                verticalPosition: "top",
            });
            console.error('There was an error!' + errorMessage);
        });
    }
    resetpassword(email) {
        this.loading.simpleLoader();
        firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().sendPasswordResetEmail(email).then(() => {
            // Password reset email sent!
            // ..
            this.loading.dismissLoader();
            this.snackBar.open("An email has been sent to your account to recover your password", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
            this.router.navigate(['login']);
        }).catch((error) => {
            this.loading.dismissLoader();
            //var errorCode = error.code;
            var errorMessage = error.message;
            this.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
            // ..
        });
    }
    cambiarpassword(newPassword) {
        this.loading.simpleLoader();
        const user = firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.auth().currentUser;
        user.updatePassword(newPassword).then(() => {
            // Update successful.
            this.loading.dismissLoader();
            this.snackBar.open("The password was updated successfully", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        }).catch((error) => {
            // An error ocurred
            // ...
            var errorMessage = error.message;
            this.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        });
    }
};
ServicioAutenticacion.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus },
    { type: _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__.WonderPush },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_2__.LoadingService }
];
ServicioAutenticacion = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], ServicioAutenticacion);



/***/ }),

/***/ 73258:
/*!*******************************************!*\
  !*** ./src/app/shared/square.servicio.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": function() { return /* binding */ ScriptStore; },
/* harmony export */   "SquareServicio": function() { return /* binding */ SquareServicio; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


const ScriptStore = [
    { name: 'square-sandbox', src: ' https://sandbox.web.squarecdn.com/v1/square.js' },
    { name: 'square', src: 'https://web.squarecdn.com/v1/square.js' }
    //{name: 'square', src: 'https://js.squareup.com/v2/paymentform'} viejo
];
let SquareServicio = class SquareServicio {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    loadScripts(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                // @ts-ignore
                if (script.readyState) { // IE
                    // @ts-ignore
                    script.onreadystatechange = () => {
                        // @ts-ignore
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            // @ts-ignore
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script); // <--- !!!
            }
            else {
                console.warn('Already Loaded...');
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
    isAlreadyLoaded(name) {
        var _a;
        return (_a = this.scripts[name]) === null || _a === void 0 ? void 0 : _a.loaded;
    }
};
SquareServicio.ctorParameters = () => [];
SquareServicio = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SquareServicio);



/***/ }),

/***/ 86945:
/*!*******************************************!*\
  !*** ./src/app/shared/storage.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            yield this.storage.create();
        });
    }
    // Create and expose methods that users of this service can
    // call, for example:
    setData(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set(key, value);
        });
    }
    setObject(key, object) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set(key, JSON.stringify(object));
        });
    }
    /* public getObject(key: string) {
      return this.storage.get(key);
   
       
     }*/
    getData(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.get(key);
        });
    }
    removeData(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove(key);
        });
    }
    clearData() {
        this.storage.clear().then(() => console.log('Limpiado todo localstore'));
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBZEtr0V9MgGvpYXWx-EnI0cVU1tSWHDO4",
        authDomain: "ttwash-customers.firebaseapp.com",
        projectId: "ttwash-customers",
        storageBucket: "ttwash-customers.appspot.com",
        messagingSenderId: "658811684880",
        appId: "1:658811684880:web:0df6c7ed9f268f91882295"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46420:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-toolbar.mat-primary {\n  background: #cb033c !important;\n}\n\n::ng-deep .mat-drawer {\n  background: #cb033c !important;\n}\n\n::ng-deep tr.mat-header-row {\n  background: #cb033c !important;\n}\n\n::ng-deep .mat-table tbody {\n  background: #142f5f !important;\n}\n\n/*::ng-deep tr.example-element-row[_ngcontent-oou-c248]:not(.example-expanded-row):hover {\n\n    background: #f5f5f557 !important;  \n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFFSSw4QkFBQTtBQURKOztBQUlBO0VBRUksOEJBQUE7QUFGSjs7QUFLQTtFQUVJLDhCQUFBO0FBSEo7O0FBTUE7OztFQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuXG4gICAgYmFja2dyb3VuZDogI2NiMDMzYyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXIge1xuXG4gICAgYmFja2dyb3VuZDogI2NiMDMzYyAhaW1wb3J0YW50OyAgICBcbn1cblxuOjpuZy1kZWVwIHRyLm1hdC1oZWFkZXItcm93IHtcblxuICAgIGJhY2tncm91bmQ6ICNjYjAzM2MgIWltcG9ydGFudDsgIFxufVxuXG46Om5nLWRlZXAgLm1hdC10YWJsZSB0Ym9keSB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjMTQyZjVmICFpbXBvcnRhbnQ7ICBcbn1cblxuLyo6Om5nLWRlZXAgdHIuZXhhbXBsZS1lbGVtZW50LXJvd1tfbmdjb250ZW50LW9vdS1jMjQ4XTpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1NTcgIWltcG9ydGFudDsgIFxufSovXG5cbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map