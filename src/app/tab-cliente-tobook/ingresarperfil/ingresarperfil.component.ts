import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { StorageService } from '../../shared/storage.service';
@Component({
  selector: 'app-ingresarperfil',
  templateUrl: './ingresarperfil.component.html',
  styleUrls: ['./ingresarperfil.component.scss'],
})
export class IngresarperfilComponent implements OnInit {
  form_perfil: FormGroup;
  customertypes = [

    {valor:	''		, etiqueta:	'Select:'	},

    {valor:	1		, etiqueta:	'Person'	},
  
    {valor:	2		, etiqueta:	'Company or fleet'	}
  
  ]
  show1 : boolean;
  constructor(
    private snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private localstorage: StorageService
  ) { }

  ngOnInit() {
    this.reactiveForm();
    this.show1 = false;
  }

  reactiveForm() {
  
    this.form_perfil = this.formBuilder.group({
      firstname: [, { validators: [Validators.required]}],
      lastname: [, { validators: [Validators.required] }],
   
      companyname: [],
      companycodigo: [],  
      telephone: [, { validators: [Validators.required] }],
      mobilphone: [, { validators: [Validators.required] }],
      customertypes : [, { validators: [Validators.required] }]
    });
  } 
  
  cambiar(x : any) {
    if(x == 2) {
    
     this.show1 = true; 
    
    
    this.form_perfil.get("companyname").setValidators([Validators.required]);
    this.form_perfil.get("companyname").updateValueAndValidity();
    
    this.form_perfil.get("companycodigo").setValidators([Validators.required]);
    this.form_perfil.get("companycodigo").updateValueAndValidity();
    
    
    
     
    
    }
    else {
      this.show1 = false; 
    
    
     this.form_perfil.get("companyname").clearValidators();
    this.form_perfil.get("companyname").updateValueAndValidity();
    
    this.form_perfil.get("companycodigo").clearValidators();
    this.form_perfil.get("companycodigo").updateValueAndValidity();
    
    
    
    }
    
    } 

    async submit_perfil() {
      if (this.form_perfil.valid) {
  
   var user =     JSON.parse(await this.localstorage.getData('usuario'));
  var idtoken = await this.localstorage.getData('idtoken')
  var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
  
  var nombres = this.form_perfil.get("firstname").value;
  var apellidos = this.form_perfil.get("lastname").value;
 
  var    companyname = this.form_perfil.get("companyname").value;
  var    companycodigo = this.form_perfil.get("companycodigo").value;
  
  var    telephone = this.form_perfil.get("telephone").value;
  var    mobilphone = this.form_perfil.get("mobilphone").value;
  var    customertypes = this.form_perfil.get("customertypes").value;
  
  
        this.http.post<any>('https://washtt.com/v1_api_clientes_ingresoperfil_inicio.php', { 
        email : user.email,  
        idtoken : idtoken ,
        autenticacion_tipo : autenticacion_tipo,
        nombres : nombres , 
        apellidos : apellidos,
  companyname  : companyname,
  companycodigo : companycodigo,  
  telephone : telephone,
  mobilphone : mobilphone,
  customertypes : customertypes
      
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
