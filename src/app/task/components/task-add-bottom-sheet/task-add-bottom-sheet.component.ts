import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiResponse} from "../../../model/api-response";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserInterface} from "../../../model/user.interface";
import {selectUsersList} from "../../../user/user/user.selectors";
import {UserActions} from "../../../user/user/user.actions";
import {TagActions} from "../../../tag/tag/tag.actions";
import {TagInterface} from "../../../model/tag.interface";
import {selectTagsList} from "../../../tag/tag/tag.selectors";
import {TaskActions} from "../../task/task.actions";
import {selectTasksError, selectTasksList} from "../../task/task.selectors";

@Component({
  selector: 'app-task-add-bottom-sheet',
  templateUrl: './task-add-bottom-sheet.component.html',
  styleUrl: './task-add-bottom-sheet.component.css'
})
export class TaskAddBottomSheetComponent implements OnInit {
  users$: Observable<UserInterface[]> = this.store.pipe(select(selectUsersList));
  tags$: Observable<TagInterface[]> = this.store.pipe(select(selectTagsList));
  errorResponse$: Observable<ApiResponse | null> = this.store.pipe(select(selectTasksError));
  addForm!: FormGroup;

  constructor(private bottomSheetRef: MatBottomSheetRef<TaskAddBottomSheetComponent>,
              private fb: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())
    this.store.dispatch(TagActions.loadTags())

    this.addForm = this.fb.group({
      title: [''],
      description: [''],
      priority: [''],
      assignDate: [''],
      dueDate: [''],
      assignTo: [''],
      tags: [''],
    });
  }

  saveTask() {
    this.store.dispatch(TaskActions.saveTask({data: this.addForm.value}));

    this.errorResponse$.subscribe(
      value => {
        if (value == null){
          this.bottomSheetRef.dismiss();
        }
      }
    )
  }
}
