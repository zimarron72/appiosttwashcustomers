import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: 'root'
  })
  export class ServiciosProfile {
  
  
  
    constructor(private http: HttpClient) { }


    getFleet (idtoken : string ,autenticacion_tipo : string, email : string) {

    
        return this.http.post<any>('https://washtt.com/v1_api_clientes_getfleetcliente.php', {
         idtoken : idtoken,
         autenticacion_tipo : autenticacion_tipo,
         email : email
      }
      
      );
   
     }

     getLocations (idtoken : string ,autenticacion_tipo : string, email : string) {

   
      return this.http.post<any>('https://washtt.com/v1_api_clientes_getlocationscliente.php', {
         idtoken : idtoken,
         autenticacion_tipo : autenticacion_tipo,
         email : email
      }
      
      );
   
     }

     getInfobill (idtoken : string ,autenticacion_tipo : string, email : string) {

   
   
      return this.http.post<any>('https://washtt.com/v1_api_clientes_getinfobill.php',
      {
         idtoken : idtoken,
         autenticacion_tipo : autenticacion_tipo,
         email : email
      }
      
      );


 
   }

   getDataCuenta (idtoken : string ,autenticacion_tipo : string, email : string) {

    
      return this.http.post<any>('https://washtt.com/v1_api_clientes_getinfocuenta.php',
       {
          idtoken : idtoken,
          autenticacion_tipo : autenticacion_tipo,
          email : email
       }
       
       );
 
   }

   deleteTruck (idtoken : string ,autenticacion_tipo : string, idvehiculo : number, email : string) {

   
      return this.http.post<any>('https://washtt.com/v1_api_clientes_deletevehiculocliente.php',  {
         idtoken : idtoken,
         autenticacion_tipo : autenticacion_tipo,
         idvehiculo : idvehiculo,
         email : email
         
      }
      
      );
 
   }

   deleteSitio (idtoken : string ,autenticacion_tipo : string, idsitio : number, status : number) {

   
      return this.http.post<any>('https://washtt.com/v1_api_clientes_deletesitiocliente.php', 
      {
         idtoken : idtoken,
         autenticacion_tipo : autenticacion_tipo,
         idsitio : idsitio,
         status : status
      }
      
      );
 
   }

   /*getFormtipovehiculos(uid) {
      return this.http.post<any>('https://washtt.com/apiformtipovehiculos.php', uid);
   }*/

   getFormciudades(idtoken : string , autenticacion_tipo : string) {
    
      return this.http.post<any>('https://washtt.com/v1_api_clientes_formciudades.php',
        {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
    }

    getFormestados(idtoken : string , autenticacion_tipo : string) {
    
      return this.http.post<any>('https://washtt.com/v1_api_clientes_formestados.php',
        {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
    }


    getFormtipovehiculos (idtoken : string , autenticacion_tipo : string) {

    
      return this.http.post<any>('https://washtt.com/v1_api_clientes_formtipovehiculos.php',
       {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
 
   }
 
   getFormtipoDetalles(idtoken : string , autenticacion_tipo : string) {
     
     return this.http.post<any>('https://washtt.com/v1_api_clientes_formtipodetallesvehiculo.php',
       {  idtoken : idtoken , autenticacion_tipo : autenticacion_tipo });
   }


   updateImage(idtoken : string ,autenticacion_tipo : string, email : string, image : string) {

    
      return this.http.post<any>('https://washtt.com/v1_api_clientes_updatefotocliente.php',
       {
          idtoken : idtoken,
          autenticacion_tipo : autenticacion_tipo,
          email : email,
          image : image
       }
       
       );
   
   }




  }


 