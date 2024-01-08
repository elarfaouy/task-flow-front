import {createFeature, createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';
import {UserInterface} from "../../model/user.interface";

export const userFeatureKey = 'user';

export interface State {
  error: string | null;
  users: UserInterface[]
}

export const initialState: State = {
  error: null,
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.data
  })),
  on(UserActions.loadUsersFailure, (state, action) => ({
    ...state,
    error: action.error
  })),
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

