import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(startIndex: number, limit: number): Observable<string[]> {
    return this.http
      .get<string[]>('/assets/mock-data/comments.json')
      .pipe(map((comments) => comments.slice(startIndex, startIndex + limit)));
  }

  getTotalComments(): Observable<number> {
    return this.http
      .get<string[]>('/assets/mock-data/comments.json')
      .pipe(map((comments: string[]) => comments.length));
  }
}
