import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'Первый блок!', text: 'Я хочу выучить Angular компоненты', id: 1},
    {title: 'Следующий блое!', text: 'Я буду разрабатывать на Angular', id: 1},
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
