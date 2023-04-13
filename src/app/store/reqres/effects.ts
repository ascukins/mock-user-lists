import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ReqResUserActions from './actions';
import { DataService } from 'src/app/services/data.service';
import { ReqResUser } from 'src/app/types/reqres-types';

@Injectable()
export class ReqResUserEffects {
  fetchReqResUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReqResUserActions.fetchReqResUsers),
      mergeMap(() =>
        this.dataService.getReqResUsers().pipe(
          map((users: ReqResUser[]) =>
            ReqResUserActions.fetchReqResUsersSuccess({ users })
          ),
          catchError((error) =>
            of(
              ReqResUserActions.fetchReqResUsersFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
