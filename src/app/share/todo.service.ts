import { Injectable } from "@angular/core";
export interface Todo {
    id:number,
    title:string,
    complited: boolean,
    role:string,
    date?:any
  }

@Injectable({providedIn:'root'})
export class TodoService {

    public todo: Todo[] = [];

    constructor(){}
    onTogle(id:number){
    const index = this.todo.findIndex(t => t.id === id);
    this.todo[index].complited = !this.todo[index].complited;
    }
    removeTodo(id:number){
        this.todo = this.todo.filter(t=>t.id !== id);
    }
    addTodo(todo:Todo){
        this.todo.push(todo);
        console.log(this.todo)
    }
}
