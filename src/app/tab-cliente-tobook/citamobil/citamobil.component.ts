import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { ServiciosTobook } from '../servicios.tobook';
import { StorageService } from '../../shared/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogaddvehiculoComponent } from '../dialogaddvehiculo/dialogaddvehiculo.component';
import { DialogositioComponent } from '../dialogositio/dialogositio.component';


@Component({
  selector: 'app-citamobil',
  templateUrl: './citamobil.component.html',
  styleUrls: ['./citamobil.component.scss'],
})
export class CitamobilComponent implements OnInit {

  vehicle : any
  servicio : any
  site : any

 etiqueta1 : string
  valor1 : number
  selectedOption1 : any

  etiqueta2 : string
  valor2 : number
  selectedOption2 : any

  minDate: Date;
  maxDate: Date;
  form_tobooksite: FormGroup;
  sitioscliente: any;
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

   powers = [
    
    { etiqueta: 'YES' , valor: 'YES THERE ARE'},
    { etiqueta: 'NOT' , valor: 'THERE IS NOT'},
     ]
     waters = [
    
      { etiqueta: 'YES' , valor: 'YES THERE ARE'},
      { etiqueta: 'NOT' , valor: 'THERE IS NOT'},
       ]
       
       ensitios = [
     
        { etiqueta: 'YES' , valor: 'YES'},
        { etiqueta: 'NOT' , valor: 'NOT'},
         ] 

  constructor(
  private snackBar: MatSnackBar, private formBuilder: FormBuilder,
    private router: Router,
    private serviciotobook : ServiciosTobook,
    private localstorage: StorageService,
   private dialogo: MatDialog
  ) { }

  ngOnInit() {

 this.etiqueta1 = 'Add a new location'
    this.valor1 = 1
    this.selectedOption1 = 0

    this.etiqueta2 = 'Add a new vehicle'
    this.valor2 = 1
    this.selectedOption2 = 0

    const currentYear = new Date().getFullYear()
    const currentMes = new Date().getMonth()
    const currentDia = new Date().getDate()

    this.minDate = new Date(currentYear , currentMes , currentDia + 1);
   

    this.form_tobooksite = this.formBuilder.group({
    location: [, { validators: [Validators.required]}],
      vehicle: [, { validators: [Validators.required] }],
      diacita: [, { validators: [Validators.required] }],
      horacita: [, { validators: [Validators.required] }],
      power: [, { validators: [Validators.required] }],
      water: [, { validators: [Validators.required] }],
      ensitio: [, { validators: [Validators.required] }],
      
    });


  this.localstorage.getData('usuario').then(
      async (val)=> {
  var user  = JSON.parse(val);
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

  this.serviciotobook.getSitiosCliente(idtoken,autenticacion_tipo,user.email).subscribe({
      
    next: async sitioscliente => {this.sitioscliente = sitioscliente;
   
      this.sitioscliente = Object.values(this.sitioscliente)
      this.sitioscliente =  this.sitioscliente.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
  
    //  localStorage.setItem('formsitescliente', JSON.stringify(this.sitioscliente))
    await this.localstorage.setObject('formsitescliente', this.sitioscliente)
  
      console.log(this.sitioscliente)
    
    },
    error: error => {
        
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
  
      //localStorage.setItem('formvehiculoscliente', JSON.stringify(this.vehiculoscliente))
  await this.localstorage.setObject('formvehiculoscliente', this.vehiculoscliente)
      console.log(this.vehiculoscliente)
    
    },
    error: error => {
        
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

},
(err)=> console.log(err)


    )

  }


  async submit() {
    if (this.form_tobooksite.valid) {

      var power =  this.form_tobooksite.get("power").value;
      var water =  this.form_tobooksite.get("water").value;
      var ensitio =  this.form_tobooksite.get("ensitio").value;

      var vehiculoid =  this.form_tobooksite.get("vehicle").value;  
      var siteid = this.form_tobooksite.get("location").value;

    
if(siteid == 0 || vehiculoid == 0) {

  this.snackBar.open("Please select a location or vehicle", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }     
  
  );
}

else {


      
    var diacita = this.form_tobooksite.get("diacita").value;
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
    
    var horacita = this.form_tobooksite.get("horacita").value;

    //datos del vehiculo seleccionado
var vehiculoscliente = JSON.parse(await this.localstorage.getData('formvehiculoscliente'))
vehiculoscliente = Object.values(vehiculoscliente);
for (let vehiculocliente of vehiculoscliente) 
{
if(vehiculocliente.id == vehiculoid) {
 this.vehicle = vehiculocliente
}
}

//datos del servicio
this.servicio = JSON.parse(await this.localstorage.getData('servicio'))  
var nombreservicio = await this.localstorage.getData('tipolavado')
 
//datos de localizacion
var sitioscliente = JSON.parse(await this.localstorage.getData('formsitescliente'))
 sitioscliente = Object.values(sitioscliente);
 for (let sitecliente of this.sitioscliente) 
 {
   if(sitecliente.id == siteid) {
     this.site = sitecliente  
     var location = this.site.address+' '+this.site.zip+' '+this.site.state+' '+this.site.city      
 }


}



// datos precios
var price = await this.localstorage.getData('precio_mobil$')  
var cost = await this.localstorage.getData('preciomobiln')      
    

    var itemcart = {
  donde : 2,
  sitioid : siteid,
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
  power : power,
  water : water,
  ensitio : ensitio
 
    }
    
    //localStorage.setItem('itemcart', JSON.stringify(itemcart))
    await this.localstorage.setObject('itemcart',itemcart)
    
    this.router.navigate(['/tabs-cliente/tobook/cart/']);
        
 

}


      
    }
    else{
      
      this.snackBar.open("Please, fill all  field", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
  
    }
  }

cambiar1(x : any) {


    if(x == 1) {

      this.dialogo.open(DialogositioComponent, {
        data: `Add a new location`
      }).afterClosed().subscribe(async (confirmar) => {
      if(confirmar)  {

        this.etiqueta1 = 'Unit number: ' + confirmar.location
        this.valor1 = confirmar.id
        this.selectedOption1 = confirmar.id
        
      }  

      else {

        this.etiqueta1 = 'Add a new location'
        this.valor1 = 1
        this.selectedOption1 = 0
      
      }


      });
    }
   
    

  }
  
  
 cambiar2(x : any) {


    if(x == 1) {

      this.dialogo.open(DialogaddvehiculoComponent, {
        data: `Add a new vehicle to the fleet`
      }).afterClosed().subscribe(async (confirmar) => {
      if(confirmar)  {

        this.etiqueta2 = 'Unit number: ' + confirmar.vehiculo
        this.valor2 = confirmar.id
        this.selectedOption2 = confirmar.id
        
      }  

      else {

        this.etiqueta2 = 'Add a new vehicle'
        this.valor2 = 1
        this.selectedOption2 = 0
      
      }


      });
    }
   
    

  }


  cancel() {

    this.router.navigate(['/tabs-cliente/tobook']);
  
  }

}
