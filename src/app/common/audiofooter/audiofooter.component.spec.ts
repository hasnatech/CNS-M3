import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiofooterComponent } from './audiofooter.component';

describe('AudiofooterComponent', () => {
  let component: AudiofooterComponent;
  let fixture: ComponentFixture<AudiofooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiofooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
