import { Component,  OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { DialogcuponComponent } from '../dialogcupon/dialogcupon.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../shared/loading.services';


interface Transaction {
  vacio: string,
  concepto: string;
  cost: number;
}


interface Datadescuento {

  type : number;
  valor : number;
  mensaje: string;
  respuesta: string;


}

interface Datacupon {

  type : number;
  valor : number;


}




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]
    )]
})
export class CartComponent implements OnInit {

  datadescuento : Datadescuento
  datacupon : Datacupon
  subtotal: number
  sitescliente : any[]
  vehiculoscliente : any[]
  servicio: any
  itemcart: any | null = null
  nombreservicio: any
  itemOrdera: any
  site: any
  vehicle: any 
  diasemana : string
  descuentos_recargos : any
  precio_yarda : string
  precio_mobil : string
  precioyarda : number
  preciomobil : number   
    ocultarcupon : boolean
    vermensaje : boolean
    vercart : boolean
    displayedColumns: string[] = ['vacio', 'concepto', 'cost'];
    transactions: Transaction[] 
    itemOrder: any | null = null
    itemOrderCart = new MatTableDataSource(); 
    columnsToDisplay = ['Unit', 'Date', 'Price', 'Expand'];  


  constructor(

   private router: Router,
   private snackBar: MatSnackBar,    
   private serviciotobook : ServiciosTobook,

   private localstorage: StorageService,
   public dialogo: MatDialog,
   private loading : LoadingService,
  ) { }
  ngOnInit(): void {
    
  }

  
  async ionViewWillEnter() {

    this.vercart = false
    this.vermensaje = false    



    // DATOS DE NUEVO ITEM PARA EL CART
  this.itemcart = JSON.parse(await this.localstorage.getData('itemcart'))
    // DATOS ITEMS ALMACENADOS EN LOCAL DEL CARRITO ********************
this.itemOrder = JSON.parse(await this.localstorage.getData('itemOrder')) 

var type = ''


if(this.itemcart == null && this.itemOrder == null)

{
  console.log('el itemcart es nullo?'+this.itemcart)
  console.log('el itemOrder es nullo?'+this.itemOrder)
  this.vercart = false
  this.vermensaje = true
}

else {

  console.log('el itemcart es ?'+this.itemcart)
  console.log('el itemOrder es?'+this.itemOrder)
  this.vercart = true
  this.vermensaje = false
  


if(this.itemOrder == null) { // NO HAY ITEMS

 if(this.itemcart.donde == 1) {

  type = 'In yard'

 }

 else {

 type = 'Mobile'

 }

this.itemOrder = [{
 index : 0,
 Unit : this.itemcart.unit,
 Vehicle : this.itemcart.vehicle,
 Service : this.itemcart.service,
 Location : this.itemcart.location,
 Date : this.itemcart.diacita,
 Hour : this.itemcart.horacita,
 Price : this.itemcart.price,
 Cost: this.itemcart.cost,
 sitioid: this.itemcart.sitioid,
 vehiculoid: this.itemcart.vehiculoid,
 servicioid: this.itemcart.servicioid,
 donde : this.itemcart.donde,
 power : this.itemcart.power,
 water : this.itemcart.water,
 ensitio : this.itemcart.ensitio,
 type : type
}]



}

else { // SI HAY ITEMS

if(this.itemcart !== null ) { // SE DEBE SUMAR UN ITEM NUEVO

var indexnew = this.itemOrder.length;

if(this.itemcart.donde == 1) {

  type = 'In yard'

 }

 else {

 type = 'Mobile'

 }

this.itemOrder.push({
index : indexnew,
Unit : this.itemcart.unit,
 Vehicle : this.itemcart.vehicle,
 Service : this.itemcart.service,
 Location : this.itemcart.location,
 Date : this.itemcart.diacita,
 Hour : this.itemcart.horacita,
 Price : this.itemcart.price,
 Cost: this.itemcart.cost,
 sitioid: this.itemcart.sitioid,
 vehiculoid: this.itemcart.vehiculoid,
 servicioid: this.itemcart.servicioid,
 donde : this.itemcart.donde,
 power : this.itemcart.power,
 water : this.itemcart.water,
 ensitio : this.itemcart.ensitio,
 type : type


 });
}




}


//**************************************************************************************** */
// SE CUIDA QUE NO EXISTAN ITEM VACIO BORRADOS EN LA TABLA
var itemsinvaciosOrderx = this.itemOrder.filter((word: { Price: any; }) => word.Price !== undefined )
this.itemOrderCart.data = itemsinvaciosOrderx;

// CALCULAMOS EL SUBTOTAL PARA LA TABLA INFERIOR
this.subtotal =  itemsinvaciosOrderx.map(x => x.Cost).reduce((a, b) => (a + b))

// OBTENEMOS LOS DATOS DE LOS CUPONES DE DESCUENTO****************************
//this.datacupon = JSON.parse(localStorage.getItem('datacupon'));
/*this.localstorage.getData('datacupon').then(
(data)=> this.datacupon = JSON.parse(data)
)*/

this.datacupon = JSON.parse(await this.localstorage.getData('datacupon'))

if(this.datacupon !== null) {  
  this.ocultarcupon = false
  // DATOS A LA TABLA INFERIOR  
  if(this.datacupon.type == 0) {  
  var descuento = this.datacupon.valor * this.subtotal * -1 / 100   
  }
  else {
   var descuento =  this.datacupon.valor * -1  
  }  
  this.transactions = [
  {vacio : '', concepto: 'Subtotal', cost: this.subtotal },
  {vacio : '', concepto: 'Discount', cost: descuento}  
  ]; 
}
else {

this.ocultarcupon = true
// DATOS A LA TABLA INFERIOR
this.transactions = [
{vacio : '', concepto: 'Subtotal', cost: this.subtotal },
{vacio : '', concepto: 'Discount', cost: 0}  
];

}

// se guarda la orden completa sin espacios
await this.localstorage.setObject('itemOrder', itemsinvaciosOrderx)
// se elimina los datos temporales de la orden
await this.localstorage.removeData('itemcart')

  
}

 
  }

  add() {

    this.router.navigate(['/tabs-cliente/tobook/tipovehiculos']); 
  
  }

  async delete(x: number) {
 
  this.itemOrdera = JSON.parse(await this.localstorage.getData('itemOrder'))



 
 this.itemOrdera.splice(x, 1 , 'Borrado');

  await this.localstorage.setObject('itemOrder', this.itemOrdera)

var itemsinvaciosOrder = this.itemOrdera.filter(((itemOrdera: string | any[]) => itemOrdera !== 'Borrado'))

 this.itemOrderCart.data = itemsinvaciosOrder

  if(itemsinvaciosOrder.length  === 0) { // NO HAY ITEM Y CIERRA CARTn
 
    await this.localstorage.removeData('itemOrder')
     this.router.navigate(['/tabs-cliente/tobook/tipovehiculos']);
  
  

  }

  else { 
  
    // ACTUALIZAMOS LA TABLA INFERIOR
    this.subtotal =  itemsinvaciosOrder.map((x: { Cost: any; }) => x.Cost).reduce((a: any, b: any) => (a + b))
  
    if(this.datacupon !== null) {
    if(this.datacupon.type == 0) {  
        var descuento = this.datacupon.valor * this.subtotal * -1 / 100      
        }
        else {     
        var descuento =  this.datacupon.valor * -1     
        }
      }    
    else {
      var descuento = 0
    }  
    
    
      this.transactions = [
        {vacio : '', concepto: 'Subtotal', cost: this.subtotal },
        {vacio : '', concepto: 'Discount', cost: descuento},   
        
      ];
  
     
     
   
   }

 
  
  
  
  
  }

 cancelar() {

 this.localstorage.removeData('itemOrder').then(

(value) => {

  this.localstorage.removeData('datacupon').then(
    (value) => {

      this.router.navigate(['/tabs-cliente/tobook/tipovehiculos'])  
      console.log(value)
    },
    (error) => {
      console.log(error)
    }
  )
  console.log(value)

},
(error) => {
  console.log(error)
}
 


 )
    
    
   
   
  
   
  }  

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
   
   }

   Cupon() {

    this.dialogo.open(DialogcuponComponent, {
      data: `Please place the coupon and send`
    }).afterClosed().subscribe(async (confirmado: string) => {

      if(confirmado) {
        this.loading.simpleLoader()
     var user =  JSON.parse(await this.localstorage.getData('usuario'))
        var idtoken = await this.localstorage.getData('idtoken')
        var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')  

        this.serviciotobook.getCupones(idtoken,autenticacion_tipo,user.email,confirmado).subscribe({
          next: async data => { this.datadescuento = data
            this.loading.dismissLoader()     
      switch(this.datadescuento.respuesta) {
        
        case 'TOKEN ERROR':
          this.localstorage.clearData()
          this.router.navigate(['/login']);
          this.snackBar.open("Invalid or expired token,please login again", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje);
        break;  
     
        case 'ERROR':
          this.localstorage.clearData()
          this.router.navigate(['/login']);        
          this.snackBar.open("Sorry, an error occurred,please login again", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje)
          break;

      case 'CUPON_USADO':
        this.snackBar.open(this.datadescuento.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      break;
      case 'CUPON_CADUCADO':
        this.snackBar.open(this.datadescuento.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      break;
      case 'CUPON_NOACTIVO':
        this.snackBar.open(this.datadescuento.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      break;
      case 'CUPON_NO_IDENTIFICADO':
        this.snackBar.open(this.datadescuento.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      break;
      case 'OK':
        this.ocultarcupon = false
      if(this.datadescuento.type == 1) { // cupon tipo valor
      var descuento = this.datadescuento.valor * -1
      }
      else {
        var descuento = this.datadescuento.valor * this.subtotal *-1 / 100
      }
      
      this.transactions = [
        {vacio : '', concepto: 'Subtotal', cost: this.subtotal },
        {vacio : '', concepto: 'Discount', cost: descuento},   
        
      ];
      
      this.snackBar.open(this.datadescuento.mensaje, "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      var datoscupon = {type: this.datadescuento.type , valor: this.datadescuento.valor}
        await this.localstorage.setObject('datacupon', datoscupon);
      
      break;
      
      
      
      }       
          },
          error: error => {  
            
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
      
      }) 

      }

    });



  
  }


  async checkout() {

    this.loading.simpleLoader()

    var user = JSON.parse(await this.localstorage.getData('usuario'))
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')   

    var itemsOrder =  JSON.parse(await this.localstorage.getData('itemOrder'));
    var itemsinvaciosOrder = itemsOrder.filter(((itemOrder: string | any[]) => itemOrder !== 'Borrado'))
    var subtotal =  itemsinvaciosOrder.map((x: { Cost: any; }) => x.Cost).reduce((a: any, b: any) => (a + b)) 
    var descuentoOrder = JSON.parse(await this.localstorage.getData('datacupon'));
    console.log(descuentoOrder)
    console.log(subtotal)
    console.log(itemsinvaciosOrder)

    var allregistros = itemsinvaciosOrder
    var count = 0
    var mobil = "no"
    for (let registro of allregistros) 
 {
  if(registro.donde == 2) {

    count = count + 1
   mobil = "yes"

  }

}
    
if(mobil == "yes" && count < 2) {
  this.loading.dismissLoader()  
  this.snackBar.open("Sorry, a minimum of two services per mobile appointment is required", "Close",
  {       
    horizontalPosition: "start",
    verticalPosition: "top",
  }
  );

  return false

}

if (mobil == "yes" && count >= 2) {

    this.serviciotobook.checkout(

    idtoken,
    autenticacion_tipo,
    itemsinvaciosOrder,
    descuentoOrder,
    subtotal,
    user.email,
        
        ).subscribe({
      next: async data => { var datos = data

        this.loading.dismissLoader()  

        switch(datos.respuesta) {
     
          case 'ERROR':
          this.localstorage.clearData()
          this.router.navigate(['/login']);        
          this.snackBar.open("Sorry, an error occurred,please login again", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje)
          break;
          
          case 'TOKEN ERROR':
             this.localstorage.clearData()
            this.router.navigate(['/login']);
            this.snackBar.open("Invalid or expired token,please login again" , "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
            console.log(data.mensaje);
          break;  
          
          case 'NO ENVIADOS':

            await this.localstorage.removeData('itemOrder');
              await this.localstorage.removeData('datacupon');
    
              this.router.navigate(['/tabs-cliente/tobook/mybooks']);

              this.snackBar.open('Reservation completed', "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              );
           break;

          case '200_OK':

            await this.localstorage.removeData('itemOrder');
              await this.localstorage.removeData('datacupon');
    
              this.router.navigate(['/tabs-cliente/tobook/successtobook']);
          break;
        }
  
  }
  ,
  error: error => {     
    this.loading.dismissLoader()   
      console.error('There was an error!', error);
      this.snackBar.open('Sorry, an error occurred:' + error.menssage + 'Please try again' , "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
  }
  
  })


}


if (mobil == "no" && count == 0) {

  this.serviciotobook.checkout(

  idtoken,
  autenticacion_tipo,
  itemsinvaciosOrder,
  descuentoOrder,
  subtotal,
  user.email,
      
      ).subscribe({
    next: async data => { var datos = data

      this.loading.dismissLoader()  

      switch(datos.respuesta) {
   
        case 'ERROR':
        this.localstorage.clearData()
        this.router.navigate(['/login']);        
        this.snackBar.open("Sorry, an error occurred,please login again", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
        console.log(data.mensaje)
        break;
        
        case 'TOKEN ERROR':
           this.localstorage.clearData()
          this.router.navigate(['/login']);
          this.snackBar.open("Invalid or expired token,please login again" , "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje);
        break;  
        
        case 'NO ENVIADOS':

          await this.localstorage.removeData('itemOrder');
            await this.localstorage.removeData('datacupon');
  
            this.router.navigate(['/tabs-cliente/tobook/mybooks']);

            this.snackBar.open('Reservation completed', "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
         break;

        case '200_OK':

          await this.localstorage.removeData('itemOrder');
            await this.localstorage.removeData('datacupon');
  
            this.router.navigate(['/tabs-cliente/tobook/successtobook']);
        break;
      }

}
,
error: error => {     
  this.loading.dismissLoader()   
    console.error('There was an error!', error);
    this.snackBar.open('Sorry, an error occurred:' + error.menssage + 'Please try again' , "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
}

})


}

  



  }

 

}
