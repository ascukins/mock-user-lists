import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JsonPlaceholderUsersResponse } from '../types/jsonplaceholder-types';
import { ReqResUser, ReqResUsersResponse } from '../types/reqres-types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getJsonPlaceholderUsers(): Observable<JsonPlaceholderUsersResponse> {
    const serverUrl = 'https://jsonplaceholder.typicode.com';
    return this.http.get<JsonPlaceholderUsersResponse>(`${serverUrl}/users`);
  }

  getReqResUsers(): Observable<ReqResUser[]> {
    const serverUrl = 'https://reqres.in/api';
    return this.http
      .get<ReqResUsersResponse>(`${serverUrl}/users?per_page=10`)
      .pipe(map((res: ReqResUsersResponse) => res.data));
  }
}
