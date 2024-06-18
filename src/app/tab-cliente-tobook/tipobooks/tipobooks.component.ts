import { Component, OnInit   } from '@angular/core';
import { StorageService } from '../../shared/storage.service';
import {ServiciosTobook} from "../servicios.tobook";
//import { DatabaseService } from '../../shared/database-service';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
 import { LoadingService } from '../../shared/loading.services';



@Component({
  selector: 'app-tipobooks',
  templateUrl: './tipobooks.component.html',
  styleUrls: ['./tipobooks.component.scss'],
})
export class TipobooksComponent implements OnInit {

  inhold: number
  confirmed: number
  cancelled: number
  completed: number

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

    
  
    var user = JSON.parse(await this.localstorage.getData('usuario'))
   var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
    
          if(user)
          {    

            this.loading.simpleLoader()

    this.serviciotobook.getAppointments(idtoken,autenticacion_tipo,user.email).subscribe(
      val => { var datos = val
        this.loading.dismissLoader()  
        if ($event)
        $event.target.complete();

        switch(datos.respuesta) {
    
          case 'TOKEN ERROR':
            this.router.navigate(['/login']);
            this.snackBar.open("Invalid or expired token,please login again1", "Close",
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
  
      this.snackBar.open("Sorry, an error occurred,please login again2" + datos.mensaje, "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );    

    break;
        
          case '200_OK':
            this.inhold = datos.sinconfirmar
            this.confirmed = datos.confirmados
            this.completed = datos.completados
            this.cancelled = datos.cancelados      

          // VERSION 1:
 /* console.log(datos)
         var sinfiltrardatos = Object.values(datos)
          var filtradatos = sinfiltrardatos.filter(((celda: string | any[]) =>  celda !== '200_OK')) 
          console.log(filtradatos)
          this.dbservicio.UpdateOrders(filtradatos).then(()=>{  
               console.log('los appointment se sumaron a BD') 
               
               
 this.dbservicio.getItems(1).then(res => {
      this.inhold = res.length
     
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

    this.dbservicio.getItems(2).then(res => {
      this.confirmed = res.length
     
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

    this.dbservicio.getItems(7).then(res => {
      this.completed = res.length
     
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

    this.dbservicio.getItems(9).then(res => {
      this.cancelled = res.length
   
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
            
            }
            ); */
    
           
    
    
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
       
           this.snackBar.open("Sorry, an error occurred,please login again7" + error.message, "Close",
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
            
                this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );    
              }
      
           





}



}
