import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiciosTobook} from "../servicios.tobook";
import { StorageService } from '../../shared/storage.service';
import { LoadingService } from '../../shared/loading.services';

interface Imagenes {
  [index: number]: Imagen    
 
}

interface Imagen {

  titulo : string;
  url: string;
  
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

imagenes : Imagenes;
 idtoken : string
autenticacion_tipo : string
token_notificacion : string
user: any
id : any

/*sliderOpt = {


  zoom: {
    maxRatio: 5,
  },
};*/



  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private serviciostobook: ServiciosTobook,  
    private loading : LoadingService,
    private localstorage: StorageService,
    private rutaActiva: ActivatedRoute,
    private location: Location,
  ) { 
  

  
  }
  
 sliderOpt = {
 /*  initialSlide: 1,
slidesPerView:1,
centeredSlides:true,
loop:true,
spaceBetween:1,*/
 zoom: {
    maxRatio: 2,
  },  

  on: {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      const { $, slides, rtlTranslate: rtl } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset$$1 = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = -offset$$1;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          let shadowBefore = swiper.isHorizontal()
            ? $slideEl.find('.swiper-slide-shadow-left')
            : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = swiper.isHorizontal()
            ? $slideEl.find('.swiper-slide-shadow-right')
            : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = swiper.$(
              `<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`
            );
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = swiper.$(
              `<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
        $slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, activeIndex, $wrapperEl } = swiper;
      slides
        .transition(duration)
        .find(
          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
        )
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;

          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  },
  
  }










  async ngOnInit() {
  
 
  
     this.id = this.rutaActiva.snapshot.params.order_item_id;
   
    this.rutaActiva.params.subscribe(

      (params: Params) => {
        
        this.id = params.order_item_id;       
        
      }
    );
  
 this.user = JSON.parse(await this.localstorage.getData('usuario'))
    this.idtoken = await this.localstorage.getData('idtoken')
    this.autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')

    if(this.user)
    {  
     // this.loading.simpleLoader()
      this.serviciostobook.getImagenesJob(this.idtoken,this.autenticacion_tipo,this.id).subscribe({ 
        next: data => {
       //   this.loading.dismissLoader()
      
          switch(data.respuesta) { 
          case 'ERROR':
            this.localstorage.clearData()
            this.router.navigate(['/login'])        
            this.snackBar.open("Sorry, an error occurred,please login again3", "Close",
            {       
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );   
          break;
          case 'TOKEN ERROR':
            this.localstorage.clearData()
            this.router.navigate(['/login'])   
          this.snackBar.open("Invalid or expired token,please login again4", "Close",
          {       
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje);
        break; 
        default:
  this.imagenes = data;
console.log(this.imagenes);
       
          }         
        },
        error: error => {     
        //  this.loading.dismissLoader() 
       
          var errorMessage = error.message                    
          console.error('There was an error!', errorMessage);
          this.localstorage.clearData()
      this.router.navigate(['/login'])        
      this.snackBar.open("Sorry, an error occurred,please login again5", "Close",
      {       
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      ); 
      }

      }); 
    }
    
    else {
 // borramos la informacion local

 this.localstorage.clearData()
     this.router.navigate(['/login']);
 
     this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
     {       
       horizontalPosition: "start",
       verticalPosition: "top",
     }
     ); 

    } 
  
  }
  
  goBack(): void {
    this.location.back();
  }

}
