import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2Solution1Component } from './m2-solution1.component';

describe('M2Solution1Component', () => {
  let component: M2Solution1Component;
  let fixture: ComponentFixture<M2Solution1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Solution1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2Solution1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
