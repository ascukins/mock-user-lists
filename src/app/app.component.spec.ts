import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a HeaderComponent', () => {
    const headerElement = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );
    expect(headerElement).toBeTruthy();
  });

  it('should have a FooterComponent', () => {
    const footerElement = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(footerElement).toBeTruthy();
  });

  it('should have a RouterOutlet', () => {
    const routerOutletElement = fixture.debugElement.query(
      By.directive(RouterOutlet)
    );
    expect(routerOutletElement).toBeTruthy();
  });
});
