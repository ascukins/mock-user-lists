import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/interface';
import { fetchReqResUsers } from 'src/app/store/reqres/actions';
import {
  reqResErrorSelector,
  reqResLoadingSelector,
  reqResUsersSelector,
} from 'src/app/store/selectors';
import { UserListReqResComponent } from './user-list-req-res.component';
import { LoadingMessageComponent } from '../../shared/loading-message/loading-message.component';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { CardGridComponent } from '../../shared/card-grid/card-grid.component';
import { ReqresUserCardComponent } from '../../shared/reqres-user-card/reqres-user-card.component';

describe('UserListReqResComponent', () => {
  let component: UserListReqResComponent;
  let fixture: ComponentFixture<UserListReqResComponent>;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    reqRes: {
      loading: false,
      error: null,
      users: [],
    },
    jp: {
      loading: false,
      error: null,
      users: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserListReqResComponent,
        LoadingMessageComponent,
        ErrorMessageComponent,
        CardGridComponent,
        ReqresUserCardComponent,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListReqResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchReqResUsers action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fetchReqResUsers());
  });

  it('should show loading message when loading$', () => {
    store.overrideSelector(reqResLoadingSelector, true);
    store.refreshState();
    fixture.detectChanges();

    const loadingMessage = fixture.debugElement.query(
      By.directive(LoadingMessageComponent)
    );
    expect(loadingMessage).toBeTruthy();
  });

  it('should show error message when error$', () => {
    const errorMessage = 'Error fetching users';
    store.overrideSelector(reqResErrorSelector, errorMessage);
    store.refreshState();
    fixture.detectChanges();

    const errorMessageComponent = fixture.debugElement.query(
      By.directive(ErrorMessageComponent)
    );
    expect(errorMessageComponent).toBeTruthy();
    expect(errorMessageComponent.componentInstance.message).toBe(errorMessage);
  });

  it('should show user cards when users$ has data', () => {
    const users = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        avatar: 'https://example.com/avatar1.png',
        email: 'john@example.com',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        avatar: 'https://example.com/avatar2.png',
        email: 'jane@example.com',
      },
    ];
    store.overrideSelector(reqResUsersSelector, users);
    store.overrideSelector(reqResLoadingSelector, false);
    store.overrideSelector(reqResErrorSelector, null);

    store.refreshState();
    fixture.detectChanges();

    const userCards = fixture.debugElement.queryAll(
      By.directive(ReqresUserCardComponent)
    );
    expect(userCards.length).toBe(users.length);

    userCards.forEach((card, index) => {
      expect(card.componentInstance.user).toEqual(users[index]);
    });
  });

  it('should not show user cards when users$ is empty', () => {
    store.overrideSelector(reqResUsersSelector, []);
    store.refreshState();
    fixture.detectChanges();

    const userCards = fixture.debugElement.queryAll(
      By.directive(ReqresUserCardComponent)
    );
    expect(userCards.length).toBe(0);
  });

  it('should not show error message when error$ is null', () => {
    store.overrideSelector(reqResErrorSelector, null);
    store.refreshState();
    fixture.detectChanges();

    const errorMessageComponent = fixture.debugElement.query(
      By.directive(ErrorMessageComponent)
    );
    expect(errorMessageComponent).toBeFalsy();
  });

  it('should not show loading message when loading$ is false', () => {
    store.overrideSelector(reqResLoadingSelector, false);
    store.refreshState();
    fixture.detectChanges();

    const loadingMessage = fixture.debugElement.query(
      By.directive(LoadingMessageComponent)
    );
    expect(loadingMessage).toBeFalsy();
  });
});
