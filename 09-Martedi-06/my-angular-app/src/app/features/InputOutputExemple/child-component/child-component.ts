import { Component, input} from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  // @Input() childCounter: number = 0;
  // @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  nome = input<string>();
  prezzo = input<number>(0);
  disponibile = input<boolean>();

  // increment(): void {
  //   this.counterChange.emit(++this.childCounter);
  // }

  // decrement(): void {
  //   this.counterChange.emit(--this.childCounter);
  // }
}
