import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkitchenComponent } from './addkitchen.component';

describe('AddkitchenComponent', () => {
  let component: AddkitchenComponent;
  let fixture: ComponentFixture<AddkitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddkitchenComponent]
    });
    fixture = TestBed.createComponent(AddkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
