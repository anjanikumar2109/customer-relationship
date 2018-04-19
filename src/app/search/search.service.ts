import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable()
export class SearchService {
  private baseUrl = 'http://api.github.com';

  constructor(private http: HttpClient) {
  }

  getUsers(searchText: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/users?q=${searchText}`).pipe(
      map((res: Response) => {
        const data = res;
        return data;
      })
    );
  }

  getUsersWithDebounce(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.getUsers(term)));
  }
}
