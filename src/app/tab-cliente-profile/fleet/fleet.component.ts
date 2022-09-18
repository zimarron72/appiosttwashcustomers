import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import {ServiciosProfile} from "../servicios.profile";
import { StorageService } from '../../shared/storage.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { LoadingService } from '../../shared/loading.services';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]
    )]
})
export class FleetComponent implements OnInit {

  datauser : any
  
  columnsToDisplay = ['unit_number', 'type_vehicle',  'Expand']; 
  itemTabla = new MatTableDataSource(); 

  fleet : any

  constructor(
    
    private servicioprofile : ServiciosProfile,    
    private localstorage: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loading : LoadingService,

  ) { }

  async ngOnInit() {

    this.doRefresh(null)

  }

/*  async ionViewWillEnter() {
  
    var user = JSON.parse(await this.localstorage.getData('usuario'))
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
  
      if(user) {
        this.loading.simpleLoader()
    this.servicioprofile.getFleet(idtoken,autenticacion_tipo,user.email).subscribe(
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

          
          this.fleet = Object.values(datos)
          this.fleet =  this.fleet.filter(((valor: string | any[]) => valor !== '200_OK'))

          this.itemTabla.data = this.fleet
          break;

          
        }    



      },
      error => {  
        this.loading.dismissLoader()   
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
  this.servicioprofile.getFleet(idtoken,autenticacion_tipo,user.email).subscribe(
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

        
        this.fleet = Object.values(datos)
        this.fleet =  this.fleet.filter(((valor: string | any[]) => valor !== '200_OK'))

        this.itemTabla.data = this.fleet
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

  async Borrar(id : number) {
    this.loading.simpleLoader()
  var user = JSON.parse(await this.localstorage.getData('usuario'))
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')


  this.servicioprofile.deleteTruck(idtoken,autenticacion_tipo,id,user.email).subscribe(
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
                  
  this.snackBar.open("Sorry, Cannot be deleted: your fleet must contain at least one vehicle ", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );
break;
      
        case '200_OK':
          this.router.navigate(['/tabs-cliente/profile']); 
     

      
          this.snackBar.open('Vehicle deleted successfully ', "Close",
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

  this.router.navigate(['tabs-cliente/profile/addcar/']);

}

}
