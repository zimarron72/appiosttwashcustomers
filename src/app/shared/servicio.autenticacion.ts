import  {Injectable}  from '@angular/core';
import { Router } from  "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { AngularFireAuth } from  "@angular/fire/auth";
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { StorageService } from './storage.service';
import { LoadingService } from '../shared/loading.services';
import firebase from 'firebase/app';
import { WonderPush } from '@awesome-cordova-plugins/wonderpush/ngx';






@Injectable({
    providedIn: 'root' }
  )
  
  export class ServicioAutenticacion {

  

    constructor( 
      private  angularAuth:  AngularFireAuth, 
      private  router:  Router,
      private snackBar : MatSnackBar, 
      private http : HttpClient, 
      private platform: Platform, 
      private googlePlus: GooglePlus,
      private wonderPush: WonderPush,
      private localstorage: StorageService,
      private loading : LoadingService,
     

 
      )  {
   
  
    }








    async login(email: string, password: string) {
      this.loading.simpleLoader();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
         
     
 this.angularAuth.signInWithEmailAndPassword(email, password).then(async (_userCredential) => {

  var data = firebase.auth().currentUser
  await this.localstorage.setObject('usuario',data)
  var idtoken = await firebase.auth().currentUser.getIdToken(true)
  await this.localstorage.setData('idtoken',idtoken)
var email = data.email

console.log(idtoken)


this.http.post<any>('https://washtt.com/v1_api_clientes_login.php',  {idtoken : idtoken , email : email}   ).subscribe({

 
    next: async data => {

      this.loading.dismissLoader()   

switch(data.respuesta) {
case 'ERROR':

  this.snackBar.open("Sorry, an error occurred,please login again", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );
console.log(data.mensaje);
break;

case 'TODO_OK':     
this.wonderPush.setUserId(data.userid)
this.wonderPush.addTag('clientes')
await this.localstorage.setData('autenticacion_tipo','correo_pass')
this.router.navigate(['/tabs-cliente/tobook']);
break; 
case 'TOKEN ERROR':
 
  this.snackBar.open("Invalid or expired token,please login again", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );
  console.log(data.mensaje);
break; 
}             
    },
    error: error => {

      this.loading.dismissLoader()  

        var errorMessage = error.message;        
        console.error('There was an error!');       
        this.snackBar.open("Sorry, an error occurred,please login again", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
    }
})

}).catch((error) => {

  this.loading.dismissLoader()  

  var errorMessage = error.message;        
  console.error('There was an error!' + errorMessage);

  this.router.navigate(['/login']);
  this.snackBar.open(errorMessage, "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );
})

}).catch((error) => {
  // Handle Errors here.
  this.loading.dismissLoader()  

  var errorMessage = error.message;        
  console.error('There was an error!' + errorMessage);

  this.router.navigate(['/login']);
  this.snackBar.open(errorMessage, "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );
});

 
  
  }

  loginWithGoogle(){

    if (this.platform.is('android')) {
      this.loginGoogleAndroid();
    } else {
      this.loginGoogleWeb();
    }
  
       
   }

  async loginGoogleAndroid() {

    this.platform.ready().then(async (readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code

      const res = await this.googlePlus.login({
        'webClientId': '658811684880-1ifeco7pafvknenrf0kq6bimcae2na37.apps.googleusercontent.com',
        'offline': true
      }).then(async res => 
        {
          
          const resConfirmed =   await this.angularAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          if(resConfirmed) {


            
            await this.localstorage.setObject('usuario',res)
            await this.localstorage.setData('idtoken',res.idToken)

            this.http.post<any>('https://washtt.com/v1_api_clientes_logingoogle.php',  {
              idtoken : res.idToken , 
              email : res.email , 
              uid : res.userId , 
              fullname : res.displayName , 
              lname : res.familyName , 
              fname : res.givenName,
              profile_imagen : res.imageUrl,              
            }   ).subscribe({ 
              next: async data => {
            switch(data.respuesta) {
              case 'ERROR':
                
                this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );
              console.log(data.mensaje);
              break;
              case 'TOKEN ERROR':               
                this.snackBar.open("Invalid or expired token,please login again (google)", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );
                console.log(data.mensaje);
              break;
              case 'ESCLIENTE':

                this.wonderPush.setUserId(data.userid)
                this.wonderPush.addTag('clientes')
                await this.localstorage.setData('autenticacion_tipo','google')
                this.router.navigate(['/tabs-cliente/tobook']);
                console.log(res)
              break; 
}
            
              },
              
               error: error => {
        var errorMessage = error.message;        
        console.error('There was an error!' + errorMessage);
        
        this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
              }
          })
          }
          
       
      }).catch(error => {
        
        var errorMessage = error.message;        
  console.error('There was an error!');

  this.snackBar.open(errorMessage, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );

  
      
      })

      });   
  
}

  async loginGoogleWeb() {
  
    const res = await this.angularAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    if(user) {
      await this.localstorage.setData('autenticacion_tipo','google')
      this.router.navigate(['/tabs-cliente/tobook']);      
    console.log(user);
  }

}

 


  logout_regular(){
        this.angularAuth.signOut().then(() => {
      // Sign-out successful.
           this.localstorage.clearData()
        this.router.navigate(['login']);
    }).catch((error) => {
      // An error happened.
      var errorMessage = error.message;             
      console.error('There was an error!' + errorMessage);
    });
  }

  logout_google() {
    this.platform.ready().then(async (readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code

      await this.googlePlus.logout().then(async res => 
        {
          
          this.localstorage.clearData()
          this.router.navigate(['login']);
          
       
      }).catch(err => {
        
        console.error(err)
      
      })




    })

  }






register(email: string, password: string, name: string) {
  this.loading.simpleLoader()
// Primero verificamos existen credenciales firebase para este usuario
this.angularAuth.signInWithEmailAndPassword(email, password).then(async (_userCredential) => {
 if(firebase.auth().currentUser.uid) { // esta en firebase
  var data = firebase.auth().currentUser
  await this.localstorage.setObject('usuario',data)
  var idtoken = await firebase.auth().currentUser.getIdToken(true)
  await this.localstorage.setData('idtoken',idtoken)
  await this.localstorage.setData('autenticacion_tipo','correo_pass')
  // cumplo con el registro en washtt servidor
  this.http.post<any>('https://washtt.com/v1_api_clientes_registro.php', {  
    name: name , email: email , password: password  }).subscribe({
    next: async data => {
      this.loading.dismissLoader()   
       switch(data.respuesta) 
       {
         case 'ERROR':
          this.snackBar.open("Sorry, an error occurred,Please try again error 1: " + data.mensaje, "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );   
          console.log(data.mensaje)
         break;
         case 'DUPLICADO_USUARIO':
          this.snackBar.open('There is already an account with this email', "Close",
          {  
            duration : 3000,     
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje)   
         break;
         case 'OK':
          this.wonderPush.setUserId(data.userid)
          this.wonderPush.addTag('clientes')
          await this.localstorage.setData('autenticacion_tipo','correo_pass')
          this.router.navigate(['/tabs-cliente/tobook']);
         break;  
  
       }
  
    },
    error: error => {
      this.loading.dismissLoader()   
        var errorMessage = error.message;
        this.snackBar.open(errorMessage, "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );
  
        console.error('There was an error!'+ errorMessage);
    
    }
  })
 }

 else { //no esta en firebase

  this.angularAuth.createUserWithEmailAndPassword(email, password).then(async (_result : firebase.auth.UserCredential) => {

   

    var data = firebase.auth().currentUser
  await this.localstorage.setObject('usuario',data)
  var idtoken = await firebase.auth().currentUser.getIdToken(true)
  await this.localstorage.setData('idtoken',idtoken)
  await this.localstorage.setData('autenticacion_tipo','correo_pass')

// cumplo con el registro en washtt servidor
this.http.post<any>('https://washtt.com/v1_api_clientes_registro.php', {  
  name: name , email: email , password: password  }).subscribe({
  next: async data => {
    this.loading.dismissLoader()   
     switch(data.respuesta) 
     {
       case 'ERROR':
        this.snackBar.open("Sorry, an error occurred,Please try again error 1: " + data.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );   
        console.log(data.mensaje)
       break;
       case 'DUPLICADO_USUARIO':
        this.snackBar.open('There is already an account with this email', "Close",
        {  
          duration : 3000,     
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
        console.log(data.mensaje)   
       break;
       case 'OK':
        this.wonderPush.setUserId(data.userid)
        this.wonderPush.addTag('clientes')
        await this.localstorage.setData('autenticacion_tipo','correo_pass')
        this.router.navigate(['/tabs-cliente/tobook']);
       break;  

     }

  },
  error: error => {
    this.loading.dismissLoader()   
      var errorMessage = error.message;
      this.snackBar.open(errorMessage, "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );

      console.error('There was an error!'+ errorMessage);
  
  }
})

  
  }).catch((error) => {
    // Handle Errors here.
    this.loading.dismissLoader()   
    var errorMessage = error.message;
    this.snackBar.open("Sorry, an error occurred,Please try again error3:" + error.message , "Close",
    {  
      duration : 3000,  
      horizontalPosition: "start",
      verticalPosition: "top",
    });
    console.error('There was an error!'+ errorMessage);
  });

 }



})






  
  
  this.angularAuth.createUserWithEmailAndPassword(email, password).then(async (_result : firebase.auth.UserCredential) => {

   

    var data = firebase.auth().currentUser
  await this.localstorage.setObject('usuario',data)
  var idtoken = await firebase.auth().currentUser.getIdToken(true)
  await this.localstorage.setData('idtoken',idtoken)
  await this.localstorage.setData('autenticacion_tipo','correo_pass')



  
  }).catch((error) => {
    // Handle Errors here.
    this.loading.dismissLoader()   
    var errorMessage = error.message;
    this.snackBar.open("Sorry, an error occurred,Please try again error3:" + error.message , "Close",
    {  
      duration : 3000,  
      horizontalPosition: "start",
      verticalPosition: "top",
    });
    console.error('There was an error!'+ errorMessage);
  });

}


resetpassword(email : string) {
  this.loading.simpleLoader()

  firebase.auth().sendPasswordResetEmail(email).then(() => {
    // Password reset email sent!
    // ..
    this.loading.dismissLoader()   

    this.snackBar.open("An email has been sent to your account to recover your password", "Close",
    {      
      horizontalPosition: "start",
      verticalPosition: "top",
    });
    
    this.router.navigate(['login']);

  }).catch((error) => {
    this.loading.dismissLoader() 
    //var errorCode = error.code;
    var errorMessage = error.message;

    this.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close",
    {      
      horizontalPosition: "start",
      verticalPosition: "top",
    });
    // ..
  });




}

cambiarpassword(newPassword : string) {
  this.loading.simpleLoader()
  const user = firebase.auth().currentUser;
 
  user.updatePassword(newPassword).then(() => {
    // Update successful.
    this.loading.dismissLoader()   

    this.snackBar.open("The password was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }         
      );

  }).catch((error) => {
    // An error ocurred
    // ...
    var errorMessage = error.message;

    this.snackBar.open('Sorry, an error occurred: ' + errorMessage + 'Please try again', "Close",
    {      
      horizontalPosition: "start",
      verticalPosition: "top",
    });
 



  });
  
}






  }




