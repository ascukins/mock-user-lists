import { createReducer, on } from '@ngrx/store';
import {
  fetchJsonPlaceholderUsers,
  fetchJsonPlaceholderUsersSuccess,
  fetchJsonPlaceholderUsersFailure,
} from './actions';
import { JsonPlaceholderUserState } from './interface';

export const initialState: JsonPlaceholderUserState = {
  users: [],
  loading: false,
  error: null,
};

export const jsonPlaceholderUserReducer = createReducer(
  initialState,
  on(fetchJsonPlaceholderUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fetchJsonPlaceholderUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(fetchJsonPlaceholderUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
