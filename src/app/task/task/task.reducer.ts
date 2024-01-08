import {createFeature, createReducer, on} from '@ngrx/store';
import {TaskActions} from './task.actions';
import {TaskInterface} from "../../model/task.interface";

export const taskFeatureKey = 'task';

export interface State {
  error: string | null;
  tasks: TaskInterface[]
}

export const initialState: State = {
  error: null,
  tasks: []
};

export const reducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, state => state),
  on(TaskActions.loadTasksSuccess, (state, action) => ({
    ...state,
    tasks: action.data
  })),
  on(TaskActions.loadTasksFailure, (state, action) => ({
    ...state,
    error: action.error
  })),
);

export const taskFeature = createFeature({
  name: taskFeatureKey,
  reducer,
});

