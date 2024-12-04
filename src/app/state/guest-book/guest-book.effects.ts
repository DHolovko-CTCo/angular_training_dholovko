import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GuestBookService } from 'src/app/guest-book/guest-book.service';
import * as GuestBookActions from './guest-book.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class GuestBookEffects {
  constructor(
    private actions$: Actions,
    private guestBookService$: GuestBookService
  ) {}

  loadEntries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GuestBookActions.loadEntries),
      switchMap(() =>
        this.guestBookService$.getEntries().pipe(
            map((entries) => GuestBookActions.loadEntriesSuccess({ entries }))
          )
      )
    );
  });
}
