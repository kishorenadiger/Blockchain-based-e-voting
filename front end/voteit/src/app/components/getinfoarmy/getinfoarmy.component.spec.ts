import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoarmyComponent } from './getinfoarmy.component';

describe('GetinfoarmyComponent', () => {
  let component: GetinfoarmyComponent;
  let fixture: ComponentFixture<GetinfoarmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinfoarmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoarmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
