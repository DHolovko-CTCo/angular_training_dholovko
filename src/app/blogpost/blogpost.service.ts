import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Post, PostComment } from './models';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  private apiBaseUrl = 'https://jsonplaceholder.typicode.com';
  private postsRouteSegment = 'posts';
  private commentsRouteSegment = 'comments';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.apiBaseUrl}/${this.postsRouteSegment}`)
      .pipe(catchError(this.handleError<Post[]>));
  }

  getPost(postId: number): Observable<Post> {
    return this.http
      .get<Post>(`${this.apiBaseUrl}/${this.postsRouteSegment}/${postId}`)
      .pipe(catchError(this.handleError<Post>));
  }

  getPostComments(postId: number): Observable<PostComment[]> {
    return this.http
      .get<PostComment[]>(
        `${this.apiBaseUrl}/${this.postsRouteSegment}/${postId}/${this.commentsRouteSegment}`
      )
      .pipe(catchError(this.handleError<PostComment[]>));
  }

  handleError<TModel>(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.error}`;
    }

    // just suppress any errors for now, will deal with them later, maybe
    // return throwError(() => new Error(errorMessage));
    console.error(errorMessage);
    return new Observable<TModel>();
  }
}
