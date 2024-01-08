import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {TaskActions} from './task.actions';
import {TaskService} from "../../service/task/task.service";


@Injectable()
export class TaskEffects {

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      concatMap(() =>
        this.taskService.getAllTasks().pipe(
          map(data => TaskActions.loadTasksSuccess({data})),
          catchError(error => of(TaskActions.loadTasksFailure({error: error.error}))))
      )
    );
  });

  saveTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.saveTask),
      concatMap((action) =>
        this.taskService.storeTask(action.data).pipe(
          map(data => TaskActions.saveTaskSuccess({data})),
          catchError(error => of(TaskActions.saveTaskFailure({error: error.error}))))
      )
    );
  });

  constructor(private actions$: Actions, private taskService: TaskService) {
  }
}
