import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Page36Component } from './m2-page36.component';

describe('M2Page36Component', () => {
  let component: M2Page36Component;
  let fixture: ComponentFixture<M2Page36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Page36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Page36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
