import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from './router-link-directive-stub';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent, RouterLinkDirectiveStub],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menu items', () => {
    const menuItems = de.queryAll(By.css('nav ul li a'));
    expect(menuItems.length).toBe(2);
    expect(menuItems[0].nativeElement.textContent).toContain(
      'jsonplaceholder.typicode.com'
    );
    expect(menuItems[1].nativeElement.textContent).toContain('reqres.in');
  });

  it('should have routerLink directives', () => {
    const routerLinks = de.queryAll(By.directive(RouterLinkDirectiveStub));
    const routerLinkStubs = routerLinks.map((de) =>
      de.injector.get(RouterLinkDirectiveStub)
    );
    expect(routerLinks.length).toBe(2);
    expect(routerLinkStubs[0].linkParams[0]).toBe('/jsonplaceholder');
    expect(routerLinkStubs[1].linkParams[0]).toBe('/reqres');
  });
});
