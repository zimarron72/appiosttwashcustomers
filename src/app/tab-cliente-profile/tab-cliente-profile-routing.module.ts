import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabClienteProfilePage } from './tab-cliente-profile.page';

import { FleetComponent } from './fleet/fleet.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationsComponent } from './locations/locations.component';
import { BilladdressComponent } from './billaddress/billaddress.component';
import { AccountComponent } from './account/account.component';
import { AddsiteComponent } from './addsite/addsite.component';
import { AddcarComponent } from './addcar/addcar.component';


const routes: Routes = [
  {
    path: '',
    component: TabClienteProfilePage,

    children: [
      
      { path: 'fleet', component: FleetComponent },
      { path: 'nav-profile', component: ProfileComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'billaddress', component: BilladdressComponent },
      { path: 'account', component:AccountComponent },
      { path: 'addsitio', component:AddsiteComponent },
      { path: 'addcar', component:AddcarComponent },
     
      
      {
        path: '',
        redirectTo: '/tabs-cliente/profile/nav-profile',
      },
      
     
    ],
  },
    {
      path: '',
      redirectTo: '/tabs-cliente/profile/nav-profile',
    },
  






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabClienteProfilePageRoutingModule {}
