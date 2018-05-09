import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChildComponent } from './basic-child.component';

describe('BasicChildComponent', () => {
  let component: BasicChildComponent;
  let fixture: ComponentFixture<BasicChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
