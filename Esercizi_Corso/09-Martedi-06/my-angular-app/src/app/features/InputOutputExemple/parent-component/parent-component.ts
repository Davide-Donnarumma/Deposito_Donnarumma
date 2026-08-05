import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  // counter: number = 0;

  // onCounterChanged(newValue: number): void {
  //   this.counter = newValue;
  // }

  prodotti = [
    { nome: 'PC', prezzo: 1200, disponibile: true },
    { nome: 'Mouse', prezzo: 180, disponibile: false },
    { nome: 'Tastiera', prezzo: 279, disponibile: true },
  ];
}
