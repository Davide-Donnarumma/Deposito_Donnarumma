import { Component } from '@angular/core';
import { UserPreferences } from '../../core/services/user-preferences';
import { inject } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  public preferencesService = inject(UserPreferences);

  onUsernameChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.preferencesService.setUsername(inputElement.value);
  }
}
