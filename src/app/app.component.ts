import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todo = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3
    },
    {
      label: 'Pay Mobile Bill',
      done: true,
      priority: 2
    },
    {
      label: 'Clean House',
      done: false,
      priority: 1
    }
  ];

  addTodo(newTodoLabel){
    var  newTodo ={
      label : newTodoLabel,
      priority : 1,
      done : false
    }
    this.todo.push(newTodo);
  }
}
