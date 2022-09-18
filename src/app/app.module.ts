import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  {AngularFireModule}  from '@angular/fire';
import  {AngularFireAuthModule}  from '@angular/fire/auth';



import  {environment}  from '../environments/environment';
 
//servicios
import {ServicioAutenticacion} from './shared/servicio.autenticacion';
import {ServicioApi} from './shared/servicio.api';
import { DatabaseService } from './shared/database-service';
import {StorageService} from './shared/storage.service'
import { SquareServicio } from './shared/square.servicio';
import { LoadingService } from './shared/loading.services';




// Material angular
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';



// Form

// Other
import { IonicStorageModule } from '@ionic/storage-angular';
import {HttpClientModule} from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { RouterModule} from '@angular/router';

//import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WonderPush } from '@awesome-cordova-plugins/wonderpush/ngx';











@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatSnackBarModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    MatListModule,
    RouterModule,
    
  
  ],
  providers: [SQLite,
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    WonderPush,    
       GooglePlus, 
       ServicioAutenticacion, 
       ServicioApi, 
       DatabaseService,
        StorageService,
         SquareServicio,
         LoadingService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
