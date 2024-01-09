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

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      concatMap((action) =>
        this.taskService.deleteTask(action.data.id).pipe(
          map(data => TaskActions.deleteTaskSuccess({data})),
          catchError(error => of(TaskActions.deleteTaskFailure({error: error.error}))))
      )
    );
  });

  updateAssignTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.updateAssignTask),
      concatMap((action) =>
        this.taskService.updateTaskAssign(action.data).pipe(
          map(data => TaskActions.updateAssignTaskSuccess({data})),
          catchError(error => of(TaskActions.updateAssignTaskFailure({error: error.error}))))
      )
    );
  });

  updateStatusTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.updateStatusTask),
      concatMap((action) =>
        this.taskService.updateTaskStatus(action.data).pipe(
          map(data => TaskActions.updateStatusTaskSuccess({data})),
          catchError(error => of(TaskActions.updateStatusTaskFailure({error: error.error}))))
      )
    );
  });

  constructor(private actions$: Actions, private taskService: TaskService) {
  }
}
