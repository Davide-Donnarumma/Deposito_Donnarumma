import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./features/student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app-10');
}
