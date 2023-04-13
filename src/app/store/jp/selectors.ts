import { createSelector } from '@ngrx/store';
import { AppState } from '../interface';
import { JsonPlaceholderUserState } from './interface';

export const selectJpState = (state: AppState) => state.jp;

export const jpUsersSelector = createSelector(
  selectJpState,
  (jp: JsonPlaceholderUserState) => jp.users
);

export const jpLoadingSelector = createSelector(
  selectJpState,
  (jp: JsonPlaceholderUserState) => jp.loading
);

export const jpErrorSelector = createSelector(
  selectJpState,
  (jp: JsonPlaceholderUserState) => jp.error
);
