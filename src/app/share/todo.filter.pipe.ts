import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.service';

@Pipe({
    name:"todoFilter"
})

export class TodoFilterPipe implements PipeTransform{
    transform(todo:Todo[],search:string = "", role:string = ""):Todo[] {
        if(!search.trim() && !role){
            return todo
        }
        if (todo && todo.length){
          return todo.filter(item =>{
            if (role.toLowerCase && item.role.toLowerCase().indexOf(role.toLowerCase()) === -1){
              return false;
            }
            if (search.toLowerCase() && item.title.toLowerCase().indexOf(search.toLocaleLowerCase())===-1){
              return false;
            }
            return true;
          })
        }else{
            return todo;
        }
    }
  }
