import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingInputControlComponent } from './rating-input-control.component';

describe('RatingInputControlComponent', () => {
  let component: RatingInputControlComponent;
  let fixture: ComponentFixture<RatingInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
