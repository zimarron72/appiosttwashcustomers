import { Component,  OnInit} from '@angular/core';
import { SquareServicio } from '../../shared/square.servicio';
import { StorageService } from '../../shared/storage.service';
import { Router } from '@angular/router';
import { ActivatedRoute,  Params } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import { LoadingService } from '../../shared/loading.services';


declare var Square: any;

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})





export class SquareComponent implements OnInit{


card: any 
servicio : any
precio : any
descuento : any
total : any
itemid : any
wash_id : any
email : any
precio_string : string
descuento_string : string
total_string : string

charge : string
concepto : string

charge_status : number
  constructor( 
    private dsls: SquareServicio, 
    private localstorage: StorageService, 
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private snackBar: MatSnackBar,
    private loading : LoadingService,
    ) { 

     

    }


  async ngOnInit(): Promise<void> {



    
  }

  async ionViewWillEnter() {

    this.loading.simpleLoader()
     //ojo square-sandbox or square segun las credenciales
     
    //  await this.dsls.loadScript('square-sandbox')
  await this.dsls.loadScript('square')

  
    this.servicio = this.rutaActiva.snapshot.params.servicio;
    this.precio = this.rutaActiva.snapshot.params.precio;
    this.descuento = this.rutaActiva.snapshot.params.descuento;
    this.itemid = this.rutaActiva.snapshot.params.itemid;
    this.wash_id = this.rutaActiva.snapshot.params.wash_id;
    this.charge = this.rutaActiva.snapshot.params.charge;
      this.concepto= this.rutaActiva.snapshot.params.concepto;
      this.charge_status= this.rutaActiva.snapshot.params.charge_status;

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.servicio = params.servicio;
        this.precio  = params.precio;
        this.descuento = params.descuento;
        this.itemid = params.itemid;
        this.wash_id = params.wash_id;
        this.concepto = params.concepto;
        this.charge = params.charge;
        this.charge_status = params.charge_status;
      }
    );
    
 const formatter$ = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });


      this.total = parseFloat(this.precio) - parseFloat(this.descuento)

    this.precio_string =   formatter$.format(this.precio)
    this.descuento_string =   formatter$.format(this.descuento)
    this.total_string =   formatter$.format(this.total)   

   

    //async function main() {

//const appId = 'sandbox-sq0idb-RrvT24qkMyTSr91-Qy080w';
 const appId = 'sq0idp-vuSagOWbgJlfqKv2PoID5A';
     // const locationId = 'JCQ7Q20HXQTZ8';
     const locationId = 'JCQ7Q20HXQTZ8';

   // const payments = Square.payments(appId, locationId).setLocale('en-US');
    
  const payments = Square.payments(appId, locationId)
        
  const paymentsx = payments.setLocale('en-US');
      this.card = await payments.card();     

    //  const router = this.router.navigate(['/tipopagos']);

   await this.card.attach('#card-container')
   this.loading.dismissLoader()

    



  }
 
  async ionViewDidLeave() {

    const destroyed = await this.card.destroy();
    (<HTMLInputElement>document.getElementById('payment-status-container')).innerText = '';
    (<HTMLInputElement>document.getElementById('payment-status-container')).innerText = '';

  }
 
 async eventHandler() {
  this.loading.simpleLoader()
  //  event.preventDefault();
  var user = JSON.parse(await this.localstorage.getData('usuario'))
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo') 
  this.email = user.email;

      const result = await this.card.tokenize();

      if (result.status === 'OK') {

        console.log(`Payment token is ${result.token}`);

        var url = 'https://www.washtt.com/v1_api_clientes_pagosquareconcargo.php';
      var data = {
        idtoken : idtoken,
        autenticacion_tipo : autenticacion_tipo,
        umail : this.email,
        concept: this.servicio, 
        subtotal : this.precio , 
        descuento : this.descuento, 
        total : this.total ,
        concepto_cargo : this.concepto,
          charge : this.charge,
          charge_status : this.charge_status, 
        tip : ((document.getElementById("tip") as HTMLInputElement).value) ,
        nonce : result.token,
        itemid : this.itemid,
        washid : this.wash_id
      };

        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => { 
      
(<HTMLInputElement>document.getElementById('payment-status-container')).innerText = 'SORRY BUT THERE ARE TROUBLE PROCESSING PAYMENT';
         
          console.error('Error:', error); 
          
          this.loading.dismissLoader()
     
        } )
        .then(async response => { 

          console.log(response)          
          const destroyed = await this.card.destroy();

          this.loading.dismissLoader()

          switch(response.respuesta) {
            case 'ERROR1':
              this.snackBar.open(response.mensaje, "Close",
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
          break; 
          case 'ERROR2':
            this.localstorage.clearData()
            this.router.navigate(['/login'])        
            this.snackBar.open("Sorry, an error occurred,please login again", "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );   
          break;
          case 'YA PAGADO':
              this.snackBar.open("There is already a payment registered for this service. Still in verification", "Close",
                  {       
                    horizontalPosition: "start",
                    verticalPosition: "top",
                  }
                  );
             this.router.navigate(['/tabs-cliente/tobook/tipopagos']);     
            break;
           
            case 'TODO_OK':
             // (<HTMLInputElement>document.getElementById('payment-status-container')).innerText = 'COMPLETED PAYMENT';
             this.router.navigate(['/tabs-cliente/tobook/successpay']);
            
            break;
            
            case 'PAGO CONDICIONADO':
             
             this.router.navigate(['/tabs-cliente/tobook/successpay']);
             this.snackBar.open("A difficulty occurred with this transaction. However please give us some time to verify the same", "Close",
             {       
               horizontalPosition: "start",
               verticalPosition: "top",
             }
             );

            break;  

          }


       /*borrarif(response.respuesta = 'EXCEPCION2') {
          this.snackBar.open("Please login again", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
        }

        else {

          this.router.navigate(['/tabs-cliente/tobook/tipopagos']);

        }*/

//(<HTMLInputElement>document.getElementById('payment-status-container')).innerText = 'COMPLETED PAYMENT';

        
          
      //    console.log('Success:', response); 

     
       
         
        
        });





       }


       

  }

  cancelar() {
    this.router.navigate(['/tabs-cliente/tobook/mybooks/7']);
  }


}


