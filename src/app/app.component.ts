import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 40;
  arr = [1, 2, 3];
  obj = {name: 'Maikl', age: '45'};

}
