import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoshoppingComponent } from './goshopping.component';

describe('GoshoppingComponent', () => {
  let component: GoshoppingComponent;
  let fixture: ComponentFixture<GoshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoshoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
