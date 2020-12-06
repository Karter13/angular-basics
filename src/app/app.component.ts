import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  searchField = 'title';

  posts: Array<Post> = [
    {title: 'Angular', text: 'I started study Angular'},
    {title: 'React', text: 'I like React'},
    {title: 'Lodash', text: 'I do not now Lodash'},
  ];

  addNewPost() {
    this.posts.unshift({
      title: 'Maikl',
      text: 'He likes React and Angular '
    });
  }
}
