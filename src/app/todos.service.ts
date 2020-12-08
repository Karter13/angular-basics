import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './app.component';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo) {
   return  this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetchTodos() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(2000));
  }

  removeTodo(id: number | undefined) {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

}
