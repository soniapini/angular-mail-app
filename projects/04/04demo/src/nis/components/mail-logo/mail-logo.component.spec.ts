import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MailLogoComponent} from './mail-logo.component';

describe('MailLogoComponent', () => {
  let component: MailLogoComponent;
  let fixture: ComponentFixture<MailLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailLogoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
