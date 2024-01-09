import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {first, Observable} from "rxjs";
import {TaskInterface} from "../../../model/task.interface";
import {select, Store} from "@ngrx/store";
import {selectTaskById, selectTasksError} from "../../task/task.selectors";
import {TaskActions} from "../../task/task.actions";
import {ApiResponse} from "../../../model/api-response";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnChanges {
  @Input() id: number = 0;
  task$!: Observable<TaskInterface | undefined>;
  errorResponse$: Observable<ApiResponse | null> = this.store.pipe(select(selectTasksError));

  constructor(private store: Store,
              private _snackBar: MatSnackBar) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('id' in changes) {
      this.task$ = this.store.pipe(select(selectTaskById(this.id)));
    }
  }

  deleteTask() {
    if (window.confirm("do you want to delete this task ?")) {
      this.task$.pipe(first()).subscribe(task => {
        if (task) {
          this.store.dispatch(TaskActions.deleteTask({data: task}));
        }
      });

      this.errorResponse$.subscribe(
        value => {
          if (value != null) {
            this._snackBar.open(value.message, 'X', {
              duration: 3000
            });
          }
        }
      );
    }
  }

  updateAssign() {
    if (window.confirm("do you want to change this task ?")) {
      this.task$.pipe(first()).subscribe(task => {
        if (task) {
          this.store.dispatch(TaskActions.updateAssignTask({data: task}));
        }
      });
    }

    this.errorResponse$.subscribe(
      value => {
        if (value != null) {
          this._snackBar.open(value.message, 'X', {
            duration: 3000
          });
        }
      }
    );
  }
}
