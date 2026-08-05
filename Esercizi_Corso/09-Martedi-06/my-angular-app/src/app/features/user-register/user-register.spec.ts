import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegister } from './user-register';

describe('UserRegister', () => {
  let component: UserRegister;
  let fixture: ComponentFixture<UserRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
