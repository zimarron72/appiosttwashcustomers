import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { StorageService } from '../../shared/storage.service';
import {ServiciosTobook} from "../servicios.tobook";

@Component({
  selector: 'app-ingresarsitio',
  templateUrl: './ingresarsitio.component.html',
  styleUrls: ['./ingresarsitio.component.scss'],
})
export class IngresarsitioComponent implements OnInit {

  form_site: FormGroup;
  cities : any
  estados : any

  constructor(
    private snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private localstorage: StorageService,
    private serviciostobook: ServiciosTobook,
  ) { }

  async ngOnInit() {

    this.form_site = this.formBuilder.group({
      suite: [, { validators: [Validators.required]}],
      street: [, { validators: [Validators.required] }],
      address: [, { validators: [Validators.required] }],
      zip: [, { validators: [Validators.required] }],
      state: [, { validators: [Validators.required] }],
      city: [, { validators: [Validators.required] }],
     
    });

    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo') 

    this.serviciostobook.getFormciudades(idtoken , autenticacion_tipo).subscribe({
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

    this.serviciostobook.getFormestados(idtoken , autenticacion_tipo).subscribe({
      next: estados => {this.estados = estados;
     
        this.estados = Object.values(this.estados)
       this.estados =  this.estados.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
    
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



  }

  async submit_sitio() {
    if (this.form_site.valid) {
      var user =     JSON.parse(await this.localstorage.getData('usuario'));
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
     
     var suite = this.form_site.get("suite").value;
     var street = this.form_site.get("street").value;
     var    address = this.form_site.get("address").value;
     var    zip = this.form_site.get("zip").value;
     var    state = this.form_site.get("state").value;
     
     var    city = this.form_site.get("city").value;

     var defaults = '1';
     
     
       this.http.post<any>('https://washtt.com/v1_api_clientes_ingresositio_inicio.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
           suite : suite , 
           street : street,
           address : address,
     state  : state,
     city : city,
     zip : zip,
     defaults : defaults
         
         }).subscribe({
             next: async data => {
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
   
      this.router.navigate(['/tabs-cliente/tobook/tipovehiculos'])
  
  break;  
        
    
       
       }             
             },
             error: error => {
                    
                 console.error('There was an error!' + error.message);
                 this.localstorage.clearData()
              this.router.navigate(['/login'])        
              this.snackBar.open("Sorry, an error occurred,please login again" + error.message, "Close",
              {       
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              ); 
             }
         })
           console.log(this.form_site.value)

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


}
