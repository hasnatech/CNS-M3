import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFullimageComponent } from './text-fullimage.component';

describe('TextFullimageComponent', () => {
  let component: TextFullimageComponent;
  let fixture: ComponentFixture<TextFullimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFullimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFullimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
