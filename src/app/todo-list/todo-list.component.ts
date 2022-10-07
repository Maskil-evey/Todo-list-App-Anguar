import { CompletedComponent } from './../completed/completed.component';
import { Todo } from '../../list';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{

@ViewChild('name',{read: ElementRef}) name!: ElementRef;

active = 'active';
active2 = ''
role= 'list';

list:Todo[] = [{}];
switchRoleCompleted(){
  if(this.role == 'list'){
    this.role = 'completed';
    this.active = '';
    this.active2 = 'active'
  }
}
switchRoleList(){
  if(this.role == 'completed'){
    this.role = 'list';
    this.active2 = '';
    this.active = 'active'
  }

}
  constructor() { }


}
