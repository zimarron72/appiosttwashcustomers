import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';

interface Imagenes {
  [index: number]: Imagen    
 
}

interface Imagen {

  titulo : string;
  url: string;
  
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

imagenes : Imagenes;
 idtoken : string
autenticacion_tipo : string
token_notificacion : string
user: any
id : any
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private serviciostobook: ServiciosTobook,  
    private loading : LoadingService,
    private localstorage: StorageService,
    private rutaActiva: ActivatedRoute,
    private location: Location,
  ) { }

  async ngOnInit() {
  
     this.id = this.rutaActiva.snapshot.params.order_item_id;
   
    this.rutaActiva.params.subscribe(

      (params: Params) => {
        
        this.id = params.order_item_id;       
        
      }
    );
  
 this.user = JSON.parse(await this.localstorage.getData('usuario'))
    this.idtoken = await this.localstorage.getData('idtoken')
    this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if(this.user)
    {  
     // this.loading.simpleLoader()
      this.serviciostobook.getImagenesJob(this.idtoken,this.autenticacion_tipo,this.id).subscribe({ 
        next: data => {
       //   this.loading.dismissLoader()
      
          switch(data.respuesta) { 
          case 'ERROR':
            this.localstorage.clearData()
            this.router.navigate(['/login'])        
            this.snackBar.open("Sorry, an error occurred,please login again3", "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );   
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
          console.log(data.mensaje);
        break; 
        default:
  this.imagenes = data;
console.log(this.imagenes);
       
          }         
        },
        error: error => {     
        //  this.loading.dismissLoader() 
       
          var errorMessage = error.message                    
          console.error('There was an error!', errorMessage);
          this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again5", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
      }

      }); 
    }
    
    else {
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
  
  }
  
  goBack(): void {
    this.location.back();
  }

}
