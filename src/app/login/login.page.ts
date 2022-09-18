import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import {ServicioAutenticacion} from '../shared/servicio.autenticacion'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form_login : FormGroup
  user : any

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private servicioauth : ServicioAutenticacion,
    private router: Router,

    
   

  ) { 
    
  }

ngOnInit() {
   
    this.reactiveForm()

  }

  reactiveForm() {
  
    this.form_login = this.formBuilder.group({
      email: [, { validators: [Validators.required]}],
      password: [, { validators: [Validators.required] }]
      
    });
  }

 submit() {
 
  if (this.form_login.valid) {

  
  var email = this.form_login.get("email").value;
    var password = this.form_login.get("password").value;
    return this.servicioauth.login(email,password)

  }

  else {
    this.snackBar.open("Please Fill all  field", "Close",
    {       
      horizontalPosition: "start",
      verticalPosition: "top",
    })
  }

  }

  logingoogle () {

   return this.servicioauth.loginWithGoogle()
  }

  registro () {

   this.router.navigate(['registro']);
  }

  resetpassword(){

    this.router.navigate(['resetpassword']);
  }




 

}
