import { createReducer, on } from '@ngrx/store';
import { GuestBookState } from './guest-book.state';
import * as GuestBookActions from './guest-book.actions';

const initialState: GuestBookState = {
  entries: [],
};

export const guestBookReducer = createReducer<GuestBookState>(
  initialState,
  on(GuestBookActions.loadEntriesSuccess, (state, action): GuestBookState => {
    return {
      ...state,
      entries: action.entries
    }
  })
);
