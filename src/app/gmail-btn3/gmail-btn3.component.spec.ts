import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailBtn3Component } from './gmail-btn3.component';

describe('GmailBtn3Component', () => {
  let component: GmailBtn3Component;
  let fixture: ComponentFixture<GmailBtn3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailBtn3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailBtn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
