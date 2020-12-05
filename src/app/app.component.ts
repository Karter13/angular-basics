import {Component} from '@angular/core';
import set = Reflect.set;

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

  img = 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://miro.medium.com/max/588/1*15CYVZdpsxir8KLdxEZytg.png';
    }, 5000);
  }

}
