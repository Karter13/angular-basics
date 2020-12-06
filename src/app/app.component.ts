import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {

  posts: Post[] = [
    {title: 'Первый блок!', text: 'Я хочу выучить Angular компоненты', id: 1},
    // {title: 'Следующий блое!', text: 'Я буду разрабатывать на Angular', id: 2},
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('TimeOut');
      this.posts[0] = {
        title: 'Change!',
        text: 'WWWWWWWWWWWWWWWWWW',
        id: 1
      };
    }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    // console.log('remove id', id);
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
