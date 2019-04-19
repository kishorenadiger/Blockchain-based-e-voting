import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtvComponent } from './wtv.component';

describe('WtvComponent', () => {
  let component: WtvComponent;
  let fixture: ComponentFixture<WtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
