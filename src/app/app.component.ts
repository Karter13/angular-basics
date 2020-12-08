import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {TodosService} from './todos.service';

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
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    }).subscribe(todo => {
        this.todos.unshift(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number | undefined) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}

