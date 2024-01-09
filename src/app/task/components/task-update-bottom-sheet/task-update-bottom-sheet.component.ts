import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiResponse} from "../../../model/api-response";
import {select, Store} from "@ngrx/store";
import {selectTasksError} from "../../task/task.selectors";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {TaskInterface} from "../../../model/task.interface";
import {TaskActions} from "../../task/task.actions";

@Component({
  selector: 'app-task-update-bottom-sheet',
  templateUrl: './task-update-bottom-sheet.component.html',
  styleUrl: './task-update-bottom-sheet.component.css'
})
export class TaskUpdateBottomSheetComponent implements OnInit {
  errorResponse$: Observable<ApiResponse | null> = this.store.pipe(select(selectTasksError));
  updateStatusForm!: FormGroup;
  statusList: string[] = ["TODO", "DOING", "DONE"];

  constructor(private bottomSheetRef: MatBottomSheetRef<TaskUpdateBottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: { task: TaskInterface },
              private fb: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
    this.updateStatusForm = this.fb.group({
      status: [this.data.task.status],
    });
  }

  updateTaskStatus() {
    let task = this.data.task;
    task = {...task, status: this.updateStatusForm.value['status']};

    this.store.dispatch(TaskActions.updateStatusTask({data: task}))

    this.errorResponse$.subscribe(
      value => {
        if (value == null) {
          this.bottomSheetRef.dismiss();
        }
      }
    )
  }
}
