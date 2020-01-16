import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailBtn2Component } from './gmail-btn2.component';

describe('GmailBtn2Component', () => {
  let component: GmailBtn2Component;
  let fixture: ComponentFixture<GmailBtn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailBtn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailBtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
