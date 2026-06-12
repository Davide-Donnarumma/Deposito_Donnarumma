import { Component } from '@angular/core';
import { UserRegister } from './features/user-register/user-register';
// import { TitleComponent } from './features/title-component/title-component';
// import { ParagraphComponent } from './features/paragraph-component/paragraph-component';
// import { ImageComponent } from './features/image-component/image-component';
// import { BindingComponent } from './features/binding-component/binding-component';
// import { ProductCardComponent } from "./features/product-card-component/product-card-component";
// import { ParentComponent } from './features/InputOutputExemple/parent-component/parent-component';
// import { SignalExampleComponent } from "./features/signal-example-component/signal-example-component";
// import { TrafficLightComponent } from './features/traffic-light-component/traffic-light-component';
// import { PriceComponent } from './features/price/price';
import { AddItemComponent } from './features/add-item/add-item';
import { ShoppingListComponent } from './features/shopping-list-component/shopping-list-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // ParagraphComponent,
    // ImageComponent,
    // BindingComponent,
    // ProductCardComponent
    // UserRegister,
    // ParentComponent,
    // SignalExampleComponent
    // TrafficLightComponent,
    // PriceComponent
    AddItemComponent,
    ShoppingListComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('my-angular-app');
}
