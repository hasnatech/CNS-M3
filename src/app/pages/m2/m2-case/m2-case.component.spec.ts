import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2CaseComponent } from './m2-case.component';

describe('M2CaseComponent', () => {
  let component: M2CaseComponent;
  let fixture: ComponentFixture<M2CaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2CaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2CaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
