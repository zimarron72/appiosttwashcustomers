import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabClienteProfilePageRoutingModule } from './tab-cliente-profile-routing.module';
import { RouterModule} from '@angular/router';



// servicio
import {ServiciosProfile} from "./servicios.profile";
import { DatabaseService } from '../shared/database-service';
import {StorageService} from '../shared/storage.service'

// components
import { TabClienteProfilePage } from './tab-cliente-profile.page';
import { FleetComponent } from './fleet/fleet.component';
import { ProfileComponent } from './profile/profile.component';
import { BilladdressComponent } from './billaddress/billaddress.component';
import { AccountComponent } from './account/account.component';
import { LocationsComponent } from './locations/locations.component';
import { AddsiteComponent } from './addsite/addsite.component';
import { AddcarComponent } from './addcar/addcar.component';






// Angular Material

import {MatTableModule} from '@angular/material/table';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
// Form
import { ReactiveFormsModule } from "@angular/forms";
// Other
import { IonicStorageModule } from '@ionic/storage-angular';
import { Camera} from '@awesome-cordova-plugins/camera/ngx';
import {File} from "@awesome-cordova-plugins/file/ngx";
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';











@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabClienteProfilePageRoutingModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule ,
    IonicStorageModule ,
    MatSlideToggleModule

  ],
  declarations: [
    TabClienteProfilePage,
     FleetComponent, 
     ProfileComponent, 
     LocationsComponent, 
     BilladdressComponent,     
     AccountComponent, 
     AddsiteComponent,
     AddcarComponent,
    
    
    ],
   


  providers: [ServiciosProfile, DatabaseService, StorageService, Camera, File,Chooser]
})
export class TabClienteProfilePageModule {}
