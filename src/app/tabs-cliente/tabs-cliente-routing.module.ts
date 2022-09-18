import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsClientePage } from './tabs-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: TabsClientePage,

    children: [
      {
        path: 'profile',
        loadChildren: () => import('../tab-cliente-profile/tab-cliente-profile.module').then(m => m.TabClienteProfilePageModule)
      },
     
      {
        path: 'tobook',
        loadChildren: () => import('../tab-cliente-tobook/tab-cliente-tobook.module').then(m => m.TabClienteTobookPageModule)
      },
   
      {
        path: '',
        redirectTo: '/tabs-cliente/tobook',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-cliente/tobook',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsClientePageRoutingModule {}
