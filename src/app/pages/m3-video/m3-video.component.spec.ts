import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3VideoComponent } from './m3-video.component';

describe('M3VideoComponent', () => {
  let component: M3VideoComponent;
  let fixture: ComponentFixture<M3VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3VideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
