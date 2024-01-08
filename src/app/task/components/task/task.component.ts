import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";
import {TaskInterface} from "../../../model/task.interface";
import {select, Store} from "@ngrx/store";
import {selectTaskById} from "../../task/task.selectors";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnChanges {
  @Input() id: number = 0;
  task$!: Observable<TaskInterface | undefined>;

  constructor(private store: Store) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('id' in changes){
      this.task$ = this.store.pipe(select(selectTaskById(this.id)));
    }
  }
}
