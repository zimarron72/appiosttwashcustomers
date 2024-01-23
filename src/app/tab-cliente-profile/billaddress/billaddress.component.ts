import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { StorageService } from '../../shared/storage.service';
import {ServiciosProfile} from "../servicios.profile";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from '../../shared/loading.services';


@Component({
  selector: 'app-billaddress',
  templateUrl: './billaddress.component.html',
  styleUrls: ['./billaddress.component.scss'],
})
export class BilladdressComponent implements OnInit {

  customertypes = [

    {valor:	''		, etiqueta:	'Select'	},

    {valor:	1		, etiqueta:	'Person'	},
  
    {valor:	2		, etiqueta:	'Company or fleet'	}
  
  ]

mobilx = ''
telefonox = ''
taxid = ''

  apellido : string
  nombre : string
  fullname : string
  tipocliente : string
  empresa : string
  rif : string
  casa : string
  calle : string
  direccion : string
  codigopostal : number
  estado : string
  ciudad : string  
  telefono : string
  celular : string
  ver : boolean = false

  xnombre : boolean = true
  xfnombre : boolean = false

  xapellido : boolean = true
  xfapellido : boolean = false

  xfullname : boolean = true
  xffullname : boolean = false

  xcustomer : boolean = true
  xfcustomer : boolean = false

  xempresa : boolean = true
  xfempresa : boolean = false

  xrif : boolean = true
  xfrif : boolean = false

  xcasa : boolean = true
  xfcasa : boolean = false

  xcalle : boolean = true
  xfcalle : boolean = false

  xdireccion : boolean = true
  xfdireccion : boolean = false

  xzip : boolean = true
  xfzip : boolean = false

  xestado : boolean = true
  xfestado : boolean = false

  xciudad : boolean = true
  xfciudad : boolean = false

  xtelefono : boolean = true
  xftelefono : boolean = false

  xcelular : boolean = true
  xfcelular : boolean = false

  form_firtname: FormGroup;
  form_lastname: FormGroup;
  form_fullname: FormGroup;
  form_customer: FormGroup;
  form_empresa: FormGroup;
  form_rif: FormGroup;
  form_suite: FormGroup;
  form_calle: FormGroup;
  form_direccion: FormGroup;
  form_zip: FormGroup;
  form_state: FormGroup;
  form_city: FormGroup;
  form_phone: FormGroup;
  form_mobilphone: FormGroup;

estados : any
cities : any


  constructor(
    private snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private router: Router,
    private localstorage: StorageService,
    private servicioprofile : ServiciosProfile,
    private http: HttpClient,
    private loading : LoadingService,

  ) { }

  async ngOnInit() {

    this.doRefresh(null)
   
    this.reactiveForm(); 
  
    /*  var user = JSON.parse(await this.localstorage.getData('usuario'))
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
      this.loading.simpleLoader()
      this.servicioprofile.getFormciudades(idtoken , autenticacion_tipo).subscribe({
        next: cities => {this.cities = cities;
       
          this.cities = Object.values(this.cities)
         this.cities =  this.cities.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
      
          console.log(this.cities)
        
        },
        error: error => {
            
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
      
      })
  
      this.servicioprofile.getFormestados(idtoken , autenticacion_tipo).subscribe({
        next: estados => {this.estados = estados;
       
          this.estados = Object.values(this.estados)
         this.estados =  this.estados.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
      
        
        
        },
        error: error => {
            
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
      
      })
  
      if(user) {
  
        this.servicioprofile.getInfobill(idtoken,autenticacion_tipo,user.email).subscribe(
          val => { var datos = val
            this.loading.dismissLoader()  
            switch(datos.respuesta) {
    
              case 'ERROR':
                console.log(datos.mensaje)
                this.localstorage.clearData()
                this.router.navigate(['/login']);
                
                this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );
              break;
              case 'TOKEN ERROR':
                      this.localstorage.clearData()
                      this.router.navigate(['/login'])   
                    this.snackBar.open("Invalid or expired token,please login again4", "Close",
                    {       
                      horizontalPosition: "start",
                      verticalPosition: "top",
                    }
                    );
                    console.log(datos.mensaje);
              break;    
            
              case '200_OK':
             console.log(datos)       
    
             this.apellido = datos.l_name
             this.nombre = datos.f_name
  
             var tipo = datos.client_type
             switch(tipo){
               case '1':
                this.tipocliente = 'Person'
                this.ver = false
               break;
               case '2':
                 this.tipocliente = 'Company or fleet'
                 this.ver = true
               break;   
             }
             this.empresa = datos.firma_name
             this.rif = datos.firma_code
             this.casa = datos.home
             this.calle = datos.street_nr
             this.direccion = datos.street
             this.codigopostal = datos.zip
             this.estado = datos.state
             this.ciudad = datos.city 
             this.telefono = datos.phone
             this.celular = datos.mobil_phone
             this.fullname = datos.fullname
    
    break;
            }   
          },
          error => {   
            this.loading.dismissLoader()       
            console.error('There was an error!', error);
            // borramos la informacion local
    this.localstorage.clearData()
    this.router.navigate(['/login']);
    
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
    this.loading.dismissLoader()  
    this.localstorage.clearData()
    this.router.navigate(['/login']);
    
    this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );    
    
    }*/

  }

  reactiveForm() {
  
    this.form_firtname = this.formBuilder.group({
      firstname: [, { validators: [Validators.required]}],      
    });

    this.form_lastname = this.formBuilder.group({
      lastname: [, { validators: [Validators.required]}],      
    });

  this.form_fullname = this.formBuilder.group({
      fullname: [, { validators: [Validators.required]}],      
    });

  this.form_customer = this.formBuilder.group({
      customer: [, { validators: [Validators.required]}],      
    }); 
    
    this.form_empresa = this.formBuilder.group({
      empresa: [, { validators: [Validators.required]}],      
    });

    this.form_rif = this.formBuilder.group({
      rif: [, { validators: [Validators.required]}],      
    });

    this.form_suite = this.formBuilder.group({
      casa: [, { validators: [Validators.required]}],      
    });

    this.form_calle = this.formBuilder.group({
      calle: [, { validators: [Validators.required]}],      
    });

    this.form_direccion = this.formBuilder.group({
      direccion: [, { validators: [Validators.required]}],      
    });

    this.form_zip = this.formBuilder.group({
      zip: [, { validators: [Validators.required]}],      
    });

    this.form_state = this.formBuilder.group({
      estado: [, { validators: [Validators.required]}],      
    });

    this.form_city = this.formBuilder.group({
      ciudad: [, { validators: [Validators.required]}],      
    });

    this.form_phone = this.formBuilder.group({
      phone: [, { validators: [Validators.required]}],      
    });

    this.form_mobilphone = this.formBuilder.group({
      mobil: [, { validators: [Validators.required]}],      
    });

  } 



  cambiar($event: { target: { value: number; }; }) {
    if($event.target.value == 2) {
    
     this.ver = true; 
    
    
    /*this.form_empresa.get("empresa").setValidators([Validators.required]);
    this.form_empresa.get("empresa").updateValueAndValidity();
    
    this.form_rif.get("rif").setValidators([Validators.required]);
    this.form_rif.get("rif").updateValueAndValidity();*/
    
    
    
     
    
    }
    else {
      this.ver = false; 
    
    
   /*  this.form_empresa.get("empresa").clearValidators();
    this.form_empresa.get("empresa").updateValueAndValidity();
    
    this.form_rif.get("rif").clearValidators();
    this.form_rif.get("rif").updateValueAndValidity();*/
    
    
    
    }
    
    }

  edit_firstname() {
    this.xnombre = false
    this.xfnombre = true
  }

  edit_lastname() {
    this.xapellido = false
    this.xfapellido = true
  }

  edit_fullname() {
    this.xfullname = false
    this.xffullname = true
  }

  edit_customer() {
    this.xcustomer = false
    this.xfcustomer = true
  }

  edit_empresa() {
    this.xempresa = false
    this.xfempresa = true
  }

  edit_rif() {
    this.xrif = false
    this.xfrif = true
  }

  edit_casa() {
    this.xcasa = false
    this.xfcasa = true
  }

  edit_calle() {
    this.xcalle = false
    this.xfcalle = true
  }

  edit_direccion() {
    this.xdireccion = false
    this.xfdireccion = true
  }

  edit_zip() {
    this.xzip = false
    this.xfzip = true
  }

  edit_estado() {
    this.xestado = false
    this.xfestado = true
  }

  edit_ciudad() {
    this.xciudad = false
    this.xfciudad = true
  }

  edit_telefono() {
    this.xtelefono = false
    this.xftelefono = true
  }

  edit_celular() {
    this.xcelular = false
    this.xfcelular = true
  }






  cancel_firstname() {
    this.xnombre = true
    this.xfnombre = false
  }


  cancel_lastname() {
    this.xapellido = true
    this.xfapellido = false
  }

  cancel_fullname() {
    this.xfullname = true
    this.xffullname = false
  }


  cancel_customer() {
    this.xcustomer = true
    this.xfcustomer = false
  }

  cancel_empresa() {
    this.xempresa = true
    this.xfempresa = false
  }

  cancel_rif() {
    this.xrif = true
    this.xfrif = false
  }

  cancel_casa() {
    this.xcasa = true
    this.xfcasa = false
  }

  cancel_calle() {
    this.xcalle = true
    this.xfcalle = false
  }

  cancel_direccion() {
    this.xdireccion = true
    this.xfdireccion = false
  }

  cancel_zip() {
    this.xzip = true
    this.xfzip = false
  }

  cancel_estado() {
    this.xestado = true
    this.xfestado = false
  }

  cancel_ciudad() {
    this.xciudad = true
    this.xfciudad = false
  }

  cancel_telefono() {
    this.xtelefono = true
    this.xftelefono = false
  }

  cancel_celular() {
    this.xcelular = true
    this.xfcelular = false
  }


  async submit_firstname() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
   

    if (this.form_firtname.valid) {
      this.loading.simpleLoader()
      var nombre = this.form_firtname.get("firstname").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'nombre',
        valor : nombre 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.nombre = nombre
      this.xnombre = true
    this.xfnombre = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }
 
  async submit_lastname() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_lastname.valid) {
      this.loading.simpleLoader()
      var valor = this.form_lastname.get("lastname").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'apellido',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.apellido = valor
      this.xapellido = true
    this.xfapellido = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_fullname() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_fullname.valid) {
      this.loading.simpleLoader()
      var valor = this.form_fullname.get("fullname").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'fullname',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.fullname = valor
      this.xfullname = true
    this.xffullname = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_customer() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_customer.valid) {
      this.loading.simpleLoader() 
      var valor = this.form_customer.get("customer").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'customer',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      var tipo = valor
             switch(tipo){
               case 1:
                this.tipocliente = 'Person'
                this.ver = false
               break;
               case 2:
                this.tipocliente = 'Company or fleet'
                 this.ver = true
               break;   
             }
      this.xcustomer = true
    this.xfcustomer = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_empresa() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_empresa.valid) {
      this.loading.simpleLoader()
      var valor = this.form_empresa.get("empresa").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'empresa',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.empresa = valor
      this.xempresa = true
    this.xfempresa = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_rif() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_rif.valid) {
      this.loading.simpleLoader()
      var valor = this.form_rif.get("rif").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'rif',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.rif = valor
      this.xrif = true
    this.xfrif = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_casa() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_suite.valid) {
      this.loading.simpleLoader()
      var valor = this.form_suite.get("casa").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'casa',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.casa = valor
      this.xcasa = true
    this.xfcasa = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_calle() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_calle.valid) {
      this.loading.simpleLoader()
      var valor = this.form_calle.get("calle").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'calle',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.calle = valor
      this.xcalle = true
    this.xfcalle = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_direccion() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_calle.valid) {
      this.loading.simpleLoader()
      var valor = this.form_direccion.get("direccion").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'direccion',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.direccion = valor
      this.xdireccion = true
    this.xfdireccion = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_zip() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_zip.valid) {
      this.loading.simpleLoader()
      var valor = this.form_zip.get("zip").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'zip',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.codigopostal = valor
      this.xzip = true
    this.xfzip = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_estado() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_state.valid) {
      this.loading.simpleLoader()
      var valor = this.form_state.get("estado").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'estado',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.estado = valor
      this.xestado = true
    this.xfestado = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_ciudad() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_city.valid) {
      this.loading.simpleLoader()
      var valor = this.form_city.get("ciudad").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'ciudad',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()      
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.ciudad = valor
      this.xciudad = true
    this.xfciudad = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("this information is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_telefono() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_phone.valid) {
      this.loading.simpleLoader()
      var valor = this.form_phone.get("phone").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'telefono',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.telefono = valor
      this.xtelefono = true
    this.xftelefono = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("Incomplete phone", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  async submit_celular() {

    var user = JSON.parse(await this.localstorage.getData('usuario'))
    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if (this.form_mobilphone.valid) {
      this.loading.simpleLoader()
      var valor = this.form_mobilphone.get("mobil").value;
      this.http.post<any>('https://washtt.com/v1_api_clientes_editinfobill.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        campo : 'celular',
        valor : valor 
      }).subscribe({
          next: async data => {
            this.loading.dismissLoader()  
    switch(data.respuesta) {
    case 'ERROR':
      this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
      console.log(data.mensaje);
    break;
   
    case 'OK_TODO':
      this.celular = valor
      this.xcelular = true
    this.xfcelular = false
    this.snackBar.open("The data was updated successfully", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
    break;     
    
    }     
              
          },
          error: error => {
            this.loading.dismissLoader()  
              var errorMensaje = error.message;              
              console.error('There was an error!', errorMensaje);
              this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
          }
      })



     }
    else
    {
      this.snackBar.open("incomplete mobil phone", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }    
      
      
      );
    }
    
  }

  
  async doRefresh($event: { target: { complete: () => void; }; }) { 

    var user = JSON.parse(await this.localstorage.getData('usuario'))
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
      this.loading.simpleLoader()
      this.servicioprofile.getFormciudades(idtoken , autenticacion_tipo).subscribe({
        next: cities => {this.cities = cities;
       
          this.cities = Object.values(this.cities)
         this.cities =  this.cities.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
      
          console.log(this.cities)
        
        },
        error: error => {
            
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
      
      })
  
      this.servicioprofile.getFormestados(idtoken , autenticacion_tipo).subscribe({
        next: estados => {this.estados = estados;
       
          this.estados = Object.values(this.estados)
         this.estados =  this.estados.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
      
        
        
        },
        error: error => {
            
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
      
      })
  
      if(user) {
  
        this.servicioprofile.getInfobill(idtoken,autenticacion_tipo,user.email).subscribe(
          val => { var datos = val            
            this.loading.dismissLoader()  
            if ($event)
            $event.target.complete();
            switch(datos.respuesta) {
    
              case 'ERROR':
                console.log(datos.mensaje)
                this.localstorage.clearData()
                this.router.navigate(['/login']);
                
                this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                {       
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );
              break;
              case 'TOKEN ERROR':
                      this.localstorage.clearData()
                      this.router.navigate(['/login'])   
                    this.snackBar.open("Invalid or expired token,please login again4", "Close",
                    {       
                      horizontalPosition: "start",
                      verticalPosition: "top",
                    }
                    );
                    console.log(datos.mensaje);
              break;    
            
              case '200_OK':
             console.log(datos)       
    
             this.apellido = datos.l_name
             this.nombre = datos.f_name
  
             var tipo = datos.client_type
             switch(tipo){
               case '1':
                this.tipocliente = 'Person'
                this.ver = false
               break;
               case '2':
                 this.tipocliente = 'Company or fleet'
                 this.ver = true
               break;   
             }
             this.empresa = datos.firma_name
             this.rif = datos.firma_code
             this.casa = datos.home
             this.calle = datos.street_nr
             this.direccion = datos.street
             this.codigopostal = datos.zip
             this.estado = datos.state
             this.ciudad = datos.city 
             this.telefono = datos.phone
             this.celular = datos.mobil_phone
             this.fullname = datos.fullname
    
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
    
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
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
    this.loading.dismissLoader() 
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

  phoneFormat(event:any) {//returns (###) ###-####
    var input = event.target.value.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
    this.telefonox = input;
}

mobilFormat(event:any) {//returns (###) ###-####
  var input = event.target.value.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
  var size = input.length;
  if (size>0) {input="("+input}
  if (size>3) {input=input.slice(0,4)+") "+input.slice(4)}
  if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
  this.mobilx = input;
}


taxidFormat(event:any) {//returns (###) ###-####
  var input = event.target.value.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
  var size = input.length;

  if (size>2) {input=input.slice(0,3)+"- "+input.slice(3)}
  if (size>5) {input=input.slice(0,8)+"-" +input.slice(8)}
  this.taxid= input;
}


}
