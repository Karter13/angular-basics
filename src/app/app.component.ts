import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.log('Response: ', todos);
        this.todos = todos;
      });
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log('NewTodo: ', todo);
        this.todos.unshift(todo);
        this.todoTitle = '';
      });
  }
}

