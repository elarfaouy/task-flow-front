import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TagTableComponent} from "./components/tag-table/tag-table.component";

const routes: Routes = [
  {path: "tags", component: TagTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
