import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as JpUserActions from './actions';
import { DataService } from 'src/app/services/data.service';
import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

@Injectable()
export class JsUserEffects {
  fetchJpUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JpUserActions.fetchJsonPlaceholderUsers),
      mergeMap(() =>
        this.dataService.getJsonPlaceholderUsers().pipe(
          map((users: JsonPlaceholderUser[]) =>
            JpUserActions.fetchJsonPlaceholderUsersSuccess({ users })
          ),
          catchError((error) =>
            of(
              JpUserActions.fetchJsonPlaceholderUsersFailure({
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
