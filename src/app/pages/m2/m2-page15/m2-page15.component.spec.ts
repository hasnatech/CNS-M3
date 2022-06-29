import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Page15Component } from './m2-page15.component';

describe('M2Page15Component', () => {
  let component: M2Page15Component;
  let fixture: ComponentFixture<M2Page15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Page15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Page15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
