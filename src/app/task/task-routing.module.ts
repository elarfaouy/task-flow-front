import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskOverviewComponent} from "./components/task-overview/task-overview.component";

const routes: Routes = [
  {path: "tasks", component: TaskOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
