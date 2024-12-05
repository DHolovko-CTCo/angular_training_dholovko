import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { BlogpostEffects } from '../state/blogpost/blogpost.effects';
import { blogpostReducer } from '../state/blogpost/blogpost.reducer';
import { BlogpostPageComponent } from './blogpost-page/blogpost-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';

const blogpostRoutes: Routes = [
  { path: '', component: BlogpostPageComponent },
  { path: ':id', component: BlogpostPageComponent },
  // fallback from 404
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(blogpostRoutes),
    StoreModule.forFeature('posts', blogpostReducer),
    EffectsModule.forFeature([BlogpostEffects]),
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    PostListComponent,
  ],
  declarations: [
    PostDetailsComponent,
    PostViewComponent,
    BlogpostPageComponent,
  ],
})
export class BlogpostModule {}
