import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogoconfir',
  templateUrl: './dialogoconfir.component.html',
  styleUrls: ['./dialogoconfir.component.scss'],
})
export class DialogoconfirComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<DialogoconfirComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }


  ngOnInit() {}

}
