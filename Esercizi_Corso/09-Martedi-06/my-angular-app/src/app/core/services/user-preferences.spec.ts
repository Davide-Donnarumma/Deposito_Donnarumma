import { TestBed } from '@angular/core/testing';

import { UserPreferences } from './user-preferences';

describe('UserPreferences', () => {
  let service: UserPreferences;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPreferences);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
