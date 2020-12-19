import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

// import 'lodash';
// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  name = 'Maikl';

  hiGay() {
    return `Hello, ${this.name}! `;
  }




}
