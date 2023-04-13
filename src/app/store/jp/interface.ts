import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

export interface JsonPlaceholderUserState {
  loading: boolean;
  users: JsonPlaceholderUser[];
  error: string | null;
}
