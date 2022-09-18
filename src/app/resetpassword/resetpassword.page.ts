import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import {ServicioAutenticacion} from '../shared/servicio.autenticacion'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  form_reset : FormGroup
  constructor(

    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private servicioauth : ServicioAutenticacion,
    private router: Router,

  ) { }

  ngOnInit() {
    this.reactiveForm()
  }

  reactiveForm() {
  
    this.form_reset = this.formBuilder.group({
      email: [, { validators: [Validators.required]}],    
      
    });
  }


  submit() {
 
    if (this.form_reset.valid) {
  
    
    var email = this.form_reset.get("email").value;
     
      return this.servicioauth.resetpassword(email)
  
    }
  
    else {
      this.snackBar.open("Please, this value is required", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      })
    }
  
    }

    cancel() {

      this.router.navigate(['/login']);
    
    }

}
