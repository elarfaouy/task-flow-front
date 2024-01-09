import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTag from './tag.reducer';

export const selectTagState = createFeatureSelector<fromTag.State>(
  fromTag.tagFeatureKey
);

export const selectTagsList = createSelector(
  selectTagState,
  state => state.tags
);

export const selectTagError = createSelector(
  selectTagState,
  state => state.error
);
