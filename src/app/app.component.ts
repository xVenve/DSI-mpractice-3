import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Micropráctica 03!';
  comuLocal: string = '';
  provLocal: string = '';

  comuC: string = '';
  provC: string = '';

  selectChanged(data: { com: string; pro: string }) {
    this.comuC = data.com;
    this.provC = data.pro;
  }

  updateCustomElements() {
    this.comuLocal = this.comuC;
    this.provLocal = this.provC;
  }
}
