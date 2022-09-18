import { Component, OnInit } from '@angular/core';

//import firebase from "firebase/app";
import "firebase/auth";
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import { ServicioAutenticacion } from '../shared/servicio.autenticacion';
import { StorageService } from '../shared/storage.service';
//import { MenuController } from '@ionic/angular';





@Component({
  selector: 'app-tab-cliente-tobook',
  templateUrl: './tab-cliente-tobook.page.html',
  styleUrls: ['./tab-cliente-tobook.page.scss'],
})
export class TabClienteTobookPage implements OnInit {

  activePageTitle = 'To book';

  Pages = [
    {
      title: 'To book',
      url: '/tabs-cliente/tobook/tipovehiculos',
      icon: 'calendar-clear'
    },
    {
      title: 'Deals of the week',
      url: '/tabs-cliente/tobook/dealsweek',   
      icon: 'pricetags'
    },
    {
      title: 'Appointments',
      url: '/tabs-cliente/tobook/tipobooks',
      icon: 'calendar'
    },
    {
      title: 'Cart',
      url: '/tabs-cliente/tobook/cart',
      icon: 'cart'
    },
    {
      title: 'Payments',
      url: '/tabs-cliente/tobook/tipopagos',
      icon: 'card'
    }
  ]; 
  

 autenticacion_tipo : string
 cliente_name: string
 cliente_correo: string

  constructor(
    private router: Router,  
    private  angularAuth:  AngularFireAuth,
    private servicioauth: ServicioAutenticacion,
    private localstorage: StorageService,


   
    ) {


   }

  ngOnInit() {
    
    this.angularAuth.authState.subscribe(async user => {
      if (user){
        var cliente = JSON.parse(await this.localstorage.getData('usuario'))
        this.cliente_name = cliente.name
        this.cliente_correo = cliente.email
       this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')             
      } else {
        this.localstorage.clearData()
        this.router.navigate(['/login']);       
      }
    })
    
  }

  
  salida_regular() {
    
  this.servicioauth.logout_regular()
  
    }

    salida_google() {

      this.servicioauth.logout_google()
    }

  




}
