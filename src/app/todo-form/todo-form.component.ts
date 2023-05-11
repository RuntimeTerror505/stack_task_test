import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../share/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title:string = "";
  role:string = "Designer"
  constructor(private todoSrvice:TodoService) { }

  ngOnInit() {
  }
  selectChangeHandler (event: any) {
    this.role = event.target.value;
    console.log(this.role)
  }
  addTodo(){
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      complited: false,
      date: new Date(),
      role: this.role
    }
    this.todoSrvice.addTodo(todo);
    this.title = "";
  }
}
