import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibService } from 'ng-starter-lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  answer: string;
  showSpinner: boolean;
  answerDisplay: string;
  quotes: Observable<any[]>;

  constructor(private libService: LibService) { }

  ngOnInit() {
    this.quotes = this.libService.getRandomQuote(null, 3);
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

}
