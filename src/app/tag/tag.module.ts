import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TagRoutingModule} from './tag-routing.module';
import {TagTableComponent} from './components/tag-table/tag-table.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {EffectsModule} from '@ngrx/effects';
import {TagEffects} from './tag/tag.effects';
import {StoreModule} from "@ngrx/store";
import * as fromTag from './tag/tag.reducer';


@NgModule({
  declarations: [
    TagTableComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    StoreModule.forFeature(fromTag.tagFeature),
    EffectsModule.forFeature([TagEffects]),
  ]
})
export class TagModule {
}
