import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError, first } from 'rxjs/operators';

import { ActionTypes, GET_USER_SUCCESS } from './user.actions';
import { LoginService } from './user-auth/login.service';

@Injectable()
export class UserEffects {

  @Effect()
  fetchUserData$ = this.actions$
    .pipe(
      ofType(ActionTypes.GET_USER_PENDING),
      switchMap(({ payload }) => {
        const { logInEmail, photoURL, displayName, isNgo } = payload;
        return this.auth.registerUser({
          logInEmail,
          photoURL,
          displayName,
        }, isNgo)
        /* Pipe result of registerUser to get only the first response */
        /* This fixes a bug of double-response triggered by real-time DB */
        /* @TODO: Add catchError logic instead of returning EMPTY */
          .pipe(
            first(),
            map(({ user, isNgo }) => new GET_USER_SUCCESS({ user, isNgo })),
            catchError(() => EMPTY),
          );
      })
    );

  constructor(
    private actions$: Actions,
    private auth: LoginService,
  ) {}

}
