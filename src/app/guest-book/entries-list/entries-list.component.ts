import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GuestBookActions from 'src/app/state/guest-book/guest-book.actions';
import { getEntries } from 'src/app/state/guest-book/guest-book.selectors';
import { State } from 'src/app/state/guest-book/guest-book.state';

@Component({
  selector: 'bpt-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss'],
})
export class EntriesListComponent implements OnInit {
  protected entries$ = this.store.select(getEntries);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GuestBookActions.loadEntries());
  }
}
