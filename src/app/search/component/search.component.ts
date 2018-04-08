import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchResult: any;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.getUsersWithDebounce(this.searchTerm$)
      .subscribe(results => {
        this.searchResult = results;
      });
  }

  ngOnInit() {
  }

  searchUsers(event) {
    this.searchService.getUsers(event.target.value).subscribe((res) => {
      this.searchResult = res;
    });
  }

}
