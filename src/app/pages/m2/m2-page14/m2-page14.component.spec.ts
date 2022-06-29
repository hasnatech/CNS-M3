import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Page14Component } from './m2-page14.component';

describe('M2Page14Component', () => {
  let component: M2Page14Component;
  let fixture: ComponentFixture<M2Page14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Page14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Page14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
