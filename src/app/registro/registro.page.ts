import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import {ServicioAutenticacion} from '../shared/servicio.autenticacion'
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form_registro : FormGroup
  verboton : boolean = false

  respuesta : string

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private servicioauth : ServicioAutenticacion,
 
     public router: Router   
  ) { }

  ngOnInit() {
    this.reactiveForm();
  }

  reactiveForm() {
  
    this.form_registro = this.formBuilder.group({
      name: [, { validators: [Validators.required]}],     
      email: [, { validators: [Validators.required]}],
      password: [, { validators: [Validators.required] }]
      
    });
  }


  segmentChanged(ev: any) {
 
    if(this.respuesta == 'YES') {
      this.verboton = true
    }
    else {
      this.verboton = false
      this.router.navigate(['login']);
    }
    
  }

  submit() {
    if (this.form_registro.valid) {



  
    var name=  this.form_registro.get("name").value;
    var password =  this.form_registro.get("password").value;
    var email =  this.form_registro.get("email").value;

    return this.servicioauth.register(email,password,name)
    }
    else {
      this.snackBar.open("Please Fill all  field", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      })
    }
  }

  login() {
    this.router.navigate(['login']);
  }



}
