import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,  Params } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { DatabaseService } from '../../shared/database-service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoconfirComponent } from '../dialogoconfir/dialogoconfir.component'
import { StorageService } from '../../shared/storage.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../shared/loading.services';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]
    )]
})
export class MybooksComponent implements OnInit {

  columnsToDisplay = ['Service', 'Appointment', 'Location', 'Expand']; 
  itemOrderTabla = new MatTableDataSource();
  
  n: number
  vermensaje : boolean
  vertabla : boolean

  respuesta: string
  verenlace1 : boolean = false 
  verenlace2 : boolean = false

  constructor(
 
    private snackBar: MatSnackBar, 
    private serviciotobook : ServiciosTobook,
    private dbservicio : DatabaseService,
    public dialogo: MatDialog,
    private localstorage: StorageService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private loading : LoadingService,
    private location: Location,
 
  ) { }
  ngOnInit(): void {
    this.doRefresh(null)
  }

  segmentChanged(_event: any) {
 
    if(this.respuesta == 'YES') {

      this.verenlace1 = true
  this.verenlace2  = false
      
    }
    else {

      this.verenlace1 = false
      this.verenlace2  = true
          
     
    }
    
  }


  Borrar(id: number): void {
 

  this.dialogo.open(DialogoconfirComponent, {
    data: `Be sure to permanently delete this record?`
  }).afterClosed().subscribe(async (confirmado: Boolean) => {
    if (confirmado) {

     
      var idtoken = await this.localstorage.getData('idtoken')
       var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

this.serviciotobook.deleteItemOrder(idtoken,autenticacion_tipo,id).subscribe({
next: async datos => {
switch(datos.respuesta) {

  case 'TOKEN ERROR':
    this.router.navigate(['/login']);
    this.snackBar.open("Invalid or expired token,please login again", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );
  
  break;        
 case 'ERROR':
// borramos la informacion local
this.localstorage.clearData()
this.router.navigate(['/login']);

this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
{       
horizontalPosition: "start",
verticalPosition: "top",
}
);    

break;


  case '200_OK':
    
    this.dbservicio.borrarTobook(id).then(res => {

      if(res){
           this.snackBar.open('Record successfully removed', "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      }
      else {
        this.snackBar.open('The record has not been deleted ', "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
    
      }
    
    })




  break;
  
 
  
  
  
  }  
},
error: error => {     
      
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





})
    
    } 
    
    else {
    
    }
  }); 

  



  }
  
  Cancelar(id: number): void {
 

    this.dialogo.open(DialogoconfirComponent, {
      data: `Are you sure to cancel this appointment? ?`
    }).afterClosed().subscribe(async (confirmado: Boolean) => {
      if (confirmado) {
  
        var user = JSON.parse(await this.localstorage.getData('usuario'))
        var idtoken = await this.localstorage.getData('idtoken')
         var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

  this.serviciotobook.CancelarItemOrder(idtoken,autenticacion_tipo,id,user.email).subscribe({
  next: async datos => {
  switch(datos.respuesta) {
  
    case 'TOKEN ERROR':
      this.router.navigate(['/login']);
      this.snackBar.open("Invalid or expired token,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );
    
    break;        
   case 'ERROR':
  // borramos la informacion local
  this.localstorage.clearData()
  this.router.navigate(['/login']);
  
  this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
  {       
  horizontalPosition: "start",
  verticalPosition: "top",
  }
  );    
  
  break;

  case 'MISMODIA':
    this.snackBar.open(datos.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        ); 

  break;   

  case 'DIASDESPUESCITA':
    this.snackBar.open(datos.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        ); 

  break;   


  case 'FALTAUNDIA':
    this.snackBar.open(datos.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        ); 

  break; 


    case '200_OK':
      this.snackBar.open('Appointment successfully cancelled', "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          ); 
  
    break;   
    
    }  
  },
  error: error => {     
    this.snackBar.open('The appointment has not been cancelled ', "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );    
  console.error('There was an error!', error);
  }
  
  
  
  
  
  })
     
      } 
      
      else {
      
      }
    }); 
  
    
  
  
  
    }

    async doRefresh($event: { target: { complete: () => void; }; }) { 


 

this.n = this.rutaActiva.snapshot.params.n;
this.rutaActiva.params.subscribe(
  (params: Params) => {
    this.n = params.n;    
  }
);

var user = JSON.parse(await this.localstorage.getData('usuario'))
var idtoken = await this.localstorage.getData('idtoken')
 var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
 this.loading.simpleLoader()
this.serviciotobook.getTipoAppointments(idtoken,autenticacion_tipo,user.email,this.n).subscribe(
  val => { var datos = val
    this.loading.dismissLoader() 
    if ($event)
    $event.target.complete();
    switch(datos.respuesta) {

      case 'TOKEN ERROR':
        this.router.navigate(['/login']);
        this.snackBar.open("Invalid or expired token,please login again", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      
      break;        
     case 'ERROR':
  // borramos la informacion local
  this.localstorage.clearData()
  this.router.navigate(['/login']);

  this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );    

break;

    
      //case '200_OK':

      default:

        var sinfiltrardatos = Object.values(datos)
        this.itemOrderTabla.data = sinfiltrardatos

        if(sinfiltrardatos == null) {
          this.vertabla = false
          this.vermensaje = true
         
        }
        else {
          this.vertabla = true
          this.vermensaje = false
         
        }



        

      // VERSION 1
   /*  console.log(datos)
     var sinfiltrardatos = Object.values(datos)

      var filtradatos = sinfiltrardatos.filter(((celda: string | any[]) =>  celda !== '200_OK')) 

      if(filtradatos == null) {
        this.vertabla = false
        this.vermensaje = true
      }
      else {
        this.vertabla = true
        this.vermensaje = false
      
      }
      
      console.log(filtradatos)
      this.dbservicio.UpdateOrders(filtradatos).then(()=>{  
           console.log('los appointment se sumaron a BD') 
           
           
this.dbservicio.getItems(this.n).then(res => { 

  if(res == null) {
    this.vertabla = false
    this.vermensaje = true
  }
  else {
    this.vertabla = true
    this.vermensaje = false
  
  }
    this.itemOrderTabla.data = res
    console.log(this.itemOrderTabla.data)

  
},
(err)=>{
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
  console.log(err)}


)

       
        },
        (err) => {console.log('ocurrio un error'+err)

        if ($event)
        $event.target.complete();
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
        ); */

       


      //break;
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


    goBack(): void {
      this.location.back();
    }  
   
  }







