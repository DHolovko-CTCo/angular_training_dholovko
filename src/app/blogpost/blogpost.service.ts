import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  private apiBaseUrl = 'https://jsonplaceholder.typicode.com/';
  private postsRoute = '/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiBaseUrl + this.postsRoute)
      .pipe(catchError(this.handleError));
  }

  handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }

    console.error(err);

    // just suppress any errors for now, will deal with them later, maybe
    // return throwError(() => new Error(errorMessage));
    return new Observable<Post[]>();
  }
}
