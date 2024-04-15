(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkttwashexpress"] = self["webpackChunkttwashexpress"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'tabs-cliente',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs-cliente_tabs-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs-cliente/tabs-cliente.module */
          41007)).then(function (m) {
            return m.TabsClientePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js-node_modules_angular_mate-93e209"), __webpack_require__.e("src_app_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./registro/registro.module */
          10636)).then(function (m) {
            return m.RegistroPageModule;
          });
        }
      }, {
        path: 'resetpassword',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_resetpassword_resetpassword_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./resetpassword/resetpassword.module */
          81869)).then(function (m) {
            return m.ResetpasswordPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      46420);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/wonderpush/ngx */
      14769);

      var _AppComponent = /*#__PURE__*/_createClass(function AppComponent(platform, splashScreen, wonderPush, statusBar) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.wonderPush = wonderPush;
        this.statusBar = statusBar;
        this.platform.ready().then(function () {
          _this.statusBar.styleDefault();

          _this.splashScreen.hide();

          _this.wonderPush.subscribeToNotifications();

          _this.wonderPush.addTag('clientes');
        });
      });

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__.WonderPush
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire */
      50057);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/fire/auth */
      49743);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/servicio.autenticacion */
      10240);
      /* harmony import */


      var _shared_servicio_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/servicio.api */
      63381);
      /* harmony import */


      var _shared_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/storage.service */
      86945);
      /* harmony import */


      var _shared_square_servicio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/square.servicio */
      73258);
      /* harmony import */


      var _shared_loading_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/loading.services */
      68369);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @awesome-cordova-plugins/google-plus/ngx */
      71044);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @awesome-cordova-plugins/wonderpush/ngx */
      14769); //servicios
      //import { DatabaseService } from './shared/database-service';
      // Material angular
      // Form
      // Other
      //import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';


      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_fire__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_21__.IonicStorageModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule],
        providers: [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__.SQLite, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy
        }, _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_12__.WonderPush, _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__.GooglePlus, _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_4__.ServicioAutenticacion, _shared_servicio_api__WEBPACK_IMPORTED_MODULE_5__.ServicioApi, //DatabaseService,
        _shared_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService, _shared_square_servicio__WEBPACK_IMPORTED_MODULE_7__.SquareServicio, _shared_loading_services__WEBPACK_IMPORTED_MODULE_8__.LoadingService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    68369:
    /*!********************************************!*\
      !*** ./src/app/shared/loading.services.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
        } // Simple loader


        _createClass(LoadingService, [{
          key: "simpleLoader",
          value: function simpleLoader() {
            this.loadingController.create({
              message: 'One moment, please...',
              cssClass: 'custom-loader-class',
              backdropDismiss: true
            }).then(function (response) {
              response.present();
            });
          } // Dismiss loader

        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            this.loadingController.dismiss().then(function (response) {
              console.log('Loader closed!', response);
            })["catch"](function (err) {
              console.log('Error occured : ', err);
            });
          }
        }]);

        return LoadingService;
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    63381:
    /*!****************************************!*\
      !*** ./src/app/shared/servicio.api.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicioApi": function ServicioApi() {
          return (
            /* binding */
            _ServicioApi
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      61628);

      var _ServicioApi = /*#__PURE__*/function () {
        function ServicioApi(http, router, storage) {
          _classCallCheck(this, ServicioApi);

          this.http = http;
          this.router = router;
          this.storage = storage;
        }

        _createClass(ServicioApi, [{
          key: "getlocalstorage",
          value: function getlocalstorage(clave) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get(clave);

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var use, user, uid, email;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getlocalstorage('user');

                    case 2:
                      use = _context2.sent;
                      user = JSON.parse(use); //var user =   JSON.parse(localStorage.getItem('user'));

                      uid = user.uid;
                      email = user.email;
                      this.http.post('https://washtt.com/apigetprofile.php', {
                        email: email,
                        id: uid
                      }).subscribe({
                        next: function next(data) {
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
                              _this2.router.navigate(['/ingresaperfil/']);

                              break;

                            case 'SITE_INCOMPLETO':
                              _this2.router.navigate(['/ingresasite/']);

                              break;

                            case 'NO_FLOTA':
                              _this2.router.navigate(['/ingresatruck/']);

                              break;

                            case 'OK_TODO':
                              _this2.router.navigate(['/tobooksite/']);

                              break;
                          }
                        },
                        error: function error(_error) {
                          var errorMensaje = _error.message;
                          console.error('There was an error!' + errorMensaje);
                        }
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ServicioApi;
      }();

      _ServicioApi.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }];
      };

      _ServicioApi = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _ServicioApi);
      /***/
    },

    /***/
    10240:
    /*!**************************************************!*\
      !*** ./src/app/shared/servicio.autenticacion.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicioAutenticacion": function ServicioAutenticacion() {
          return (
            /* binding */
            _ServicioAutenticacion
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      49743);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @awesome-cordova-plugins/google-plus/ngx */
      71044);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      86945);
      /* harmony import */


      var _shared_loading_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/loading.services */
      68369);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      42329);
      /* harmony import */


      var _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/wonderpush/ngx */
      14769);

      var _ServicioAutenticacion = /*#__PURE__*/function () {
        function ServicioAutenticacion(angularAuth, router, snackBar, http, platform, googlePlus, wonderPush, localstorage, loading) {
          _classCallCheck(this, ServicioAutenticacion);

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

        _createClass(ServicioAutenticacion, [{
          key: "login",
          value: function login(email, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.loading.simpleLoader();
                      firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.Auth.Persistence.LOCAL).then(function () {
                        _this3.angularAuth.signInWithEmailAndPassword(email, password).then(function (_userCredential) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var _this4 = this;

                            var data, idtoken, email;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    data = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                                    _context4.next = 3;
                                    return this.localstorage.setObject('usuario', data);

                                  case 3:
                                    _context4.next = 5;
                                    return firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.getIdToken(true);

                                  case 5:
                                    idtoken = _context4.sent;
                                    _context4.next = 8;
                                    return this.localstorage.setData('idtoken', idtoken);

                                  case 8:
                                    email = data.email;
                                    console.log(idtoken);
                                    this.http.post('https://washtt.com/v1_api_clientes_login.php', {
                                      idtoken: idtoken,
                                      email: email
                                    }).subscribe({
                                      next: function next(data) {
                                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                              switch (_context3.prev = _context3.next) {
                                                case 0:
                                                  this.loading.dismissLoader();
                                                  _context3.t0 = data.respuesta;
                                                  _context3.next = _context3.t0 === 'ERROR' ? 4 : _context3.t0 === 'TODO_OK' ? 7 : _context3.t0 === 'TOKEN ERROR' ? 13 : 16;
                                                  break;

                                                case 4:
                                                  this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                                    horizontalPosition: "start",
                                                    verticalPosition: "top"
                                                  });
                                                  console.log(data.mensaje);
                                                  return _context3.abrupt("break", 16);

                                                case 7:
                                                  this.wonderPush.setUserId(data.userid);
                                                  this.wonderPush.addTag('clientes');
                                                  _context3.next = 11;
                                                  return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                                                case 11:
                                                  this.router.navigate(['/tabs-cliente/tobook']);
                                                  return _context3.abrupt("break", 16);

                                                case 13:
                                                  this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                                    horizontalPosition: "start",
                                                    verticalPosition: "top"
                                                  });
                                                  console.log(data.mensaje);
                                                  return _context3.abrupt("break", 16);

                                                case 16:
                                                case "end":
                                                  return _context3.stop();
                                              }
                                            }
                                          }, _callee3, this);
                                        }));
                                      },
                                      error: function error(_error2) {
                                        _this4.loading.dismissLoader();

                                        var errorMessage = _error2.message;
                                        console.error('There was an error!');

                                        _this4.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                          horizontalPosition: "start",
                                          verticalPosition: "top"
                                        });
                                      }
                                    });

                                  case 11:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        })["catch"](function (error) {
                          _this3.loading.dismissLoader();

                          var errorMessage = error.message;
                          console.error('There was an error!' + errorMessage);

                          _this3.router.navigate(['/login']);

                          _this3.snackBar.open(errorMessage, "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top"
                          });
                        });
                      })["catch"](function (error) {
                        // Handle Errors here.
                        _this3.loading.dismissLoader();

                        var errorMessage = error.message;
                        console.error('There was an error!' + errorMessage);

                        _this3.router.navigate(['/login']);

                        _this3.snackBar.open(errorMessage, "Close", {
                          horizontalPosition: "start",
                          verticalPosition: "top"
                        });
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "loginWithGoogle",
          value: function loginWithGoogle() {
            if (this.platform.is('android')) {
              this.loginGoogleAndroid();
            } else {
              this.loginGoogleWeb();
            }
          }
        }, {
          key: "loginGoogleAndroid",
          value: function loginGoogleAndroid() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.platform.ready().then(function (readySource) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          var _this6 = this;

                          var res;
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  console.log('Platform ready from', readySource); // Platform now ready, execute any required native code

                                  _context8.next = 3;
                                  return this.googlePlus.login({
                                    'webClientId': '658811684880-1ifeco7pafvknenrf0kq6bimcae2na37.apps.googleusercontent.com',
                                    'offline': true
                                  }).then(function (res) {
                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                      var _this7 = this;

                                      var resConfirmed;
                                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                        while (1) {
                                          switch (_context7.prev = _context7.next) {
                                            case 0:
                                              _context7.next = 2;
                                              return this.angularAuth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider.credential(res.idToken));

                                            case 2:
                                              resConfirmed = _context7.sent;

                                              if (!resConfirmed) {
                                                _context7.next = 9;
                                                break;
                                              }

                                              _context7.next = 6;
                                              return this.localstorage.setObject('usuario', res);

                                            case 6:
                                              _context7.next = 8;
                                              return this.localstorage.setData('idtoken', res.idToken);

                                            case 8:
                                              this.http.post('https://washtt.com/v1_api_clientes_logingoogle.php', {
                                                idtoken: res.idToken,
                                                email: res.email,
                                                uid: res.userId,
                                                fullname: res.displayName,
                                                lname: res.familyName,
                                                fname: res.givenName,
                                                profile_imagen: res.imageUrl
                                              }).subscribe({
                                                next: function next(data) {
                                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                                      while (1) {
                                                        switch (_context6.prev = _context6.next) {
                                                          case 0:
                                                            _context6.t0 = data.respuesta;
                                                            _context6.next = _context6.t0 === 'ERROR' ? 3 : _context6.t0 === 'TOKEN ERROR' ? 6 : _context6.t0 === 'ESCLIENTE' ? 9 : 16;
                                                            break;

                                                          case 3:
                                                            this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close", {
                                                              horizontalPosition: "start",
                                                              verticalPosition: "top"
                                                            });
                                                            console.log(data.mensaje);
                                                            return _context6.abrupt("break", 16);

                                                          case 6:
                                                            this.snackBar.open("Invalid or expired token,please login again (google)", "Close", {
                                                              horizontalPosition: "start",
                                                              verticalPosition: "top"
                                                            });
                                                            console.log(data.mensaje);
                                                            return _context6.abrupt("break", 16);

                                                          case 9:
                                                            this.wonderPush.setUserId(data.userid);
                                                            this.wonderPush.addTag('clientes');
                                                            _context6.next = 13;
                                                            return this.localstorage.setData('autenticacion_tipo', 'google');

                                                          case 13:
                                                            this.router.navigate(['/tabs-cliente/tobook']);
                                                            console.log(res);
                                                            return _context6.abrupt("break", 16);

                                                          case 16:
                                                          case "end":
                                                            return _context6.stop();
                                                        }
                                                      }
                                                    }, _callee6, this);
                                                  }));
                                                },
                                                error: function error(_error3) {
                                                  var errorMessage = _error3.message;
                                                  console.error('There was an error!' + errorMessage);

                                                  _this7.snackBar.open("Sorry, an error occurred,please login again (google)", "Close", {
                                                    horizontalPosition: "start",
                                                    verticalPosition: "top"
                                                  });
                                                }
                                              });

                                            case 9:
                                            case "end":
                                              return _context7.stop();
                                          }
                                        }
                                      }, _callee7, this);
                                    }));
                                  })["catch"](function (error) {
                                    var errorMessage = error.message;
                                    console.error('There was an error!');

                                    _this6.snackBar.open(errorMessage, "Close", {
                                      horizontalPosition: "start",
                                      verticalPosition: "top"
                                    });
                                  });

                                case 3:
                                  res = _context8.sent;

                                case 4:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "loginGoogleWeb",
          value: function loginGoogleWeb() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var res, user;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.angularAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider());

                    case 2:
                      res = _context10.sent;
                      user = res.user;

                      if (!user) {
                        _context10.next = 9;
                        break;
                      }

                      _context10.next = 7;
                      return this.localstorage.setData('autenticacion_tipo', 'google');

                    case 7:
                      this.router.navigate(['/tabs-cliente/tobook']);
                      console.log(user);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "logout_regular",
          value: function logout_regular() {
            var _this8 = this;

            this.angularAuth.signOut().then(function () {
              // Sign-out successful.
              _this8.localstorage.clearData();

              _this8.router.navigate(['login']);
            })["catch"](function (error) {
              // An error happened.
              var errorMessage = error.message;
              console.error('There was an error!' + errorMessage);
            });
          }
        }, {
          key: "logout_google",
          value: function logout_google() {
            var _this9 = this;

            this.platform.ready().then(function (readySource) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var _this10 = this;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        console.log('Platform ready from', readySource); // Platform now ready, execute any required native code

                        _context12.next = 3;
                        return this.googlePlus.logout().then(function (res) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    this.localstorage.clearData();
                                    this.router.navigate(['login']);

                                  case 2:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11, this);
                          }));
                        })["catch"](function (err) {
                          console.error(err);
                        });

                      case 3:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
        }, {
          key: "register",
          value: function register(email, password, name) {
            var _this11 = this;

            this.loading.simpleLoader(); // Primero verificamos existen credenciales firebase para este usuario

            this.angularAuth.signInWithEmailAndPassword(email, password).then(function (_userCredential) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var _this12 = this;

                var data, idtoken;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (!firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.uid) {
                          _context16.next = 14;
                          break;
                        }

                        // esta en firebase
                        data = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                        _context16.next = 4;
                        return this.localstorage.setObject('usuario', data);

                      case 4:
                        _context16.next = 6;
                        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.getIdToken(true);

                      case 6:
                        idtoken = _context16.sent;
                        _context16.next = 9;
                        return this.localstorage.setData('idtoken', idtoken);

                      case 9:
                        _context16.next = 11;
                        return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                      case 11:
                        // cumplo con el registro en washtt servidor
                        this.http.post('https://washtt.com/v1_api_clientes_registro.php', {
                          name: name,
                          email: email,
                          password: password
                        }).subscribe({
                          next: function next(data) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      this.loading.dismissLoader();
                                      _context13.t0 = data.respuesta;
                                      _context13.next = _context13.t0 === 'ERROR' ? 4 : _context13.t0 === 'DUPLICADO_USUARIO' ? 7 : _context13.t0 === 'OK' ? 10 : 16;
                                      break;

                                    case 4:
                                      this.snackBar.open("Sorry, an error occurred,Please try again error 1: " + data.mensaje, "Close", {
                                        horizontalPosition: "start",
                                        verticalPosition: "top"
                                      });
                                      console.log(data.mensaje);
                                      return _context13.abrupt("break", 16);

                                    case 7:
                                      this.snackBar.open('There is already an account with this email', "Close", {
                                        duration: 3000,
                                        horizontalPosition: "start",
                                        verticalPosition: "top"
                                      });
                                      console.log(data.mensaje);
                                      return _context13.abrupt("break", 16);

                                    case 10:
                                      this.wonderPush.setUserId(data.userid);
                                      this.wonderPush.addTag('clientes');
                                      _context13.next = 14;
                                      return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                                    case 14:
                                      this.router.navigate(['/tabs-cliente/tobook']);
                                      return _context13.abrupt("break", 16);

                                    case 16:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13, this);
                            }));
                          },
                          error: function error(_error4) {
                            _this12.loading.dismissLoader();

                            var errorMessage = _error4.message;

                            _this12.snackBar.open(errorMessage, "Close", {
                              horizontalPosition: "start",
                              verticalPosition: "top"
                            });

                            console.error('There was an error!' + errorMessage);
                          }
                        });
                        _context16.next = 15;
                        break;

                      case 14:
                        //no esta en firebase
                        this.angularAuth.createUserWithEmailAndPassword(email, password).then(function (_result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                            var _this13 = this;

                            var data, idtoken;
                            return regeneratorRuntime.wrap(function _callee15$(_context15) {
                              while (1) {
                                switch (_context15.prev = _context15.next) {
                                  case 0:
                                    data = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                                    _context15.next = 3;
                                    return this.localstorage.setObject('usuario', data);

                                  case 3:
                                    _context15.next = 5;
                                    return firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.getIdToken(true);

                                  case 5:
                                    idtoken = _context15.sent;
                                    _context15.next = 8;
                                    return this.localstorage.setData('idtoken', idtoken);

                                  case 8:
                                    _context15.next = 10;
                                    return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                                  case 10:
                                    // cumplo con el registro en washtt servidor
                                    this.http.post('https://washtt.com/v1_api_clientes_registro.php', {
                                      name: name,
                                      email: email,
                                      password: password
                                    }).subscribe({
                                      next: function next(data) {
                                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                                          return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                            while (1) {
                                              switch (_context14.prev = _context14.next) {
                                                case 0:
                                                  this.loading.dismissLoader();
                                                  _context14.t0 = data.respuesta;
                                                  _context14.next = _context14.t0 === 'ERROR' ? 4 : _context14.t0 === 'DUPLICADO_USUARIO' ? 7 : _context14.t0 === 'OK' ? 10 : 16;
                                                  break;

                                                case 4:
                                                  this.snackBar.open("Sorry, an error occurred,Please try again error 1: " + data.mensaje, "Close", {
                                                    horizontalPosition: "start",
                                                    verticalPosition: "top"
                                                  });
                                                  console.log(data.mensaje);
                                                  return _context14.abrupt("break", 16);

                                                case 7:
                                                  this.snackBar.open('There is already an account with this email', "Close", {
                                                    duration: 3000,
                                                    horizontalPosition: "start",
                                                    verticalPosition: "top"
                                                  });
                                                  console.log(data.mensaje);
                                                  return _context14.abrupt("break", 16);

                                                case 10:
                                                  this.wonderPush.setUserId(data.userid);
                                                  this.wonderPush.addTag('clientes');
                                                  _context14.next = 14;
                                                  return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                                                case 14:
                                                  this.router.navigate(['/tabs-cliente/tobook']);
                                                  return _context14.abrupt("break", 16);

                                                case 16:
                                                case "end":
                                                  return _context14.stop();
                                              }
                                            }
                                          }, _callee14, this);
                                        }));
                                      },
                                      error: function error(_error5) {
                                        _this13.loading.dismissLoader();

                                        var errorMessage = _error5.message;

                                        _this13.snackBar.open(errorMessage, "Close", {
                                          horizontalPosition: "start",
                                          verticalPosition: "top"
                                        });

                                        console.error('There was an error!' + errorMessage);
                                      }
                                    });

                                  case 11:
                                  case "end":
                                    return _context15.stop();
                                }
                              }
                            }, _callee15, this);
                          }));
                        })["catch"](function (error) {
                          // Handle Errors here.
                          _this12.loading.dismissLoader();

                          var errorMessage = error.message;

                          _this12.snackBar.open("Sorry, an error occurred,Please try again error3:" + error.message, "Close", {
                            duration: 3000,
                            horizontalPosition: "start",
                            verticalPosition: "top"
                          });

                          console.error('There was an error!' + errorMessage);
                        });

                      case 15:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            });
            this.angularAuth.createUserWithEmailAndPassword(email, password).then(function (_result) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var data, idtoken;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        data = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                        _context17.next = 3;
                        return this.localstorage.setObject('usuario', data);

                      case 3:
                        _context17.next = 5;
                        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.getIdToken(true);

                      case 5:
                        idtoken = _context17.sent;
                        _context17.next = 8;
                        return this.localstorage.setData('idtoken', idtoken);

                      case 8:
                        _context17.next = 10;
                        return this.localstorage.setData('autenticacion_tipo', 'correo_pass');

                      case 10:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            })["catch"](function (error) {
              // Handle Errors here.
              _this11.loading.dismissLoader();

              var errorMessage = error.message;

              _this11.snackBar.open("Sorry, an error occurred,Please try again error3:" + error.message, "Close", {
                duration: 3000,
                horizontalPosition: "start",
                verticalPosition: "top"
              });

              console.error('There was an error!' + errorMessage);
            });
          }
        }, {
          key: "resetpassword",
          value: function resetpassword(email) {
            var _this14 = this;

            this.loading.simpleLoader();
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().sendPasswordResetEmail(email).then(function () {
              // Password reset email sent!
              // ..
              _this14.loading.dismissLoader();

              _this14.snackBar.open("An email has been sent to your account to recover your password", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });

              _this14.router.navigate(['login']);
            })["catch"](function (error) {
              _this14.loading.dismissLoader(); //var errorCode = error.code;


              var errorMessage = error.message;

              _this14.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              }); // ..

            });
          }
        }, {
          key: "cambiarpassword",
          value: function cambiarpassword(newPassword) {
            var _this15 = this;

            this.loading.simpleLoader();
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
            user.updatePassword(newPassword).then(function () {
              // Update successful.
              _this15.loading.dismissLoader();

              _this15.snackBar.open("The password was updated successfully", "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });
            })["catch"](function (error) {
              // An error ocurred
              // ...
              var errorMessage = error.message;

              _this15.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close", {
                horizontalPosition: "start",
                verticalPosition: "top"
              });
            });
          }
        }]);

        return ServicioAutenticacion;
      }();

      _ServicioAutenticacion.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
        }, {
          type: _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus
        }, {
          type: _awesome_cordova_plugins_wonderpush_ngx__WEBPACK_IMPORTED_MODULE_4__.WonderPush
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }, {
          type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }];
      };

      _ServicioAutenticacion = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
      })], _ServicioAutenticacion);
      /***/
    },

    /***/
    73258:
    /*!*******************************************!*\
      !*** ./src/app/shared/square.servicio.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScriptStore": function ScriptStore() {
          return (
            /* binding */
            _ScriptStore
          );
        },

        /* harmony export */
        "SquareServicio": function SquareServicio() {
          return (
            /* binding */
            _SquareServicio
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ScriptStore = [{
        name: 'square-sandbox',
        src: ' https://sandbox.web.squarecdn.com/v1/square.js'
      }, {
        name: 'square',
        src: 'https://web.squarecdn.com/v1/square.js'
      } //{name: 'square', src: 'https://js.squareup.com/v2/paymentform'} viejo
      ];

      var _SquareServicio = /*#__PURE__*/function () {
        function SquareServicio() {
          var _this16 = this;

          _classCallCheck(this, SquareServicio);

          this.scripts = {};

          _ScriptStore.forEach(function (script) {
            _this16.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(SquareServicio, [{
          key: "loadScripts",
          value: function loadScripts() {
            var _this17 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this17.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              if (!_this18.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this18.scripts[name].src; // @ts-ignore

                if (script.readyState) {
                  // IE
                  // @ts-ignore
                  script.onreadystatechange = function () {
                    // @ts-ignore
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      // @ts-ignore
                      script.onreadystatechange = null;
                      _this18.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this18.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script); // <--- !!!
              } else {
                console.warn('Already Loaded...');
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }, {
          key: "isAlreadyLoaded",
          value: function isAlreadyLoaded(name) {
            var _a;

            return (_a = this.scripts[name]) === null || _a === void 0 ? void 0 : _a.loaded;
          }
        }]);

        return SquareServicio;
      }();

      _SquareServicio.ctorParameters = function () {
        return [];
      };

      _SquareServicio = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _SquareServicio);
      /***/
    },

    /***/
    86945:
    /*!*******************************************!*\
      !*** ./src/app/shared/storage.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* binding */
            _StorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);

      var _StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.init();
        }

        _createClass(StorageService, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.storage.create();

                    case 2:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } // Create and expose methods that users of this service can
          // call, for example:

        }, {
          key: "setData",
          value: function setData(key, value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.storage.set(key, value);

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "setObject",
          value: function setObject(key, object) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.storage.set(key, JSON.stringify(object));

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
          /* public getObject(key: string) {
            return this.storage.get(key);
                 
           }*/

        }, {
          key: "getData",
          value: function getData(key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.storage.get(key);

                    case 2:
                      return _context21.abrupt("return", _context21.sent);

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "removeData",
          value: function removeData(key) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.storage.remove(key);

                    case 2:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "clearData",
          value: function clearData() {
            this.storage.clear().then(function () {
              return console.log('Limpiado todo localstore');
            });
          }
        }]);

        return StorageService;
      }();

      _StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _StorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _StorageService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [2239, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    46420:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-toolbar.mat-primary {\n  background: #cb033c !important;\n}\n\n::ng-deep .mat-drawer {\n  background: #cb033c !important;\n}\n\n::ng-deep tr.mat-header-row {\n  background: #cb033c !important;\n}\n\n::ng-deep .mat-table tbody {\n  background: #142f5f !important;\n}\n\n/*::ng-deep tr.example-element-row[_ngcontent-oou-c248]:not(.example-expanded-row):hover {\n\n    background: #f5f5f557 !important;  \n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFFSSw4QkFBQTtBQURKOztBQUlBO0VBRUksOEJBQUE7QUFGSjs7QUFLQTtFQUVJLDhCQUFBO0FBSEo7O0FBTUE7OztFQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuXG4gICAgYmFja2dyb3VuZDogI2NiMDMzYyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXIge1xuXG4gICAgYmFja2dyb3VuZDogI2NiMDMzYyAhaW1wb3J0YW50OyAgICBcbn1cblxuOjpuZy1kZWVwIHRyLm1hdC1oZWFkZXItcm93IHtcblxuICAgIGJhY2tncm91bmQ6ICNjYjAzM2MgIWltcG9ydGFudDsgIFxufVxuXG46Om5nLWRlZXAgLm1hdC10YWJsZSB0Ym9keSB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjMTQyZjVmICFpbXBvcnRhbnQ7ICBcbn1cblxuLyo6Om5nLWRlZXAgdHIuZXhhbXBsZS1lbGVtZW50LXJvd1tfbmdjb250ZW50LW9vdS1jMjQ4XTpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1NTcgIWltcG9ydGFudDsgIFxufSovXG5cbiJdfQ== */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map