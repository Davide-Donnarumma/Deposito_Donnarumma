import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn.set(false);
  }
}
