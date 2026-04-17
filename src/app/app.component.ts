import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements AfterViewInit {
  title = 'nja-tech-landing';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Cambiamos ngOnInit por ngAfterViewInit para asegurar que el HTML ya se dibujó
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Le damos un respiro mínimo a Angular para que acomode las imágenes
      setTimeout(() => {
        AOS.init({
          duration: 600, // Lo bajamos de 800 a 600 para que sea más veloz
          once: true,
          offset: 30     // Arranca casi apenas aparece en pantalla (estaba en 100)
        });
        
        // Forzamos a AOS a recalcular las posiciones exactas de todo
        AOS.refresh();
      }, 150);
    }
  }
}