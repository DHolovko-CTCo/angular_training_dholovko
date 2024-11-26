import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BlogpostEffects } from '../state/blogpost/blogpost.effects';
import { blogpostReducer } from '../state/blogpost/blogpost.reducer';

const blogpostRoutes: Routes = [
  { path: '', component: PostListComponent },
  { path: ':id', component: PostDetailsComponent },
  // fallback from 404
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogpostRoutes),
    StoreModule.forFeature('posts', blogpostReducer),
    EffectsModule.forFeature([BlogpostEffects]),
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    PostListComponent,
  ],
  declarations: [PostDetailsComponent],
})
export class BlogpostModule {}
