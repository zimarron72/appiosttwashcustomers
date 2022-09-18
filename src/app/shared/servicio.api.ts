import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ServicioApi {



  constructor(private http: HttpClient, private router: Router, public storage: Storage) { }

  public async getlocalstorage(clave: any){
    return await this.storage.get(clave);
  }


  async getProfile() {
  var use = await this.getlocalstorage('user')
      var user = JSON.parse(use)
    //var user =   JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
 
    var email = user.email;
    

    this.http.post<any>('https://washtt.com/apigetprofile.php', {  email: email , id: uid }).subscribe({
      next: data => {
switch(data.respuesta) {
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
  })


}


}