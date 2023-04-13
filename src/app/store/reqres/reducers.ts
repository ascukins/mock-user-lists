import { createReducer, on } from '@ngrx/store';
import {
  fetchReqResUsers,
  fetchReqResUsersSuccess,
  fetchReqResUsersFailure,
} from './actions';
import { ReqResUserState } from './interface';

export const initialState: ReqResUserState = {
  users: [],
  loading: false,
  error: null,
};

export const reqResUserReducer = createReducer(
  initialState,
  on(fetchReqResUsers, (state) => ({ ...state, loading: true, error: null })),
  on(fetchReqResUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(fetchReqResUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
