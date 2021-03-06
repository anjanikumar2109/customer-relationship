import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDemoComponent } from './dynamic-demo.component';

describe('DynamicDemoComponent', () => {
  let component: DynamicDemoComponent;
  let fixture: ComponentFixture<DynamicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
