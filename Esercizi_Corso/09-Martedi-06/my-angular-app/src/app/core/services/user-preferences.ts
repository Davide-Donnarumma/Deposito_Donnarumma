import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPreferences {
  username = signal<string>('Ospite');
  temaScuro = signal<boolean>(false);

  setUsername(nome: string): void {
    this.username.set(nome || 'Ospite');
  }

  toggleTema(): void {
    this.temaScuro.update((valoreAttuale) => !valoreAttuale);
  }
}
