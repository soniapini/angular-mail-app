import {async, TestBed} from '@angular/core/testing';
import {NisMailViewComponent} from './nis-mail-view.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NisMailViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'base'`, () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('base');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('base app is running!');
  });
});
