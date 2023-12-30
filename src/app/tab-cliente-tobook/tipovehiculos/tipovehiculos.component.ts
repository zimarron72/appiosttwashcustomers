import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';

interface Vehiculos {
  [index: number]: Vehiculo    
 
}

interface Vehiculo {

  category_id : number;
  name: string;
  category_image: string;
  ordering: number;
}

@Component({
  selector: 'app-tipovehiculos',
  templateUrl: './tipovehiculos.component.html',
  styleUrls: ['./tipovehiculos.component.scss'],
})
export class TipovehiculosComponent implements OnInit {

  vehiculos: Vehiculos; 
  user: any
  vehicle : any
 
idtoken : string
autenticacion_tipo : string
token_notificacion : string

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private serviciostobook: ServiciosTobook,  
    private loading : LoadingService,
    private localstorage: StorageService
  ) { 
    
  }

 ngOnInit() { 
   
  
       }

       ionViewWillEnter() {

        this.doRefresh(null)
       }


       async doRefresh($event: { target: { complete: () => void; }; }) {

        this.user = JSON.parse(await this.localstorage.getData('usuario'))
        this.idtoken = await this.localstorage.getData('idtoken')
        this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
        
              if(this.user)
              {     
                this.loading.simpleLoader()
           // CONSULTA API 1  VEHICULOS DE LOS SERVICIOS
             this.serviciostobook.getVehiculo(this.idtoken,this.autenticacion_tipo,this.user.email).subscribe({            
                    next: data => {
                      this.loading.dismissLoader()
                      if ($event)
                      $event.target.complete();
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

                    case 'PERFIL_INCOMPLETO':
                      this.router.navigate(['tabs-cliente/tobook/ingresarperfil/']);
                    break; 
                    
                  /*  case 'SITE_INCOMPLETO':
                      this.router.navigate(['tabs-cliente/tobook/ingresarsitio/']);
                    break;
                    
                    case 'NO_FLOTA':
                      this.router.navigate(['tabs-cliente/tobook/ingresarcamion/']);
                    break;*/
           
                   case 'CONTINUAR':
                    this.vehiculos = data  
                      console.log(this.vehiculos) 
                   
                   break;
                   default:     
                   this.vehiculos = data  
                      console.log(this.vehiculos) 
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
      
                await this.localstorage.removeData('tiporeservacion') 
  
     
    
    
    
    
    }



}














