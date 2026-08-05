import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComponent } from './binding-component';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
