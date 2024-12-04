import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GuestBookService } from '../guest-book.service';

@Component({
  selector: 'bpt-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent {
  readonly author = new FormControl('', [Validators.required, Validators.email]);
  readonly message = new FormControl('', [Validators.required, Validators.minLength(20)]);

  constructor(private guestBookService: GuestBookService) {};

  onSubmit(): void {
    console.log(this.author, this.message);

    if (this.author.invalid || this.message.invalid) {
      return;
    }

    this.guestBookService.addEntry(this.author.value!, this.message.value!);
  }
}
