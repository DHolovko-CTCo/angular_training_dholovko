import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BlogpostEffects } from '../state/blogpost/blogpost.effects';
import { blogpostReducer } from '../state/blogpost/blogpost.reducer';
import { PostListComponent } from './post-list/post-list.component';

const blogpostRoutes: Routes = [
  { path: '', component: PostListComponent },
  // fallback from 404
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogpostRoutes),
    StoreModule.forFeature('posts', blogpostReducer),
    EffectsModule.forFeature([BlogpostEffects]),
    PostListComponent
  ]
})
export class BlogpostModule { }