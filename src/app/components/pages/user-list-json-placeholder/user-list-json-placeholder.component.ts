import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/interface';
import { fetchJsonPlaceholderUsers } from 'src/app/store/jp/actions';
import {
  jpErrorSelector,
  jpLoadingSelector,
  jpUsersSelector,
} from 'src/app/store/selectors';
import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

@Component({
  selector: 'app-user-list-json-placeholder',
  templateUrl: './user-list-json-placeholder.component.html',
  styleUrls: ['./user-list-json-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListJsonPlaceholderComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<JsonPlaceholderUser[]>;
  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.pipe(select(jpLoadingSelector));
    this.users$ = this.store.pipe(select(jpUsersSelector));
    this.error$ = this.store.pipe(select(jpErrorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchJsonPlaceholderUsers());
  }
}
