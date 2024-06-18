import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,  Params } from '@angular/router';
import {ServiciosTobook} from "../servicios.tobook";
//import { DatabaseService } from '../../shared/database-service';
import { StorageService } from '../../shared/storage.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { LoadingService } from '../../shared/loading.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mypays',
  templateUrl: './mypays.component.html',
  styleUrls: ['./mypays.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]
    )]
})
export class MypaysComponent implements OnInit {

  columnsToDisplay = ['service', 'order_number', 'Expand']; 
  itemPagosTabla = new MatTableDataSource();
  
  p: string

colorp: string
colorpx: string

  constructor(
 
    private serviciotobook : ServiciosTobook,
    //private dbservicio : DatabaseService,
    private localstorage: StorageService,
    private rutaActiva: ActivatedRoute,
    private snackBar: MatSnackBar, 
    private router: Router,
    private loading : LoadingService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.doRefresh(null)

  }

 

  goBack(): void {
    this.location.back();
  }  

  async doRefresh($event: { target: { complete: () => void; }; }) {

    this.loading.simpleLoader()

    this.p = this.rutaActiva.snapshot.params.p;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.p = params.p;    
      }
    );
  
  switch(this.p) {  
  case 'Denied':
  this.colorp = "#ffc409"
  this.colorpx = "rgb(36, 42, 49)"
  break
  case 'Processed':
  this.colorp = "#42d77d"
  this.colorpx = "rgb(36, 42, 49)"
  break  
  default:
   this.colorp = ""
   this.colorpx = ""
  break
  
  }
    
    

    var user = JSON.parse(await this.localstorage.getData('usuario'))
var idtoken = await this.localstorage.getData('idtoken')
 var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')


    this.serviciotobook.getTipoPays(idtoken,autenticacion_tipo,user.email, this.p).subscribe(
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
        
          default:


      
            var sinfiltrardatos = Object.values(datos)
            this.itemPagosTabla.data = sinfiltrardatos
    
       /*  console.log(datos)
         var sinfiltrardatos = Object.values(datos)
          var filtradatos = sinfiltrardatos.filter(((celda: string | any[]) =>  celda !== '200_OK')) 
          console.log(filtradatos)
          this.dbservicio.UpdatePays(filtradatos).then(()=>{  
               console.log('los pagos se sumaron a BD') 
               
               
    this.dbservicio.getPays(this.p).then(res => {
    
     
    
     
    
        this.itemPagosTabla.data = res
        console.log(this.itemPagosTabla.data)
    
      
    },
    (err)=>{
    // borramos la informacion local
    this.localstorage.clearData()
    this.router.navigate(['/login']);

    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );    
  console.log(err)})
           
            },
            (err) => {
              // borramos la informacion local
              this.localstorage.clearData()
              this.router.navigate(['/login']);
          
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              );    
            console.log(err)}
            ); */
    
           
    
    
       
        }   
    
    
      },
      error => {     
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
 
 
  


}
