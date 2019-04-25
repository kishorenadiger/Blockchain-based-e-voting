import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclkarmyComponent } from './onclkarmy.component';

describe('OnclkarmyComponent', () => {
  let component: OnclkarmyComponent;
  let fixture: ComponentFixture<OnclkarmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnclkarmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnclkarmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
