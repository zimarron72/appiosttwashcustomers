import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule} from '@angular/router';


import { TabClienteTobookPageRoutingModule } from './tab-cliente-tobook-routing.module';

// components
import { TabClienteTobookPage } from './tab-cliente-tobook.page';
import { CartComponent } from './cart/cart.component';
import { TipovehiculosComponent} from './tipovehiculos/tipovehiculos.component';
import {TipolavadosComponent} from './tipolavados/tipolavados.component';
import {TiposerviciosComponent} from './tiposervicios/tiposervicios.component';
import {IngresarsitioComponent} from './ingresarsitio/ingresarsitio.component'
import {IngresarperfilComponent} from './ingresarperfil/ingresarperfil.component'
import {IngresarcamionComponent} from './ingresarcamion/ingresarcamion.component'
import {CitamobilComponent} from './citamobil/citamobil.component'
import {CitayardaComponent} from './citayarda/citayarda.component'
import {MybooksComponent} from './mybooks/mybooks.component'

import { TipopagosComponent } from './tipopagos/tipopagos.component';
import { TipobooksComponent } from './tipobooks/tipobooks.component';
import { DialogoconfirComponent } from './dialogoconfir/dialogoconfir.component';
import { SquareComponent } from './square/square.component';
import { MypaysComponent } from './mypays/mypays.component';
import { WashsComponent } from './washs/washs.component';
import { DialogreservacionComponent } from './dialogreservacion/dialogreservacion.component';
import { DialogcuponComponent } from './dialogcupon/dialogcupon.component';
import { DialogaddvehiculoComponent } from './dialogaddvehiculo/dialogaddvehiculo.component';
import { DialogositioComponent } from './dialogositio/dialogositio.component';
import { SuccesstobookComponent } from './successtobook/successtobook.component';
import { SuccesspayComponent } from './successpay/successpay.component';
import { DealsweekComponent } from './dealsweek/dealsweek.component';
import { SquareConcargoComponent } from './square-concargo/square-concargo.component';
import { GaleriaComponent } from './galeria/galeria.component';




// servicio
import {ServiciosTobook} from "./servicios.tobook";
import { DatabaseService } from '../shared/database-service';
import {StorageService} from '../shared/storage.service'
import { SquareServicio } from '../shared/square.servicio';

// Material angular
import {MatListModule} from '@angular/material/list';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule} from '@angular/material/sidenav';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'; 
import { MatDialogModule } from '@angular/material/dialog';



// Form
import { ReactiveFormsModule } from "@angular/forms";

// Other
import { IonicStorageModule } from '@ionic/storage-angular';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   TabClienteTobookPageRoutingModule,
   MatListModule,
   MatButtonModule,
   MatIconModule,
   MatDividerModule,
   RouterModule,
   MatToolbarModule,
   FlexLayoutModule,
   MatSidenavModule,
   MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatNativeDateModule,
  MatTableModule,
  MatDialogModule,
  IonicStorageModule
 
  ],


  declarations: [TabClienteTobookPage,
    CartComponent,
      TipovehiculosComponent,
       TipolavadosComponent,
        TiposerviciosComponent,
        IngresarsitioComponent,
        IngresarperfilComponent,
        IngresarcamionComponent,
        CitamobilComponent,
        CitayardaComponent,
        MybooksComponent,
        WashsComponent,
        TipopagosComponent,
        TipobooksComponent,
        DialogoconfirComponent,
        DialogreservacionComponent,
        DialogcuponComponent,
        SquareComponent,
        MypaysComponent,
        DialogaddvehiculoComponent,
        DialogositioComponent,
        SuccesstobookComponent,
        SuccesspayComponent,
        DealsweekComponent,
        SquareConcargoComponent,
        GaleriaComponent,
   


      ],

      entryComponents: [
        
      ],

  providers: [ServiciosTobook, DatabaseService, StorageService,  SquareServicio],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]


})
export class TabClienteTobookPageModule {}
