import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { StorageService } from '../../shared/storage.service';
import {ServiciosProfile} from "../servicios.profile";
import { LoadingService } from '../../shared/loading.services'
import {ServicioAutenticacion} from '../../shared/servicio.autenticacion'
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {File, FileEntry} from "@awesome-cordova-plugins/file/ngx";
import { HttpClient } from "@angular/common/http";


export interface ApiResponse {
  success: string;
  object: any;
  message: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  form_username: FormGroup;
  form_password: FormGroup;
  username : string
  email: string
  password : string
  fullname : string
  address : string
  xusername : boolean = true
  xfusername : boolean = false
  xpassword : boolean = true
  xfpassword : boolean = false


  picture : string
  rostro : string =   './assets/imgs/foto_perfil.svg'

  baseUrl: string = 'https://washtt.com'




  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar, 
    private router: Router,
    private localstorage: StorageService,
    private servicioprofile : ServiciosProfile,
    private loading : LoadingService,
    private servicioauth : ServicioAutenticacion,
    private camera: Camera,
    public file: File,
    public http: HttpClient,
    



  ) { }







/******************************************************CODIGO CAMARA ************************************************* */
fromCamara() {

    

  const options: CameraOptions = {
  quality: 80,
    targetWidth: 100,
    targetHeight: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.CAMERA

 
  };

this.camera.getPicture(options).then( 
 
async ( imageData ) => {
 
/*  var base64Image = imageData;
  await this.localstorage.setData('imagen_perfil',base64Image )
  this.picture = await this.localstorage.getData('imagen_perfil')
  alert('aqui0'+this.picture)*/
   this.uploadPhoto(imageData);
   
   
   }, 
   
   (err) => {

    this.snackBar.open('Sorry, an error occurred,please try again or later' + JSON.stringify(err), "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );

   })
   
   ;



}


 /******************************************************CODIGO GALERIA********************************************* */ 

 fromGallery(): void {
  this.camera.getPicture({

    quality: 80,
    targetWidth: 100,
    targetHeight: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY    
  


  }).then(imageData => {
   // let picture = 'data:image/jpeg;base64,' + imageData;
  
   this.uploadPhoto(imageData);







  }, error => {
    console.log(JSON.stringify(error));

    this.snackBar.open('Sorry, an error occurred,please try again or later' + JSON.stringify(error), "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );




  });

}
 

 /********************************************************************************************************************* */ 


 uploadPhoto(imageFileUri: any): void {
 

  this.file.resolveLocalFilesystemUrl(imageFileUri)
    .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
    .catch(err => console.log(err));
}


async readFile(file: any) {

  var user = JSON.parse(await this.localstorage.getData('usuario'))
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

  const reader = new FileReader();
  console.log("reading file", file);
  reader.onloadend = () => {
    const formData = new FormData();
    const imgBlob = new Blob([reader.result], {type: file.type});
    formData.append('file', imgBlob, file.name);
    formData.append('email', user.email);
    formData.append('idtoken', idtoken);
    formData.append('autenticacion_tipo', autenticacion_tipo);
    this.uploadImage(formData);
  };
  reader.readAsArrayBuffer(file);
}

/* async postData(formData: FormData) {
 
  this.uploadImage(formData ).then((result: ApiResponse) => {
    this.loading.dismissLoader() 
    console.log('SUCCESS!')
alert('SUCCESS!' + result.message)
  }, (err) => {
    this.loading.dismissLoader() 
    console.log(err);
    alert('NOT SUCCESS!' + err.message)    
  });
}*/

uploadImage(formData : FormData) {

   this.loading.simpleLoader()  
  return new Promise((_resolve, _reject) => {
   /* this.post('v1_api_admin_rostro_upload.php',  formData
    )*/
    
    
    this.http.post<any>('https://washtt.com/v1_api_clientes_rostro_upload.php', formData).subscribe(
      
      
      response => {
    //  resolve(response);
  this.loading.dismissLoader()
    var datos = response
   // alert(datos.success + datos.message)
   switch(datos.success) {

case true:

this.snackBar.open("Your picture was uploaded successfully", "CONTINUE",
{       
  horizontalPosition: "start",
  verticalPosition: "top",
}
);

this.doRefresh(null);
break;
case false:
 
this.snackBar.open("Sorry, the picture could not be loaded" + datos.message, "Close",
{       
  horizontalPosition: "start",
  verticalPosition: "top",
}
);  

break;  

   }
    }, err => {
      console.log(err);
      //reject(err);
      this.loading.dismissLoader()
      this.snackBar.open("Sorry, the picture could not be loaded" + err, "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    ); 
    });
  })
}









  async ngOnInit() {

    
  }
  
  async ionViewWillEnter() {

    this.doRefresh(null)

    this.reactiveForm();

   
  }
  
  
  

  reactiveForm() {
  
   /* this.form_username = this.formBuilder.group({
      username: [, { validators: [Validators.required]}],      
    });*/



    this.form_password = this.formBuilder.group({
      password: [, { validators: [Validators.required]}],      
    });

  } 
 
 /* edit_username() {
    this.xusername = false
    this.xfusername = true
  }*/



  edit_password() {
    this.xpassword = false
    this.xfpassword = true
  }

 /* cancel_username() {
    this.xusername = true
    this.xfusername = false
  }*/


 

  cancel_password() {
    this.xpassword = true
    this.xfpassword = false
  }

/*  async submit_username() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
   

    if (this.form_username.valid) {
      var username = this.form_username.get("username").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfocuenta.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'username',
        valor : username 
      }).subscribe({
          next: async data => {
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );   
    break;

    case 'DUPLICADO_USUARIO':
             
      this.snackBar.open("Sorry, With this username there is already a registered user", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );   
    break;

    case 'TOKEN ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])         
      this.snackBar.open("Invalid or expired token,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.username = username
      this.xusername = true
    this.xfusername = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("Enter the new username", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }*/

  async submit_password() {

       if (this.form_password.valid) {
      var password = this.form_password.get("password").value;
 
      return this.servicioauth.cambiarpassword(password)
     


     }
    else
    {
      this.snackBar.open("Enter the new password", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

 
  

  async doRefresh($event: { target: { complete: () => void; }; }) {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
    this.loading.simpleLoader()
  

    if(user) {

      this.servicioprofile.getDataCuenta(idtoken,autenticacion_tipo,user.email).subscribe(
        val => { var datos = val
          this.loading.dismissLoader() 
          if ($event)
            $event.target.complete();
          switch(datos.respuesta) {
  
            case 'ERROR':
              console.log(datos.mensaje)
            break;
            case 'TOKEN ERROR':
                    this.localstorage.clearData()
                    this.router.navigate(['/login'])   
                  this.snackBar.open("Invalid or expired token,please login again4", "Close",
                  {       
                    horizontalPosition: "start",
                    verticalPosition: "top",
                  }
                  );
                  console.log(datos.mensaje);
            break;    
          
            case '200_OK':
           console.log(datos)       
  
    this.username = datos.u_name
    this.email = datos.email
    this.password = datos.password
    this.fullname = datos.fullname
    this.address = datos.street
    this.rostro = this.baseUrl+'/'+datos.rostro
  
  break;
          }   
        },
        error => {   
          this.loading.dismissLoader() 
          if ($event)
          $event.target.complete();
          console.error('There was an error!', error);
          // borramos la informacion local
  this.localstorage.clearData()
  this.router.navigate(['/login']);
  
  this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );    
      }
  
  
      )
    }
  else {
  
  // borramos la informacion local
  this.loading.dismissLoader() 
  if ($event)
            $event.target.complete();
  this.localstorage.clearData()
  this.router.navigate(['/login']);
  
  this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );    
  
  } 





  }




}
