import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../../shared/storage.service';
import {ServiciosTobook} from "../servicios.tobook";
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { LoadingService } from '../../shared/loading.services';

@Component({
  selector: 'app-dialogreservacion',
  templateUrl: './dialogreservacion.component.html',
  styleUrls: ['./dialogreservacion.component.scss'],
})
export class DialogreservacionComponent implements OnInit {

  precio_yarda : string
  precio_mobil : string
 
 diasemana : string

  descuentos_recargos : any

 

  constructor(public dialogo: MatDialogRef<DialogreservacionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private localstorage: StorageService,
    private serviciostobook: ServiciosTobook,  
    private router: Router,
    private loading : LoadingService,
    private snackBar: MatSnackBar, 
    ) { }


    async ngOnInit() {
      this.loading.simpleLoader()
      const formatter$ = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
      
      var date = new Date()
     var dia = date.getDay()
      switch(dia) {
        case 0:
          this.diasemana = 'sunday'
        break;
        case 1:
          this.diasemana = 'monday'
        break;
        case 2:
          this.diasemana = 'tuesday'
        break;
        case 3:
          this.diasemana = 'wednesday'
        break;
        case 4:
          this.diasemana = 'thursday'
        break;
        case 5:
          this.diasemana = 'friday'
        break;
        case 6:
          this.diasemana = 'saturday'
        break;
        

      }

      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo') 
      var precio = parseInt(await this.localstorage.getData('washprecio'))
      
      this.serviciostobook.getDescuentoRecargos(idtoken , autenticacion_tipo).subscribe({
      
        next: async descuentos_recargos => {this.descuentos_recargos = descuentos_recargos;
       
          this.descuentos_recargos = Object.values(this.descuentos_recargos)
         this.descuentos_recargos =  this.descuentos_recargos.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
      
         for (let descuentorecargo of this.descuentos_recargos) 
         {
         if(descuentorecargo.tipocita == 'citayarda' && descuentorecargo.dia == this.diasemana) {
          var precioyarda = precio + precio * descuentorecargo.recargo /100 - precio * descuentorecargo.descuento /100 
          this.precio_yarda = formatter$.format(precioyarda)
         }
         }

         for (let descuentorecargo of this.descuentos_recargos) 
         {
         if(descuentorecargo.tipocita == 'citamobil' && descuentorecargo.dia == this.diasemana) {
          var preciomobil = precio + precio * descuentorecargo.recargo /100 - precio * descuentorecargo.descuento /100 
          this.precio_mobil = formatter$.format(preciomobil)
         }
         }
        
         await this.localstorage.setData('precioyardan', precioyarda)
         await this.localstorage.setData('precio_yarda$', this.precio_yarda)

         await this.localstorage.setData('preciomobiln', preciomobil)
         await this.localstorage.setData('preciomobil$', this.precio_mobil)

         this.loading.dismissLoader() 



        },
        error: error => {
          this.loading.dismissLoader()  
          var errorMessage = error.message;        
          console.error('There was an error!' + errorMessage);
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

    mobil(): void {
      this.dialogo.close(1)
      

    }
    yarda(): void {
      this.dialogo.close(2);
      
    }

    cancel(): void {
      this.dialogo.close(3);
    
    }

    view(): void {
      this.dialogo.close(4);
    
    }

  

}
