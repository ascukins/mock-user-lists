import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/interface';
import { fetchReqResUsers } from 'src/app/store/reqres/actions';

import {
  reqResErrorSelector,
  reqResLoadingSelector,
  reqResUsersSelector,
} from 'src/app/store/selectors';
import { ReqResUser } from 'src/app/types/reqres-types';

@Component({
  selector: 'app-user-list-req-res',
  templateUrl: './user-list-req-res.component.html',
  styleUrls: ['./user-list-req-res.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListReqResComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<ReqResUser[]>;
  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.pipe(select(reqResLoadingSelector));
    this.users$ = this.store.pipe(select(reqResUsersSelector));
    this.error$ = this.store.pipe(select(reqResErrorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchReqResUsers());
  }
}
