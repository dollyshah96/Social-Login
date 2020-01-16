import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailBtn1Component } from './gmail-btn1.component';

describe('GmailBtn1Component', () => {
  let component: GmailBtn1Component;
  let fixture: ComponentFixture<GmailBtn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailBtn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailBtn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
