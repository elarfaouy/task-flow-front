import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsersList = createSelector(
  selectUserState,
  state => state.users
)

export const selectUserError = createSelector(
  selectUserState,
  state => state.error
)
