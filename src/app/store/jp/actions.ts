import { createAction, props } from '@ngrx/store';
import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

export const fetchJsonPlaceholderUsers = createAction(
  '[JsonPlaceholder] Fetch Users'
);

export const fetchJsonPlaceholderUsersSuccess = createAction(
  '[JsonPlaceholder] Fetch Users Success',
  props<{ users: JsonPlaceholderUser[] }>()
);

export const fetchJsonPlaceholderUsersFailure = createAction(
  '[JsonPlaceholder] Fetch Users Failure',
  props<{ error: string }>()
);
