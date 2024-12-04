import { Component, Input } from '@angular/core';
import { Entry } from '../models';

@Component({
  selector: 'bpt-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent {
  @Input() entry!: Entry;
}
