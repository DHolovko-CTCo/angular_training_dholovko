import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./blogpost/blogpost.module').then(m => m.BlogpostModule) },
  // default route
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  // fallback from 404
  { path: '**', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
