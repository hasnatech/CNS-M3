import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Page16Component } from './m2-page16.component';

describe('M2Page16Component', () => {
  let component: M2Page16Component;
  let fixture: ComponentFixture<M2Page16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Page16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Page16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
