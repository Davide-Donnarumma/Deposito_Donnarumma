import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  //Dichiariamo un signal items inizializzato a un array vuoto
  items = signal<string[]>([]);

  //Metodo addItem che usa update per aggiungere un elemento
  addItem(nome: string): void {
    if (nome.trim()) {
      this.items.update((currentItems) => [...currentItems, nome]);
    }
  }

  //Metodo removeItem che rimuove un elemento per indice
  removeItem(index: number): void {
    this.items.update((currentItems) => currentItems.filter((_, i) => i !== index));
  }
}
