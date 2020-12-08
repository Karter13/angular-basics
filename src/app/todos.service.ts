import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos9?_limit=2')
      .pipe(
        delay(2000),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number | undefined): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }

}
