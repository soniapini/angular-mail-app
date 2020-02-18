import {async, TestBed} from '@angular/core/testing';
import {NisMailViewComponent} from './nis-mail-view.component';

describe('NisComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NisMailViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the webmail app', () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'base01'`, () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('base01');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NisMailViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nis-mail-logo')).toBeDefined();
  });
});
