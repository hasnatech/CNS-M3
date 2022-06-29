import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextComponent } from './img-text.component';

describe('ImgTextComponent', () => {
  let component: ImgTextComponent;
  let fixture: ComponentFixture<ImgTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
