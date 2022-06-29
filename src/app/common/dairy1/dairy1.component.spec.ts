import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dairy1Component } from './dairy1.component';

describe('Dairy1Component', () => {
  let component: Dairy1Component;
  let fixture: ComponentFixture<Dairy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dairy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dairy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
