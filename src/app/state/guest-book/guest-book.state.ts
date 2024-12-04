import { Entry } from 'src/app/guest-book/models';
import * as AppState from '../app.state';

export interface GuestBookState {
  entries: Entry[];
}

export interface State extends AppState.State {
  guestBook: GuestBookState;
}
