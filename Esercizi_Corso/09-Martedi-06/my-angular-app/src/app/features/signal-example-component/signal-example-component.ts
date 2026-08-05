import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example-component',
  imports: [],
  templateUrl: './signal-example-component.html',
  styleUrl: './signal-example-component.css',
})
export class SignalExampleComponent {
  counter = signal(0);
  name = signal('Marco');

  double = computed(() => {
    return this.counter() * 2;
  });

  saluto = computed(() => 'Ciao, ' + this.name() + '!');

  logRighe: string[] = [];
  private _log = effect(() => {
    const riga = `contatore = ${this.counter()} | nome = ${this.name()}`;
    // this.logRighe.push()
    this.logRighe = [riga, ...this.logRighe].slice(0, 5);
    // console.log(this.logRighe)
  });

  increment(): void {
    this.counter.set(this.counter() + 1);
    // this.counter.update(val => val + 1)
  }

  decrement(): void {
    this.counter.set(this.counter() - 1);
  }

  reset(): void {
    this.counter.set(0);
  }

  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
