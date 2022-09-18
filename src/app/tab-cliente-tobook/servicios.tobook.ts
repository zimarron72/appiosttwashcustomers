import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


interface Vehiculos {
    [x: string]: any;
    [index: number]: Vehiculo    
   
}

interface Vehiculo {

    category_id : number;
    name: string;
    category_image: string;
    ordering: number;
}


interface Lavados {
  [x: string]: any;
  [index: number]: Lavado  
 
 
}

interface Lavado {

  category_id : number;
  category_parent_id: number;
  name: string;
  category_image: string;
  ordering: number;
}

 interface Servicios {
  [x: string]: any;
  [index: number]: Servicio    
 
 
}

interface Servicio {

  product_id : number;
  category_id : number;
  product_price: string;
  name: string;
  image: string;
  descripcion: string;
  product_ordering: number;
  
}

interface Respuesta {

  respuesta : string;
  mensaje: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosTobook {



  constructor(private http: HttpClient, private router: Router) { }


  getDeals(idtoken : string , autenticacion_tipo : string) {

    return this.http.post<Vehiculos>('https://washtt.com/v1_api_clientes_dealsweek.php',
     {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo})
     
      
    }

  getVehiculo(idtoken : string , autenticacion_tipo : string, email : string) {

  return this.http.post<Vehiculos>('https://washtt.com/v1_api_clientes_tipodevehiculos.php',
   {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email : email})
   
    
  }
  
  getLavados (id : number , idtoken : string , autenticacion_tipo : string) {   
   
    return this.http.post<Lavados>('https://washtt.com/v1_api_clientes_tipodelavados.php', 
    {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , id : id})

  }

  getServicios (id : number, idtoken : string , autenticacion_tipo : string ) {

    return this.http.post<Servicios>('https://washtt.com/v1_api_clientes_tipodeservicios.php',
    { id : id , idtoken : idtoken , autenticacion_tipo : autenticacion_tipo ,});

  }


 /* NowTobook ( idtoken : string , autenticacion_tipo : string) {    

      return this.http.post<Respuesta>('https://washtt.com/v1_api_clientes_reservarya.php', 
      {  idtoken : idtoken, autenticacion_tipo : autenticacion_tipo}) 

  }*/

  getFormtipovehiculos (idtoken : string , autenticacion_tipo : string) {

    
     return this.http.post<any>('https://washtt.com/v1_api_clientes_formtipovehiculos.php',
      {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });

  }

  getFormtipoDetalles(idtoken : string , autenticacion_tipo : string) {
    
    return this.http.post<any>('https://washtt.com/v1_api_clientes_formtipodetallesvehiculo.php',
      {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
  }

  getFormciudades(idtoken : string , autenticacion_tipo : string) {
    
    return this.http.post<any>('https://washtt.com/v1_api_clientes_formciudades.php',
      {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
  }

  getDescuentoRecargos(idtoken : string , autenticacion_tipo : string) {
    
    return this.http.post<any>('https://washtt.com/v1_api_clientes_descuentosrecargos.php',
      {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
  }

  getFormestados(idtoken : string , autenticacion_tipo : string) {
    
    return this.http.post<any>('https://washtt.com/v1_api_clientes_formestados.php',
      {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
  }

  getSitiosCliente (idtoken : string , autenticacion_tipo : string, email: string) {

   
    return this.http.post<any>('https://washtt.com/v1_api_clientes_sitiosdelcliente.php', 
    {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email });


  }


  getSitiosYard (idtoken : string , autenticacion_tipo : string) {

   
    return this.http.post<any>('https://washtt.com/v1_api_clientes_sitiosyard.php', 
    {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo  });


  }

  getVehiculosCliente (idtoken : string , autenticacion_tipo : string, email: string) {

    
     return this.http.post<any>('https://washtt.com/v1_api_clientes_vehiculosdelcliente.php', 
     {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email });

  }

  getCupones(idtoken : string , autenticacion_tipo : string, email: string , codigocupon : string) {
    

    return this.http.post<any>('https://washtt.com/v1_api_clientes_aplicarcupon.php',
    
    {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email , codigocupon : codigocupon });


  }

  checkout(idtoken : string, autenticacion_tipo : string, x: [] , y: [] , subtotal : number, email: string) {
  

return this.http.post<any>('https://washtt.com/v1_api_clientes_checkout.php',

{ idtoken : idtoken, autenticacion_tipo : autenticacion_tipo , itemsOrder : x , descuentoOrder : y , subtotal: subtotal , email: email })

  }


  getAppointments(idtoken : string , autenticacion_tipo : string, email: string) {

    return this.http.post<any>('https://washtt.com/v2_api_clientes_getappointment.php', 
    {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email });


  }

  getTipoAppointments(idtoken : string , autenticacion_tipo : string, email: string, n : number) {

    return this.http.post<any>('https://washtt.com/v2_api_clientes_getipoappointment.php', 
    {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email, n: n });


  }

  deleteItemOrder(idtoken : string , autenticacion_tipo : string, itemid: number) {

    return this.http.post<any>('https://washtt.com/v1_api_clientes_delete_item_order.php',
     {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo ,  itemid:itemid});

  }

  getDiasProhibidos() {

    return this.http.get<any>('https://washtt.com/v1_api_clientes_diasprohibidos.php');
  }

  CancelarItemOrder(idtoken : string , autenticacion_tipo : string, itemid: number, email : string) {

    return this.http.post<any>('https://washtt.com/v1_api_clientes_cancelar_item_order.php', 
    {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo ,  itemid:itemid , email : email});

  }


  getPays(idtoken : string , autenticacion_tipo : string, email: string) {

    return this.http.post<any>('https://washtt.com/v1_api_clientes_getpaysclientes.php',
     {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email});
  }

  getTipoPays(idtoken : string , autenticacion_tipo : string, email: string , p : string) {

    return this.http.post<any>('https://washtt.com/v1_api_clientes_gettipopaysclientes.php',
     {idtoken : idtoken , autenticacion_tipo : autenticacion_tipo , email: email, p : p});
  }

  tokenFcm(email : string, did : string, idtoken : string, autenticacion_tipo : string, token_notificacion : string) {
    return this.http.post<any>('https://washtt.com/v1_api_clientes_token_fcm.php',  {
      email : email ,
       ID : did , 
       idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        token_notificacion : token_notificacion 
    } );
  }

  

}