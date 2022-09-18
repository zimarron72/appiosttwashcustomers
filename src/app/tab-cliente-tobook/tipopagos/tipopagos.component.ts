import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../shared/storage.service';
import {ServiciosTobook} from "../servicios.tobook";
//import { DatabaseService } from '../../shared/database-service';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { LoadingService } from '../../shared/loading.services';
@Component({
  selector: 'app-tipopagos',
  templateUrl: './tipopagos.component.html',
  styleUrls: ['./tipopagos.component.scss'],
})
export class TipopagosComponent implements OnInit {

  inview: number
  admitted: number
  reject: number
 

  constructor(
    private localstorage: StorageService,
   // private dbservicio : DatabaseService,
    private serviciotobook : ServiciosTobook,
    private router: Router,
    private snackBar: MatSnackBar,
    private loading : LoadingService,

  ) { }

  ngOnInit() {

    this.doRefresh(null)
  }



  async doRefresh($event: { target: { complete: () => void; }; }) {
  
    this.loading.simpleLoader()
    var user = JSON.parse(await this.localstorage.getData('usuario'))
   var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
    



    this.serviciotobook.getPays(idtoken,autenticacion_tipo,user.email).subscribe(
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
  
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );    

    break;
          
                 
          case '200_OK':
    
            this.inview = datos.enrevision
            this.admitted = datos.aceptados
            this.reject = datos.negados
          
         /*console.log(datos)
         var sinfiltrardatos = Object.values(datos)
          var filtradatos = sinfiltrardatos.filter(((celda: string | any[]) =>  celda !== '200_OK')) 
          console.log(filtradatos)
          this.dbservicio.UpdatePays(filtradatos).then(()=>{  
               console.log('los pays se sumaron a BD') 
               
               
 this.dbservicio.getPays('Verifying').then(res => {
      this.inview = res.length
     
    },
    (err)=> {// borramos la informacion local
    
    this.localstorage.clearData()
    this.router.navigate(['/login']);

    this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );   } )

    this.dbservicio.getPays('Processed').then(res => {
      this.admitted = res.length
     
    },
    (err)=>{
   
      console.log(err)
        // borramos la informacion local
        this.localstorage.clearData()
        this.router.navigate(['/login']);
    
        this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );    
    
    })

    this.dbservicio.getPays('Denied').then(res => {
      this.reject = res.length
     
    },
    (err)=>{
      console.log(err)
        // borramos la informacion local
        this.localstorage.clearData()
        this.router.navigate(['/login']);
    
        this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );    
    
    })


    
           
            },
            (err) => {
              console.log(err)
                // borramos la informacion local
                this.localstorage.clearData()
                this.router.navigate(['/login']);
            
                this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
            ); 
    
              })*/
    
    
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

}
