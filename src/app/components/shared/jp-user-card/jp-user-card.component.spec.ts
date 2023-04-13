import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JpUserCardComponent } from './jp-user-card.component';
import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

describe('JpUserCardComponent', () => {
  let component: JpUserCardComponent;
  let fixture: ComponentFixture<JpUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JpUserCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpUserCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user properties', () => {
    const user: JsonPlaceholderUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.card-header h3').textContent).toContain(
      user.name
    );
    expect(
      compiled.querySelector('.card-body p:nth-child(1)').textContent
    ).toContain(user.username);
    expect(
      compiled.querySelector('.card-body p:nth-child(2) a').textContent
    ).toContain(user.email);
    expect(
      compiled.querySelector('.card-body p:nth-child(3)').textContent
    ).toContain(user.phone);
    expect(
      compiled.querySelector('.card-body p:nth-child(4) a').textContent
    ).toContain(user.website);
    expect(
      compiled.querySelector('.card-body p:nth-child(5)').textContent
    ).toContain(user.company.name);
    expect(
      compiled.querySelector('.card-body p:nth-child(6)').textContent
    ).toContain(user.address.city);
    expect(
      compiled.querySelector('.card-body p:nth-child(7)').textContent
    ).toContain(user.address.street);
    expect(
      compiled.querySelector('.card-body p:nth-child(8)').textContent
    ).toContain(user.address.suite);
  });
});
