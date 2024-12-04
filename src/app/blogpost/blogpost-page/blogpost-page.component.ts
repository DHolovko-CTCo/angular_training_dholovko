import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'bpt-blogpost-page',
  templateUrl: './blogpost-page.component.html',
  styleUrls: ['./blogpost-page.component.scss']
})
export class BlogpostPageComponent {
protected postId$ = this.route.paramMap.pipe(
    switchMap(async (params) => params.has('id') ? Number(params.get('id')) : null),
    catchError(() => new Observable<null>())
);

  constructor(private route: ActivatedRoute) {}
}
