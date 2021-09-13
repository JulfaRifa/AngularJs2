import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = this.route.snapshot.params['id']
  todo: Todo = new Todo(this.id, "", false, new Date())
  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.todo = new Todo(this.id, "", false, new Date())
    if (this.id != -1) {
      this.todoDataService.retrieveTodo("julfa", this.id).subscribe(
        response => this.todo = response
      )
    }
  }

  saveTodo() {
    // console.log("updated")
    if (this.id === -1) {
      this.todoDataService.createTodo('julfa', this.todo)
      .subscribe (
        response => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      )
    }
    else {
      this.todoDataService.updateTodo("julfa", this.id, this.todo).subscribe(
        response => {
          console.log(response),
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
