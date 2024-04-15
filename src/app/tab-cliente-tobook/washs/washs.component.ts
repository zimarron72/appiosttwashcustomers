import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { StorageService } from '../../shared/storage.service';
import { DialogreservacionComponent } from '../dialogreservacion/dialogreservacion.component';
import { MatDialog } from '@angular/material/dialog';

import { LoadingService } from '../../shared/loading.services';

@Component({
  selector: 'app-washs',
  templateUrl: './washs.component.html',
  styleUrls: ['./washs.component.scss'],
})
export class WashsComponent implements OnInit {

 washname : string
 washlavado : string
 washvehiculo : string
 washdescripcion : string
 washid : number;
 washprecio : string
 washpreciomobil : string

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private rutaActiva: ActivatedRoute,
   
    private localstorage: StorageService,
    private loading : LoadingService,
    public dialogo: MatDialog,

  ) { }

  async ngOnInit() {

    await this.localstorage.getData('usuario').then(
 
 (val)=>{
   var user  = JSON.parse(val);
   if(user)
   {
 
   this.washname = this.rutaActiva.snapshot.params.washname;
   this.washlavado = this.rutaActiva.snapshot.params.washlavado;
   this.washvehiculo = this.rutaActiva.snapshot.params.washvehiculo;
   this.washdescripcion = this.rutaActiva.snapshot.params.washdescripcion;
 this.washid = this.rutaActiva.snapshot.params.washid
 this.washprecio = this.rutaActiva.snapshot.params.washprecio
 this.washpreciomobil = this.rutaActiva.snapshot.params.washpreciomobil
   this.rutaActiva.params.subscribe(
     async (params: Params) => {
       this.washname = params.washname;
       this.washlavado = params.washlavado;
       this.washvehiculo = params.washvehiculo;
       this.washdescripcion = params.washdescripcion;
       this.washid = params.washid
       this.washprecio = params.washprecio
       this.washpreciomobil = params.washpreciomobil
       await this.localstorage.setData('washpreciomobil', this.washpreciomobil)
       await this.localstorage.setData('washprecio', this.washprecio)
       await this.localstorage.setData('tipovehiculo', this.washlavado) 
       
     }
   );
 
   }
   else {
     // borramos la informacion local
     this.localstorage.clearData()
         this.router.navigate(['/login'])    
         this.snackBar.open("Please login again ", "Close",
         {       
           horizontalPosition: "start",
           verticalPosition: "top",
         }
         );
      
    
    
        }
 },
 (err)=> {
   
 console.log(err)
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


reservarnow() {
  this.dialogo.open(DialogreservacionComponent, {
    data: `Please select your type of reservation `
  }).afterClosed().subscribe(async (confirmado: number) => {
    switch(confirmado) {
case 1: 

await this.localstorage.setData('tiporeservacion','citamobil')
var washs = JSON.parse(await this.localstorage.getData('allservices'))

      for (let wash of washs) 
     
       {
         if(wash.product_id == this.washid) {
         //  localStorage.setItem('servicio', JSON.stringify(servicio))
           await this.localstorage.setObject('servicio', wash)
       }
       }
     
    

       this.router.navigate(['tabs-cliente/tobook/citamobil']);
  
  

break;

case 2:
  
  await this.localstorage.setData('tiporeservacion','citayarda')
  var washs = JSON.parse(await this.localstorage.getData('allservices'))

  for (let wash of washs) 
 
   {
     if(wash.product_id == this.washid) {
     //  localStorage.setItem('servicio', JSON.stringify(servicio))
       await this.localstorage.setObject('servicio', wash)
   }
   }
 
  this.router.navigate(['tabs-cliente/tobook/citayarda']);
   
break;

case 3:
  this.router.navigate(['tabs-cliente/tobook']);
break; 
case 4:
  this.router.navigate(['tabs-cliente/tobook/dealsweek']);
break; 
    }
  }); 
}

cancel() {
  this.router.navigate(['/tabs-cliente/tobook']);

}






}
