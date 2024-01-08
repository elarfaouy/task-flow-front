import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {TaskInterface} from "../../model/task.interface";
import {ApiResponse} from "../../model/api-response";

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Tasks': emptyProps(),
    'Load Tasks Success': props<{ data: TaskInterface[] }>(),
    'Load Tasks Failure': props<{ error: ApiResponse }>(),
    'Save Task': props<{ data: TaskInterface }>(),
    'Save Task Success': props<{ data: TaskInterface }>(),
    'Save Task Failure': props<{ error: ApiResponse }>(),
  }
});
