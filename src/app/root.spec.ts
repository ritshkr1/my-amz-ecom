import { TestBed } from '@angular/core/testing';
import { Root } from './root';

describe('Root', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Root],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Root);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Root);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-amz-ecom');
  });
});
