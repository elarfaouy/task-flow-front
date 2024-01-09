import {NgModule} from '@angular/core';

import {TaskRoutingModule} from './task-routing.module';
import {TaskComponent} from './components/task/task.component';
import {TaskOverviewComponent} from './components/task-overview/task-overview.component';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './task/task.effects';
import {StoreModule} from "@ngrx/store";
import * as fromTask from './task/task.reducer';
import {SharedModule} from "../shared/shared.module";
import {TaskAddBottomSheetComponent} from './components/task-add-bottom-sheet/task-add-bottom-sheet.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { TaskUpdateBottomSheetComponent } from './components/task-update-bottom-sheet/task-update-bottom-sheet.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskOverviewComponent,
    TaskAddBottomSheetComponent,
    TaskUpdateBottomSheetComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
    StoreModule.forFeature(fromTask.taskFeature),
    EffectsModule.forFeature([TaskEffects]),
    MatBottomSheetModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class TaskModule {
}
