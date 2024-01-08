import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {TagInterface} from "../../model/tag.interface";

export const TagActions = createActionGroup({
  source: 'Tag',
  events: {
    'Load Tags': emptyProps(),
    'Load Tags Success': props<{ data: TagInterface[] }>(),
    'Load Tags Failure': props<{ error: string }>(),
  }
});
