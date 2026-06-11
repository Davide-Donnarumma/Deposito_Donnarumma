import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './price.html',
  styleUrl: './price.css',
})
export class PriceComponent {
  prezzoNetto = signal(100);

  aliquotaIva = signal(22);

  prezzoLordo = computed(() => {
    return this.prezzoNetto() * (1 + this.aliquotaIva() / 100);
  });

  updatePrice(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    this.prezzoNetto.set(value);
  }
}
