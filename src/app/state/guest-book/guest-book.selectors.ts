import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GuestBookState } from './guest-book.state';

const getGuestBookFeatureState = createFeatureSelector<GuestBookState>('guestBook');

export const getEntries = createSelector(
  getGuestBookFeatureState,
  (state) => state.entries
);
