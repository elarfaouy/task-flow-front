import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {UserInterface} from "../../model/user.interface";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: UserInterface[] }>(),
    'Load Users Failure': props<{ error: string }>(),
  }
});
