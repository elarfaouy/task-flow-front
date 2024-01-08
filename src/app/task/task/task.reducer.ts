import {createFeature, createReducer, on} from '@ngrx/store';
import {TaskActions} from './task.actions';
import {TaskInterface} from "../../model/task.interface";
import {ApiResponse} from "../../model/api-response";

export const taskFeatureKey = 'task';

export interface State {
  error: ApiResponse | null;
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
  on(TaskActions.saveTask, state => state),
  on(TaskActions.saveTaskSuccess, (state, action) => ({
    ...state,
    error: null,
    tasks: [...state.tasks, action.data]
  })),
  on(TaskActions.saveTaskFailure, (state, action) => ({
    ...state,
    error: action.error
  })),
);

export const taskFeature = createFeature({
  name: taskFeatureKey,
  reducer,
});

