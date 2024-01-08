import {NgModule} from '@angular/core';

import {TagRoutingModule} from './tag-routing.module';
import {TagTableComponent} from './components/tag-table/tag-table.component';
import {EffectsModule} from '@ngrx/effects';
import {TagEffects} from './tag/tag.effects';
import {StoreModule} from "@ngrx/store";
import * as fromTag from './tag/tag.reducer';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TagTableComponent
  ],
  imports: [
    SharedModule,
    TagRoutingModule,
    StoreModule.forFeature(fromTag.tagFeature),
    EffectsModule.forFeature([TagEffects]),
  ]
})
export class TagModule {
}
