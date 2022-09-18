import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import {ServiciosProfile} from "../servicios.profile";
import { StorageService } from '../../shared/storage.service';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { LoadingService } from '../../shared/loading.services';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]
    )]
})
export class LocationsComponent implements OnInit {
  datauser : any
  columnsToDisplay = ['suite', 'zip',  'Expand']; 
  itemTabla = new MatTableDataSource(); 

  locations: any

  constructor(
    private servicioprofile : ServiciosProfile,    
    private localstorage: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loading : LoadingService,
  ) { }

  ngOnInit() {
    this.doRefresh(null)

  }

  /*async ionViewWillEnter() {
   
    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if(user) {
      this.loading.simpleLoader()
    this.servicioprofile.getLocations(idtoken,autenticacion_tipo,user.email).subscribe(
      val => { var datos = val
        this.loading.dismissLoader()  
        switch(datos.respuesta) {

          case 'ERROR':
            console.log(datos.mensaje)
            this.localstorage.clearData()
            this.router.navigate(['/login']);
            
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
          console.log(datos.mensaje);
          break;   
        
          case '200_OK':

          
          this.locations = Object.values(datos)
          this.locations =  this.locations.filter(((valor: string | any[]) => valor !== '200_OK'))

          this.itemTabla.data = this.locations



          break;
        }    



      },
      error => {   
        this.loading.dismissLoader()       
        console.error('There was an error!', error);
          // borramos la informacion local
    this.localstorage.clearData()
    this.router.navigate(['/login']);
    
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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


  async doRefresh($event: { target: { complete: () => void; }; }) { 

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if(user) {

      this.loading.simpleLoader()

    this.servicioprofile.getLocations(idtoken,autenticacion_tipo,user.email).subscribe(
      val => { var datos = val    
        this.loading.dismissLoader() 
        if ($event)
        $event.target.complete();
        switch(datos.respuesta) {

          case 'ERROR':
            console.log(datos.mensaje)
            this.localstorage.clearData()
            this.router.navigate(['/login']);
            
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
          console.log(datos.mensaje);
          break;   
        
          case '200_OK':

          
          this.locations = Object.values(datos)
          this.locations =  this.locations.filter(((valor: string | any[]) => valor !== '200_OK'))

          this.itemTabla.data = this.locations



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
    
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );   
    }


    )
  }

  else {
    if ($event)
    $event.target.complete();
  // borramos la informacion local
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



  async Borrar(id : number , status : number) {
    this.loading.simpleLoader()
    
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    this.servicioprofile.deleteSitio(idtoken,autenticacion_tipo,id,status).subscribe(
      val => { var datos = val
        this.loading.dismissLoader()  
        switch(datos.respuesta) {
          case 'ERROR':
            console.log(datos.mensaje)
            this.localstorage.clearData()
            this.router.navigate(['/login']);
            
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
          console.log(datos.mensaje);
          break; 
          
          case 'NO BORRAR':
                  
            this.snackBar.open("Sorry, Cannot be deleted: the site is your current billing address", "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
          break;
        
          case '200_OK':
  
     
            this.router.navigate(['/tabs-cliente/profile']); 
        
            this.snackBar.open('Location deleted successfully ', "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
  
  
  break;
        }    
  
  
  
      },
      error => {     
        this.loading.dismissLoader()  
        console.error('There was an error!', error);

        this.localstorage.clearData()
  this.router.navigate(['/login']);
  
  this.snackBar.open("Sorry, an error occurred,please login again", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );   
    }
  
  
    )
  
  
  }

  add() {

    this.router.navigate(['tabs-cliente/profile/addsitio/']);
  
  }

}
