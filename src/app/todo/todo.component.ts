import { Component,  OnInit, ViewChild, ElementRef} from '@angular/core';
import { TodoService } from '../share/todo.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   loading:boolean = true;
   searchString: string = "";
   role: string = "";
   @ViewChild('select',{static: true}) select: ElementRef
  constructor(public todoService: TodoService) { }
  ngOnInit() {
    console.log(this.select.nativeElement.value)
  }
  onChange(id:number){
    this.todoService.onTogle(id)
  }
  removeTodo(id:number){
    this.todoService.removeTodo(id)
  }
  selectChangeHandler (event: any) {
    if(event.target.value === "Role"){
      this.role = ""
    }else {
      this.role = event.target.value;
    }
  }
}
