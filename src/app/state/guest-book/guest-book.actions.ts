import { createAction, props } from '@ngrx/store';
import { Entry } from 'src/app/guest-book/models';

export const loadEntries = createAction('[Guest Book Page] Load All Entries');

export const loadEntriesSuccess = createAction(
  '[Guest Book API] Load All Entries Success',
  props<{ entries: Entry[] }>()
);
