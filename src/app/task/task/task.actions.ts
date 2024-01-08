import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {TaskInterface} from "../../model/task.interface";

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Tasks': emptyProps(),
    'Load Tasks Success': props<{ data: TaskInterface[] }>(),
    'Load Tasks Failure': props<{ error: string }>(),
  }
});
