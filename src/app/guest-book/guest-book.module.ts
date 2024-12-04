import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GuestBookEffects } from '../state/guest-book/guest-book.effects';
import { guestBookReducer } from '../state/guest-book/guest-book.reducer';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const guestBookRoutes: Routes = [{ path: '', component: EntriesListComponent }];

@NgModule({
  declarations: [
    EntriesListComponent,
    EntryDetailsComponent,
    EntryFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(guestBookRoutes),
    StoreModule.forFeature('guestBook', guestBookReducer),
    EffectsModule.forFeature([GuestBookEffects]),
    MatCardModule,
    MatProgressBarModule,
  ],
})
export class GuestBookModule {}
