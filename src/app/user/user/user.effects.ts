import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserActions} from './user.actions';
import {UserService} from "../../service/user/user.service";


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.userService.getAllUsers().pipe(
          map(data => UserActions.loadUsersSuccess({data})),
          catchError(error => of(UserActions.loadUsersFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions, private userService: UserService) {
  }
}
