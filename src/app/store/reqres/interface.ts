import { ReqResUser } from 'src/app/types/reqres-types';

export interface ReqResUserState {
  loading: boolean;
  users: ReqResUser[];
  error: string | null;
}
