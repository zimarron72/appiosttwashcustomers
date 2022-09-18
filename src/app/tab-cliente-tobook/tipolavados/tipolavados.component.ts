import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { ActivatedRoute,  Params } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';
interface Lavados {
  [index: number]: Lavado  
 
 
}

interface Lavado {

  category_id : number;
  category_parent_id: number;
  name: string;
  category_image: string;
  ordering: number;
}

@Component({
  selector: 'app-tipolavados',
  templateUrl: './tipolavados.component.html',
  styleUrls: ['./tipolavados.component.scss'],
})
export class TipolavadosComponent implements OnInit {

  lavados: Lavados; 
  vehiculoid: number;
  vehiculo: string;
  user: any
  idtoken : string
  autenticacion_tipo : string
  token_notificacion : string

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    public serviciostobook: ServiciosTobook,
    private rutaActiva: ActivatedRoute,
    private loading : LoadingService,
    private location: Location,
    private localstorage: StorageService
  ) { }

  ngOnInit() {   

    this.doRefresh(null)
  }

/*  async ionViewWillEnter() { 

    this.user = JSON.parse(await this.localstorage.getData('usuario'))

    if(this.user)
    { 
    
      this.loading.simpleLoader()
    this.vehiculoid = this.rutaActiva.snapshot.params.vehiculoid;
    this.vehiculo = this.rutaActiva.snapshot.params.vehiculo;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.vehiculoid = params.vehiculoid;
        this.vehiculo = params.vehiculo;
      }
      );

    this.idtoken = await this.localstorage.getData('idtoken')
    this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
     // CONSULTA API 1  LAVADOS DE LOS SERVICIOS
     this.serviciostobook.getLavados(this.vehiculoid , this.idtoken , this.autenticacion_tipo).subscribe({
    
      next: data => {
        this.loading.dismissLoader() 
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
          this.lavados = data   
          }  
      
      },
      error: error => {      
        this.loading.dismissLoader() 
            var errorMessage = error.message                    
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
  })

    }

    else {

      this.localstorage.clearData()
      this.router.navigate(['/login']);  
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );    
  
    }

    


  
  
  }*/


  goBack(): void {
    this.location.back();
  }


  async doRefresh($event: { target: { complete: () => void; }; }) {

    this.user = JSON.parse(await this.localstorage.getData('usuario'))

    if(this.user)
    { 
    
      this.loading.simpleLoader()
    this.vehiculoid = this.rutaActiva.snapshot.params.vehiculoid;
    this.vehiculo = this.rutaActiva.snapshot.params.vehiculo;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.vehiculoid = params.vehiculoid;
        this.vehiculo = params.vehiculo;
      }
      );

    this.idtoken = await this.localstorage.getData('idtoken')
    this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
     // CONSULTA API 1  LAVADOS DE LOS SERVICIOS
     this.serviciostobook.getLavados(this.vehiculoid , this.idtoken , this.autenticacion_tipo).subscribe({
    
      next: data => {
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
          this.lavados = data   
          }  
      
      },
      error: error => {      
        this.loading.dismissLoader()
        if ($event)
        $event.target.complete();
            var errorMessage = error.message                    
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
  })

    }

    else {
      if ($event)
      $event.target.complete();
      this.localstorage.clearData()
      this.router.navigate(['/login']);  
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );    
  
    }


   }

}
