import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {UserTableComponent} from './components/user-table/user-table.component';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './user/user.effects';
import {StoreModule} from "@ngrx/store";
import * as fromUser from './user/user.reducer';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature(fromUser.userFeature),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {
}
