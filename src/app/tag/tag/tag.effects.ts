import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {TagActions} from './tag.actions';
import {TagService} from "../../service/tag/tag.service";


@Injectable()
export class TagEffects {

  loadTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TagActions.loadTags),
      concatMap(() =>
        this.tagService.getAllTags().pipe(
          map(data => TagActions.loadTagsSuccess({data})),
          catchError(error => of(TagActions.loadTagsFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions, private tagService: TagService) {
  }
}
