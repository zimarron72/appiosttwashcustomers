import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';

@Component({
  selector: 'app-dealsweek',
  templateUrl: './dealsweek.component.html',
  styleUrls: ['./dealsweek.component.scss'],
})
export class DealsweekComponent implements OnInit {

  deals : any
  descuento : any
  tipocita : string

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private serviciostobook: ServiciosTobook,  
    private loading : LoadingService,
    private localstorage: StorageService
  ) { }

  ngOnInit() {

    this.doRefresh(null)
  }

  async doRefresh($event: { target: { complete: () => void; }; }) { 

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if(user) {
      this.loading.simpleLoader()
     
        this.serviciostobook.getDeals(idtoken,autenticacion_tipo).subscribe({            
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
           
            var datos = Object.values(data)
           
            this.deals = []
            for (let dato of datos) 
             {
                       
              if(dato.descuento == 0) {
                this.descuento = '-'
                }
              else {
                this.descuento = dato.descuento
              }
              switch(dato.tipocita) {
case 'citamobil':
  this.tipocita = 'Mobil'
  break;
  case 'citayarda':
    this.tipocita = 'Not Mobil'
    break;  


              }
              
              this.deals.push({
              
              dia : dato.dia,
              descuento : this.descuento,
              tipocita : this.tipocita
              })

            }
            
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
        });

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






