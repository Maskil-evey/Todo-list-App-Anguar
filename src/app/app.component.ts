import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Todo-list-app';

}
