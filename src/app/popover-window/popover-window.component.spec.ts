import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverWindowComponent } from './popover-window.component';

describe('PopoverWindowComponent', () => {
  let component: PopoverWindowComponent;
  let fixture: ComponentFixture<PopoverWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
