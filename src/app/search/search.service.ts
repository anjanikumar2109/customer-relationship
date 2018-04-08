import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';

@Injectable()
export class SearchService {
  private baseUrl = 'http://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(searchText: string): Observable<any> {
    if (!searchText) { return Observable.empty<Response>(); }
    return this.http.get(`${this.baseUrl}/search/users?q=${searchText}`).map((res: Response) => {
      const data = res;
      return data;
    });
  }

  getUsersWithDebounce(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.getUsers(term));
  }
}
