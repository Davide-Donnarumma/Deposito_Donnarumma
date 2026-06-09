import { Component, signal } from '@angular/core';
import { TitleComponent } from './features/title-component/title-component';
import { ParagraphComponent } from './features/paragraph-component/paragraph-component';
import { ImageComponent } from './features/image-component/image-component';
import { BindingComponent } from './features/binding-component/binding-component';
import { ProductCardComponent } from "./features/product-card-component/product-card-component";

@Component({
  selector: 'app-root',
  imports: [TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponent,
    ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
