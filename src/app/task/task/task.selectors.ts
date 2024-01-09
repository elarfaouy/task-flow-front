import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTask from './task.reducer';

export const selectTaskState = createFeatureSelector<fromTask.State>(
  fromTask.taskFeatureKey
);

export const selectTasksError = createSelector(
  selectTaskState,
  state => state.error
);

export const selectTaskById = (id: number) => createSelector(
  selectTaskState,
  state => state.tasks.find(value => value.id == id)
);

export const selectTasksList = createSelector(
  selectTaskState,
  state => state.tasks
);

export const selectTasksTodoList = createSelector(
  selectTaskState,
  state => state.tasks.filter(value => value.status == "TODO")
);

export const selectTasksDoingList = createSelector(
  selectTaskState,
  state => state.tasks.filter(value => value.status == "DOING")
);

export const selectTasksDoneList = createSelector(
  selectTaskState,
  state => state.tasks.filter(value => value.status == "DONE")
);
