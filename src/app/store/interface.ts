import { JsonPlaceholderUserState } from './jp/interface';
import { ReqResUserState } from './reqres/interface';

export interface AppState {
  jp: JsonPlaceholderUserState;
  reqRes: ReqResUserState;
}
