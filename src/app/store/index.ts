import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './interface';
import { jsonPlaceholderUserReducer } from './jp/reducers';
import { reqResUserReducer } from './reqres/reducers';

export const appReducers: ActionReducerMap<AppState> = {
  jp: jsonPlaceholderUserReducer,
  reqRes: reqResUserReducer,
};

export * from './effects';
