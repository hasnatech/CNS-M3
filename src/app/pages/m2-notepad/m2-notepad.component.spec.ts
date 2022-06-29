import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2NotepadComponent } from './m2-notepad.component';

describe('M2NotepadComponent', () => {
  let component: M2NotepadComponent;
  let fixture: ComponentFixture<M2NotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2NotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2NotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
