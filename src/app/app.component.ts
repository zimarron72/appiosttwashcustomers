import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WonderPush } from '@awesome-cordova-plugins/wonderpush/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private wonderPush: WonderPush,
    private statusBar: StatusBar,
    
  ) 
  
  {

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.wonderPush.subscribeToNotifications()
      this.wonderPush.addTag('clientes')

    
      
    });
  }



 

  }


 





  




 