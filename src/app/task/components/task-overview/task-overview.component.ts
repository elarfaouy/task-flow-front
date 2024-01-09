import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TaskInterface} from "../../../model/task.interface";
import {select, Store} from "@ngrx/store";
import {
  selectTasksDoingList,
  selectTasksDoneList,
  selectTasksList,
  selectTasksTodoList
} from "../../task/task.selectors";
import {TaskActions} from "../../task/task.actions";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {TaskAddBottomSheetComponent} from "../task-add-bottom-sheet/task-add-bottom-sheet.component";

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.css'
})
export class TaskOverviewComponent implements OnInit {
  tasks$: Observable<TaskInterface[]> = this.store.pipe(select(selectTasksList));
  tasksTodo$: Observable<TaskInterface[]> = this.store.pipe(select(selectTasksTodoList));
  tasksDoing$: Observable<TaskInterface[]> = this.store.pipe(select(selectTasksDoingList));
  tasksDone$: Observable<TaskInterface[]> = this.store.pipe(select(selectTasksDoneList));

  constructor(private store: Store,
              private _bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  openAddTaskBottomSheet(): void {
    this._bottomSheet.open(TaskAddBottomSheetComponent);
  }
}
