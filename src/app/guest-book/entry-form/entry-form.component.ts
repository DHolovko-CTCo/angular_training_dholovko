import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestBookService } from '../guest-book.service';

@Component({
  selector: 'bpt-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent {
  readonly form = new FormGroup({
    author: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });

  constructor(private guestBookService: GuestBookService) {}

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.guestBookService.addEntry({
      id: null,
      author: this.form.controls.author.value!,
      message: this.form.controls.message.value!,
    });
  }
}
