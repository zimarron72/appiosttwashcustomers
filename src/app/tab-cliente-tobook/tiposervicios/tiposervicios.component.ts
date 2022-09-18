import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';
interface Servicios {
  [index: number]: Servicio    
 
}

interface Servicio {

  product_id : number;
  category_id : number;
  product_price: string;
  name: string;
  image: string;
  descripcion: string;
  product_ordering: number;

  
}
@Component({
  selector: 'app-tiposervicios',
  templateUrl: './tiposervicios.component.html',
  styleUrls: ['./tiposervicios.component.scss'],
})
export class TiposerviciosComponent implements OnInit {

  servicios: Servicios; 
  vehiculo: string;
  lavado: string;
  lavadoid: number;
  user: any
  idtoken : string
  autenticacion_tipo : string
  token_notificacion : string

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private serviciostobook: ServiciosTobook,
    private rutaActiva: ActivatedRoute,
    private location: Location,
    private loading : LoadingService,
    private localstorage: StorageService

  ) { }

  ngOnInit() {

    this.doRefresh(null)

     
  }



  goBack(): void {
    this.location.back();
  }

  async doRefresh($event: { target: { complete: () => void; }; }) {

    this.user = JSON.parse(await this.localstorage.getData('usuario'))

    if(this.user)
       {
        this.loading.simpleLoader()
    this.vehiculo = this.rutaActiva.snapshot.params.vehiculo;
    this.lavado = this.rutaActiva.snapshot.params.lavado;
    this.lavadoid = this.rutaActiva.snapshot.params.lavadoid;  
    this.rutaActiva.params.subscribe(

      (params: Params) => {
        
        this.vehiculo = params.vehiculo;
        this.lavado = params.lavado;
        this.lavadoid = params.lavadoid;
        
      }
    );
  
    await this.localstorage.setData('tipolavado', this.lavado)
    this.idtoken = await this.localstorage.getData('idtoken')
    this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
  // CONSULTA API 1  LOS SERVICIOS
  
  this.serviciostobook.getServicios(this.lavadoid , this.idtoken , this.autenticacion_tipo).subscribe({
      
  next: async data => {
    this.loading.dismissLoader() 
    if ($event)
 $event.target.complete();
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
      default:     
      this.servicios = data
      var washs = Object.values(this.servicios)
      await this.localstorage.setObject('allservices', washs)   
      }  

  
  },
  error: error => {
    this.loading.dismissLoader()  
    if ($event)
 $event.target.complete();
    var errorMessage = error.message;        
    console.error('There was an error!', errorMessage);
    this.localstorage.clearData()
    this.router.navigate(['/login'])        
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      if ($event)
 $event.target.complete();
      this.localstorage.clearData()
          this.router.navigate(['/login'])    
          this.snackBar.open("Please login again ", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
       
     
     
         }


   }



}
