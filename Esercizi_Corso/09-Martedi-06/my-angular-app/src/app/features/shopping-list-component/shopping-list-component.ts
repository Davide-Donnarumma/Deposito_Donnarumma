import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {
  //Inietta sempre lo stesso service
  private shoppingListService = inject(ShoppingListService);

  items = this.shoppingListService.items;

  //Chiama removeItem passando l'indice
  onRemoveItem(index: number): void {
    this.shoppingListService.removeItem(index);
  }
}
