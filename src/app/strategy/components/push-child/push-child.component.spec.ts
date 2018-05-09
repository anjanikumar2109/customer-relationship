import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushChildComponent } from './push-child.component';

describe('PushChildComponent', () => {
  let component: PushChildComponent;
  let fixture: ComponentFixture<PushChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
