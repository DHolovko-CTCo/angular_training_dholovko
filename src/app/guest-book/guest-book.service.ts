import { Injectable } from '@angular/core';
import { Entry } from './models';
import { BehaviorSubject, Observable } from 'rxjs';
import { guestBookSeed } from './guest-book.seed';

@Injectable({
  providedIn: 'root',
})
export class GuestBookService {
  private storeKey: string = 'entries';
  private entriesSubject: BehaviorSubject<Entry[]>;

  constructor() {
    const initialEntries = localStorage.getItem(this.storeKey)
      ? JSON.parse(localStorage.getItem(this.storeKey)!)
      : guestBookSeed;

    this.entriesSubject = new BehaviorSubject<Entry[]>(initialEntries);
  }

  getEntries(): Observable<Entry[]> {
    return this.entriesSubject.asObservable();
  }

  addEntry(entry: Entry): Observable<Entry[]> {
    let entries = this.entriesSubject.getValue();
    entry.id = entries.length + 1;

    entries = [...entries, entry];

    localStorage.setItem(this.storeKey, JSON.stringify(entries));

    this.entriesSubject.next(entries);

    return this.getEntries();
  }
}
