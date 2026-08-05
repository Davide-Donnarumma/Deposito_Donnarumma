import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Price } from './price';

describe('Price', () => {
  let component: Price;
  let fixture: ComponentFixture<Price>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Price],
    }).compileComponents();

    fixture = TestBed.createComponent(Price);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
