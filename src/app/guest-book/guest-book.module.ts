import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { GuestBookEffects } from '../state/guest-book/guest-book.effects';
import { guestBookReducer } from '../state/guest-book/guest-book.reducer';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { GuestBookPageComponent } from './guest-book-page/guest-book-page.component';

const guestBookRoutes: Routes = [
  { path: '**', component: GuestBookPageComponent },
];

@NgModule({
  declarations: [
    EntriesListComponent,
    EntryDetailsComponent,
    EntryFormComponent,
    GuestBookPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(guestBookRoutes),
    StoreModule.forFeature('guestBook', guestBookReducer),
    EffectsModule.forFeature([GuestBookEffects]),
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class GuestBookModule {}
