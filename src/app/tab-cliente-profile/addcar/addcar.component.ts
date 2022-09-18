import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {ServiciosProfile} from "../servicios.profile";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss'],
})
export class AddcarComponent implements OnInit {
  form_truck: FormGroup;
  
  tipodetalles : any

  vehicletypes : any

  constructor(
    private snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public serviciosprofile: ServiciosProfile,
    private loading : LoadingService,
    private localstorage: StorageService


  ) { }

  async ngOnInit() {

    this.form_truck = this.formBuilder.group({
      model: [, { validators: [Validators.required]}],
      mark: [, { validators: [Validators.required] }],
      unitnumber: [, { validators: [Validators.required] }],
      color: [, { validators: [Validators.required] }],
      licenseplate: [, { validators: [Validators.required] }],
      detail: [, { validators: [Validators.required] }],
      vehicletypes: [, { validators: [Validators.required] }]
    });

    var idtoken = await this.localstorage.getData('idtoken')
    var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')   
this.serviciosprofile.getFormtipovehiculos(idtoken , autenticacion_tipo).subscribe({
      
  next: vehicletypes => {this.vehicletypes = vehicletypes;
 
    this.vehicletypes = Object.values(this.vehicletypes)
   this.vehicletypes =  this.vehicletypes.filter(((valor: string | any[]) => valor !== 'OK_DATA'))

    console.log(this.vehicletypes)
  
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
});

this.serviciosprofile.getFormtipoDetalles(idtoken , autenticacion_tipo).subscribe({
  next: tipodetalles => {this.tipodetalles = tipodetalles;
 
    this.tipodetalles = Object.values(this.tipodetalles)
   this.tipodetalles =  this.tipodetalles.filter(((valor: string | any[]) => valor !== 'OK_DATA'))

    console.log(this.tipodetalles)
  
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

 async submit() {

    if (this.form_truck.valid) {
      this.loading.simpleLoader()
      var user = JSON.parse(await this.localstorage.getData('usuario'))
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
     
     var model = this.form_truck.get("model").value;
     var mark = this.form_truck.get("mark").value;
     var    unitnumber = this.form_truck.get("unitnumber").value;
     var    licenseplate = this.form_truck.get("licenseplate").value;
     var    color = this.form_truck.get("color").value;
     
     var    detail = this.form_truck.get("detail").value;
     
     var defaults = '0';

     var vehicletypes = this.form_truck.get('vehicletypes').value;
    
     
       this.http.post<any>('https://washtt.com/v1_api_clientes_addcamion.php', { 
           idtoken : idtoken,
           autenticacion_tipo : autenticacion_tipo,
           email : user.email,           
           model : model , 
           mark : mark,
           unitnumber : unitnumber,
     color  : color,
     detail : detail,
     defaults : defaults,
     licenseplate : licenseplate,
     vehicletypes : vehicletypes
         
         }).subscribe({
             next: data => {
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

       case 'OK_TRUCK':
        this.router.navigate(['/tabs-cliente/profile/fleet']); 
        this.snackBar.open('The vehicle was successfully added', "Close",
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
                var errorMessage = error.message;                 
                 console.error('There was an error!' + errorMessage);
                 this.localstorage.clearData()
                 this.router.navigate(['/login'])          
                 this.snackBar.open("Invalid or expired token,please login again", "Close",
                 {       
                   horizontalPosition: "start",
                   verticalPosition: "top",
                 }
                 );    
             }
         })
           
      





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

  cancel() {
    this.router.navigate(['/tabs-cliente/profile/fleet']); 

  }

}
