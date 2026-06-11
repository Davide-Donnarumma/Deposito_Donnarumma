import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css',
})
export class UserRegister {
  user = {
    nome: '',
    email: '',
    eta: null,
  };

  isRegistered = false;

  onSubmit(formValue: any): void {
    console.log(formValue);
    this.isRegistered = true;
  }
}
