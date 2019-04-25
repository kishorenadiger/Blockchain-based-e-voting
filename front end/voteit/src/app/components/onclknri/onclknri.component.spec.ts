import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclknriComponent } from './onclknri.component';

describe('OnclknriComponent', () => {
  let component: OnclknriComponent;
  let fixture: ComponentFixture<OnclknriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnclknriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnclknriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
