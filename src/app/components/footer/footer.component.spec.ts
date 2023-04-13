import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have social media links', () => {
    const links = de.queryAll(By.css('a'));
    expect(links.length).toBe(3);
    expect(links[0].nativeElement.getAttribute('href')).toBe(
      'https://www.facebook.com'
    );
    expect(links[1].nativeElement.getAttribute('href')).toBe(
      'https://www.instagram.com'
    );
    expect(links[2].nativeElement.getAttribute('href')).toBe(
      'https://www.linkedin.com'
    );
  });

  it('should have Font Awesome icons', () => {
    const icons = de.queryAll(By.css('i'));
    expect(icons.length).toBe(3);
    expect(
      icons[0].nativeElement.classList.contains('fa-facebook-f')
    ).toBeTruthy();
    expect(
      icons[1].nativeElement.classList.contains('fa-instagram')
    ).toBeTruthy();
    expect(
      icons[2].nativeElement.classList.contains('fa-linkedin-in')
    ).toBeTruthy();
  });
});
