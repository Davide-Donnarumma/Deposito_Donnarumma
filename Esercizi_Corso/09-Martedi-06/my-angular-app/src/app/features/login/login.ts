import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal<string>('');

  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const success = this.authService.login(username, password);

      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage.set('Credenziali non valide. Riprovare.');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
