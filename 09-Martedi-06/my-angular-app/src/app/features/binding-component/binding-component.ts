import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule],
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
})
export class BindingComponent {
  // Interpolation Binding
  username: string = 'Francesca';
  num: number = 10;

  // Image Property Binding
  imageUrl: string =
    'https://s1.qwant.com/thumbr/474x474/8/2/5c5576fd37f8b9d1f85b2fb9b83d83d77f588b6ebc43145858fdedf10eee8b/OIP.Zz0w6tsXpIKPxX0_nwXAaAHaHa.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.Zz0w6tsXpIKPxX0_nwXAaAHaHa%3Fpid%3DApi&q=0&b=1&p=0&a=0';
  imageWidth: number = 100;
  imageHeight: number = 150;

  //Event Binding
  currentMsg: string = 'Buongiorno';
  messages: string[] = ['Buongiorno', 'Buon Pomeriggio', 'Buona Sera', 'Buona Notte'];
  index: number = 0;

  saluta(): void {
    this.index += 1;
    if (this.index >= this.messages.length) this.index = 0;

    this.currentMsg = this.messages[this.index];
  }

  resetUsername(): void {
    this.username = 'Francesca';
  }
}
