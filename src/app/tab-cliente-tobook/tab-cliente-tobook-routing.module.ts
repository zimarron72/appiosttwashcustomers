import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TabClienteTobookPage } from './tab-cliente-tobook.page';


import { TipovehiculosComponent} from './tipovehiculos/tipovehiculos.component';
import {TipolavadosComponent} from './tipolavados/tipolavados.component';
import {TiposerviciosComponent} from './tiposervicios/tiposervicios.component'
import {IngresarsitioComponent} from './ingresarsitio/ingresarsitio.component'
import {IngresarperfilComponent} from './ingresarperfil/ingresarperfil.component'
import {IngresarcamionComponent} from './ingresarcamion/ingresarcamion.component'
import {CitamobilComponent} from './citamobil/citamobil.component'
import {CitayardaComponent} from './citayarda/citayarda.component'
import { CartComponent } from './cart/cart.component';
import {MybooksComponent} from './mybooks/mybooks.component'
import { TipopagosComponent } from './tipopagos/tipopagos.component'
import { TipobooksComponent } from './tipobooks/tipobooks.component'
import { SquareComponent } from './square/square.component';
import { MypaysComponent } from './mypays/mypays.component';
import { WashsComponent } from './washs/washs.component';
import { SuccesstobookComponent } from './successtobook/successtobook.component';
import { SuccesspayComponent } from './successpay/successpay.component';
import { DealsweekComponent } from './dealsweek/dealsweek.component';
import { SquareConcargoComponent } from './square-concargo/square-concargo.component';


const routes: Routes = [
  {
    path: '',
    component: TabClienteTobookPage,
    
    children: [
      
      { path: 'tipovehiculos', component: TipovehiculosComponent },
      { path: 'tipolavados/:vehiculo/:vehiculoid', component: TipolavadosComponent },
      { path: 'tiposervicios/:vehiculo/:lavado/:lavadoid', component: TiposerviciosComponent },
      { path: 'washs/:washname/:washlavado/:washvehiculo/:washdescripcion/:washid/:washprecio', component: WashsComponent },
      { path: 'ingresarsitio', component: IngresarsitioComponent },
      { path: 'ingresarperfil', component: IngresarperfilComponent},
      { path: 'ingresarcamion', component: IngresarcamionComponent },
      { path: 'citamobil', component: CitamobilComponent },
      { path: 'citayarda', component: CitayardaComponent },
      { path: 'cart', component: CartComponent },
      { path: 'mybooks/:n', component: MybooksComponent },
      { path: 'mypays/:p', component: MypaysComponent },
      { path: 'tipopagos', component: TipopagosComponent },
      { path: 'tipobooks', component: TipobooksComponent},     
      { path: 'square/:servicio/:precio/:itemid/:wash_id/:descuento/:charge/:concepto:/:charge_status', component: SquareComponent},
      { path: 'successtobook', component: SuccesstobookComponent}, 
      { path: 'successpay', component: SuccesspayComponent}, 
      { path: 'dealsweek', component: DealsweekComponent},     
      { path: 'squareconcargo/:servicio/:precio/:itemid/:wash_id/:descuento/:charge/:concepto/:charge_status', component: SquareConcargoComponent},

      {
        path: '',
        redirectTo: '/tabs-cliente/tobook/tipovehiculos',
      },
  
     
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-cliente/tobook/tipovehiculos',
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabClienteTobookPageRoutingModule {}
