import { createAction, props } from '@ngrx/store';
import { ReqResUser } from 'src/app/types/reqres-types';

export const fetchReqResUsers = createAction('[ReqRes] Fetch Users');

export const fetchReqResUsersSuccess = createAction(
  '[ReqRes] Fetch Users Success',
  props<{ users: ReqResUser[] }>()
);

export const fetchReqResUsersFailure = createAction(
  '[ReqRes] Fetch Users Failure',
  props<{ error: string }>()
);
