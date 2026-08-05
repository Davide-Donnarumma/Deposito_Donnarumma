import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Al click, effettua il logout e rimanda l'utente alla schermata di login
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
