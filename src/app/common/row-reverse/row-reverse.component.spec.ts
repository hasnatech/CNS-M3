import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowReverseComponent } from './row-reverse.component';

describe('RowReverseComponent', () => {
  let component: RowReverseComponent;
  let fixture: ComponentFixture<RowReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
