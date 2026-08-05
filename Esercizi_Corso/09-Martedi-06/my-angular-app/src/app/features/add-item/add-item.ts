import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItemComponent {
  //Inietta il service
  private shoppingListService = inject(ShoppingListService);

  //Metodo per gestire l'inserimento dell'elemento
  onAddItem(inputElement: HTMLInputElement): void {
    const valore = inputElement.value;
    if (valore.trim()) {
      //Al click, chiama addItem del service e svuota il campo
      this.shoppingListService.addItem(valore);
      inputElement.value = '';
    }
  }
}
