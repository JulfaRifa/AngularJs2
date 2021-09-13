import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }

  retrieveAllTodos(username:any)
  {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTdo(username:any, id:any)
  {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username:any, id:any)
  {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username:any, id:any, todo : Todo)
  {
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  createTodo(username : any, todo : Todo){
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos`, todo)
  }


}
