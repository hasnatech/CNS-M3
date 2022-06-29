import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2SolutionComponent } from './m2-solution.component';

describe('M2SolutionComponent', () => {
  let component: M2SolutionComponent;
  let fixture: ComponentFixture<M2SolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2SolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
