import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-login',
  templateUrl: './tab-login.page.html',
  styleUrls: ['./tab-login.page.scss'],
})

export class TabLoginPage {
  constructor(private route: Router) { }

  goToApp() {
  }

}
