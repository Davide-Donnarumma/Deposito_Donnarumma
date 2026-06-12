import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItem } from './add-item';

describe('AddItem', () => {
  let component: AddItem;
  let fixture: ComponentFixture<AddItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
