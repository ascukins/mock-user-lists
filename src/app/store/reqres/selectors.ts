import { createSelector } from '@ngrx/store';
import { AppState } from '../interface';
import { ReqResUserState } from './interface';

export const selectReqResState = (state: AppState) => state.reqRes;

export const reqResUsersSelector = createSelector(
  selectReqResState,
  (reqRes: ReqResUserState) => reqRes.users
);

export const reqResLoadingSelector = createSelector(
  selectReqResState,
  (reqRes: ReqResUserState) => reqRes.loading
);

export const reqResErrorSelector = createSelector(
  selectReqResState,
  (reqRes: ReqResUserState) => reqRes.error
);
