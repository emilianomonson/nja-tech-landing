import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  title = 'nja-tech-landing';

  // Inyectamos el ID de la plataforma para saber dónde estamos parados
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Le decimos a Angular: "Si estás en el navegador, recién ahí activá las animaciones"
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800, // Cuánto dura la animación
        once: true,    // Para que ocurra solo una vez al bajar
        offset: 100    // Margen antes de activar la animación
      });
    }
  }
}