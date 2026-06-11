import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light-component.html',
  styleUrl: './traffic-light-component.css',
})
export class TrafficLightComponent {
  colore = signal<string>('rosso');

  avanza(): void {
    this.colore.update((coloreCorrente) => {
      if (coloreCorrente === 'rosso') {
        return 'verde';
      } else if (coloreCorrente === 'verde') {
        return 'giallo';
      } else {
        return 'rosso';
      }
    });
  }
}
