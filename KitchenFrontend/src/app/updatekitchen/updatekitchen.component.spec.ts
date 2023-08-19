import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatekitchenComponent } from './updatekitchen.component';

describe('UpdatekitchenComponent', () => {
  let component: UpdatekitchenComponent;
  let fixture: ComponentFixture<UpdatekitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatekitchenComponent]
    });
    fixture = TestBed.createComponent(UpdatekitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
