import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialogcupon',
  templateUrl: './dialogcupon.component.html',
  styleUrls: ['./dialogcupon.component.scss'],
})
export class DialogcuponComponent implements OnInit {

  form_cupon: FormGroup;

  constructor(public dialogo: MatDialogRef<DialogcuponComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,  private formBuilder: FormBuilder,
    private snackBar: MatSnackBar, ) { }

    enviar(): void {
      if (this.form_cupon.valid) {
      this.dialogo.close(this.form_cupon.get('cuponcode').value)

      }

      else {
        this.snackBar.open("Cupon is required", "Close",
        {       
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );

      }
      

    }
  
   

    cancel(): void {
      this.dialogo.close();
    
    }

  ngOnInit() {

    this.form_cupon = this.formBuilder.group({
      cuponcode: [, { validators: [Validators.required]}]    
      
    });  


  }

}
