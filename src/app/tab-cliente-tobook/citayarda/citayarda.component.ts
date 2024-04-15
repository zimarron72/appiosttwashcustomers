import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { ServiciosTobook } from '../servicios.tobook';
import { StorageService } from '../../shared/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogaddvehiculoComponent } from '../dialogaddvehiculo/dialogaddvehiculo.component';


@Component({
  selector: 'app-citayarda',
  templateUrl: './citayarda.component.html',
  styleUrls: ['./citayarda.component.scss'],
})
export class CitayardaComponent implements OnInit {

  minDate: Date

  vehicle : any
  servicio : any

 etiquetax : string
  valorx : number
  selectedOption : any
  selectedOption1 : any

  form_tobookyarda: FormGroup;
 
  vehiculoscliente: any;
  horario = [
    { etiqueta: 'Select' , valor: ''},
{ etiqueta: '09:00 a.m' , valor: '09:00 a.m'},
{ etiqueta: '09:30 a.m' , valor: '09:30 a.m'},
{ etiqueta: '10:00 a.m' , valor: '10:00 a.m'},
{ etiqueta: '10:30 a.m' , valor: '10:30 a.m'},
{ etiqueta: '11:00 a.m' , valor: '11:00 a.m'},
{ etiqueta: '11:30 a.m' , valor: '11:30 a.m'},
{ etiqueta: '12:00 a.m' , valor: '12:00 a.m'},
{ etiqueta: '12:30 a.m' , valor: '12:30 a.m'},
{ etiqueta: '01:00 p.m' , valor: '01:00 p.m'},
{ etiqueta: '01:30 p.m' , valor: '01:30 p.m'},
{ etiqueta: '02:00 p.m' , valor: '02:00 p.m'},
{ etiqueta: '02:30 p.m' , valor: '02:30 p.m'},
{ etiqueta: '03:00 p.m' , valor: '03:00 p.m'},
{ etiqueta: '03:30 p.m' , valor: '03:30 p.m'},
{ etiqueta: '04:00 p.m' , valor: '04:00 p.m'},
{ etiqueta: '04:30 p.m' , valor: '04:30 p.m'},
{ etiqueta: '05:00 p.m' , valor: '05:00 p.m'},
{ etiqueta: '05:30 p.m' , valor: '05:30 p.m'},
{ etiqueta: '06:00 p.m' , valor: '06:00 p.m'},
{ etiqueta: '06:30 p.m' , valor: '06:30 p.m'},
   ]

p : any

date : any;

sitiosyard : any

tipovehiculo : any

  constructor(
    private snackBar: MatSnackBar, private formBuilder: FormBuilder,
    private router: Router,
    private serviciotobook : ServiciosTobook,
    private localstorage: StorageService,
    private dialogo: MatDialog,

  ) { }

  ngOnInit() {

  
    this.doRefresh(null)

  }


  async doRefresh($event: { target: { complete: () => void; }; }){

    this.etiquetax = 'Add a new vehicle'
    this.valorx = 1
    this.selectedOption = 0
    this.selectedOption1 = 0 

    const currentYear = new Date().getFullYear()
    const currentMes = new Date().getMonth()
    const currentDia = new Date().getDate()  

    this.minDate = new Date(currentYear , currentMes , currentDia + 1);
    
    
   
    

    this.form_tobookyarda = this.formBuilder.group({
      yard: [, { validators: [Validators.required]}],
      vehicle: [, { validators: [Validators.required] }],
      diacita: [, { validators: [Validators.required] }],
      horacita: [, { validators: [Validators.required] }],
      
    });
    
     this.localstorage.getData('tipovehiculo').then(
     async (val)=> {  
     
     this.tipovehiculo = val
     }       
    
    );
   




    this.localstorage.getData('usuario').then(
      async (val)=> {
        var user  = JSON.parse(val);
        var idtoken = await this.localstorage.getData('idtoken')
        var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')   

        this.serviciotobook.getSitiosYard(idtoken,autenticacion_tipo).subscribe({
      
          next: async sitiosyard => {this.sitiosyard = sitiosyard;
          
            this.sitiosyard = Object.values(this.sitiosyard)
            this.sitiosyard =  this.sitiosyard.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
        
          //  localStorage.setItem('formsitescliente', JSON.stringify(this.sitioscliente))
          await this.localstorage.setObject('formsitesyard', this.sitiosyard)
        
            console.log(this.sitiosyard)
          
          },
          error: error => {
            if ($event)
              $event.target.complete();    
            var errorMessage = error.message;          
            console.error('There was an error!' + errorMessage);
            this.localstorage.clearData()
            this.router.navigate(['/login'])   
            this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
        }
        });





        
        this.serviciotobook.getVehiculosCliente(idtoken, autenticacion_tipo, user.email).subscribe({
              
          next: async vehiculoscliente => {this.vehiculoscliente = vehiculoscliente;
          
            this.vehiculoscliente = Object.values(this.vehiculoscliente)
            this.vehiculoscliente =  this.vehiculoscliente.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
        
        await this.localstorage.setObject('formvehiculoscliente', this.vehiculoscliente)
            console.log(this.vehiculoscliente)
          
          },
          error: error => {
            if ($event)
              $event.target.complete();  
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
      
      },
      (err)=> console.log(err)
      
      
          )

             
this.serviciotobook.getDiasProhibidos().subscribe({

            next: diasprohibidos => {
              if ($event)
                $event.target.complete();
             this.p = diasprohibidos
            
          console.log(this.p)
          
          
            },
          
            error: error => {
              if ($event)
                $event.target.complete();
              var errorMessage = error.message; 
              this.localstorage.clearData()
              this.router.navigate(['/login'])              
              console.error('There was an error!' + errorMessage);
              this.snackBar.open("Sorry, an error occurred,please login again (google)", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              );

            }
          
          
          })



  }

 dateFilter: (date: Date | null) => boolean =
  (date: Date | null) => {
    const day =  (date.getMonth() + 1) + '-' + date.getDate()  + '-' + date.getFullYear()
  
    if (this.p.includes(day)) { 
      return false
  } else { 
      return true
  }   
} 
   

async submit() {
if (this.form_tobookyarda.valid) {
var vehiculoid =  this.form_tobookyarda.get("vehicle").value    
    switch(vehiculoid){
    
    case 0:
      this.snackBar.open("Please select a vehicle", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }     
      
      );
    break;
    
    default:     

  

      var diacita = this.form_tobookyarda.get("diacita").value;
        var date = new Date(diacita);
        var dia = date.getDate();
        var mesIndex = date.getMonth();
        var year = date.getFullYear();

        if(mesIndex >= 9) {
        diacita = (mesIndex+1)+'-'+dia+'-'+year;
        }
        else {
        diacita = '0'+(mesIndex+1)+'-'+dia+'-'+year;
        }
      
        var horacita = this.form_tobookyarda.get("horacita").value;

   
    
      //datos del vehiculo seleccionado

      var vehiculoscliente = JSON.parse(await this.localstorage.getData('formvehiculoscliente'))
      vehiculoscliente = Object.values(vehiculoscliente)
      for (let vehiculocliente of vehiculoscliente) 
      {
      if(vehiculocliente.id == vehiculoid) {
       this.vehicle = vehiculocliente
      }
      }

     
    
      //datos del servicio
  this.servicio = JSON.parse(await this.localstorage.getData('servicio'))  
 
    var nombreservicio = await this.localstorage.getData('tipolavado')
      // datos localizacio 

        
  var location = this.form_tobookyarda.get("yard").value 
 
      // datos precios
 var price = await this.localstorage.getData('precio_yarda$')  
      var cost = await this.localstorage.getData('precioyardan') 

    //  alert(this.servicio.name + nombreservicio + location + price + cost)
      
    

      var itemcart = {
        
        donde : 1,  
        sitioid: 0,
        vehiculoid : vehiculoid,
        diacita : diacita,
        horacita : horacita, 
        unit : this.vehicle.unit_number,
        vehicle : this.vehicle.type_vehicle+' '+this.vehicle.model,
        service : nombreservicio +' '+this.servicio.name,
        servicioid: this.servicio.product_id,
        location : location,
        price : price,
        cost: cost,
      
      }
        
        
      await this.localstorage.setObject('itemcart',itemcart)
        
      this.router.navigate(['/tabs-cliente/tobook/cart/']);
            
      
    }     
}
else{
      
      this.snackBar.open("Please fill all  field", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }     
      );
  
}
} 

cambiar(x : any) {


    if(x == 1) {

      this.dialogo.open(DialogaddvehiculoComponent, {
        data: `Add a new vehicle to your fleet`
      }).afterClosed().subscribe(async (confirmar) => {
      if(confirmar)  {
        this.doRefresh(null)
        this.etiquetax = 'Unit number: ' + confirmar.vehiculo
        this.valorx = confirmar.id
        this.selectedOption = confirmar.id
        
      }  

      else {

        this.etiquetax = 'Add a new vehicle'
        this.valorx = 1
        this.selectedOption = 0
      
      }


      });
    }
   
    

  }

cancel() {

  this.router.navigate(['/tabs-cliente/tobook']);

}



}
