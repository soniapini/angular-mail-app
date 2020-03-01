import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageListPageComponent} from './message-list-page.component';

describe('MessageListPageComponent', () => {
  let component: MessageListPageComponent;
  let fixture: ComponentFixture<MessageListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
