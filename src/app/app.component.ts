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

  // img = 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png';

  inputValue = '';

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img = 'https://miro.medium.com/max/588/1*15CYVZdpsxir8KLdxEZytg.png';
    // }, 5000);
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onClick() {
    console.log('click!');
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
