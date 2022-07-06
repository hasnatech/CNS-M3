import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3PopUpComponent } from './m3-pop-up.component';

describe('M3PopUpComponent', () => {
  let component: M3PopUpComponent;
  let fixture: ComponentFixture<M3PopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3PopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
