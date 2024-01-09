import {createFeature, createReducer, on} from '@ngrx/store';
import {TagActions} from './tag.actions';
import {TagInterface} from "../../model/tag.interface";

export const tagFeatureKey = 'tag';

export interface State {
  error: string | null;
  tags: TagInterface[]
}

export const initialState: State = {
  error: null,
  tags: []
};

export const reducer = createReducer(
  initialState,
  on(TagActions.loadTags, state => state),
  on(TagActions.loadTagsSuccess, (state, action) => ({
    ...state,
    tags: action.data
  })),
  on(TagActions.loadTagsFailure, (state, action) => ({
    ...state,
    error: action.error
  })),
);

export const tagFeature = createFeature({
  name: tagFeatureKey,
  reducer,
});

