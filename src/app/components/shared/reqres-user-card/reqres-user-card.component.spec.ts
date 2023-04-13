import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReqresUserCardComponent } from './reqres-user-card.component';
import { ReqResUser } from 'src/app/types/reqres-types';

describe('ReqresUserCardComponent', () => {
  let component: ReqresUserCardComponent;
  let fixture: ComponentFixture<ReqresUserCardComponent>;
  let mockUser: ReqResUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReqresUserCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresUserCardComponent);
    component = fixture.componentInstance;

    mockUser = {
      id: 1,
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://example.com/avatar.jpg',
    };

    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user avatar', () => {
    const avatarElement = fixture.debugElement.query(
      By.css('.user-avatar')
    ).nativeElement;
    expect(avatarElement.src).toBe(mockUser.avatar);
  });

  it('should display user name', () => {
    const nameElement = fixture.debugElement.query(
      By.css('.user-details h3')
    ).nativeElement;
    expect(nameElement.textContent).toContain(
      `${mockUser.first_name} ${mockUser.last_name}`
    );
  });

  it('should display user email', () => {
    const emailElement = fixture.debugElement.query(
      By.css('.user-details p')
    ).nativeElement;
    expect(emailElement.textContent).toContain(mockUser.email);
  });
});
