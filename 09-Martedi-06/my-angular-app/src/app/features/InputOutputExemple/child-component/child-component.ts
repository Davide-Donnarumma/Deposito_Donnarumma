import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() childCounter: number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  increment(): void {
    this.counterChange.emit(++this.childCounter);
  }

  decrement(): void {
    this.counterChange.emit(--this.childCounter);
  }
}
