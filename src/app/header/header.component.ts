import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logFullURL(event: Event) {
    event.preventDefault(); // Evita la navegación inmediata para que puedas ver la URL antes
    console.log('URL completa:', window.location.origin + '/client/new');
    setTimeout(() => window.location.href = window.location.origin + '/client/new', 100); // Redirige después
  }
}
