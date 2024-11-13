import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { blogpostReducer } from '../state/blogpost/blogpost.reducer';
import { BlogpostEffects } from '../state/blogpost/blogpost.effects';
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