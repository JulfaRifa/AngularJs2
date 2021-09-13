import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export class Todo{
  constructor(
    public id: number,
    public description : string,
    public done : false,
    public targetDate : Date
  )
  {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos : Todo[] =  []
  message:string = ""

  // =[
  //   new Todo(1,"Learn Angular", false,new Date()),
  //   new Todo(2,"Learn Microservice", false,new Date()),
  //   new Todo(3,"Learn Spring", false,new Date())

    
  //   // {id : 1, description : "Learn Angular"},
  //   // {id : 2, description : "Learn Microservice"},
  //   // {id : 3, description : "Learn Spring"}
  // ]  
  constructor(private todoDataService : TodoDataService, private router:Router) { }

  ngOnInit(){
    this.refreshTodos()
  }

  refreshTodos()
  {
    this.todoDataService.retrieveAllTodos("julfa").subscribe(
      response => {
        this.todos=response
      }
    )
  }

  deleteTodo(id:any)
  {
    this.todoDataService.deleteTdo("julfa",id).subscribe(
      response => {
        console.log(response)
        this.message=`delete of todo ${id}`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id:any)
  {
    this.router.navigate(['todos',id])
  }

  addTodo()
  {
    this.router.navigate(['todos',-1])

  }

}
