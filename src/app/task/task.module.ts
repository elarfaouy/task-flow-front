import {NgModule} from '@angular/core';

import {TaskRoutingModule} from './task-routing.module';
import {TaskComponent} from './components/task/task.component';
import {TaskOverviewComponent} from './components/task-overview/task-overview.component';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './task/task.effects';
import {StoreModule} from "@ngrx/store";
import * as fromTask from './task/task.reducer';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TaskComponent,
    TaskOverviewComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
    StoreModule.forFeature(fromTask.taskFeature),
    EffectsModule.forFeature([TaskEffects]),
  ]
})
export class TaskModule {
}
