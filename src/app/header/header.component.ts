import {ApplicationRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'CRM';

  constructor(app: ApplicationRef) {
    setTimeout(() => {
      this.name = 'CRM Application';
      app.tick(); // This triggers change detection
    }, 1000);
  }

  ngOnInit() {
  }

}
