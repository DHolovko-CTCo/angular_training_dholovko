import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entry } from '../models';

@Component({
  selector: 'bpt-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent {
  @Input() entry!: Entry;
  @Output() authorClick = new EventEmitter<string>();

  onAuthorClick(): void {
    this.authorClick.emit(this.entry.author);
  }
}
