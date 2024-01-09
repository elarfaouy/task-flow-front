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
    'Delete Task': props<{ data: TaskInterface }>(),
    'Delete Task Success': props<{ data: TaskInterface }>(),
    'Delete Task Failure': props<{ error: ApiResponse }>(),
    'Update Assign Task': props<{ data: TaskInterface }>(),
    'Update Assign Task Success': props<{ data: TaskInterface }>(),
    'Update Assign Task Failure': props<{ error: ApiResponse }>(),
    'Update Status Task': props<{ data: TaskInterface }>(),
    'Update Status Task Success': props<{ data: TaskInterface }>(),
    'Update Status Task Failure': props<{ error: ApiResponse }>(),
  }
});
