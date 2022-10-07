import { CompletedComponent } from './../completed/completed.component';
import { Todo } from './../../list';
import { Component, OnInit, ViewChild,AfterViewInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})
export class GetTaskComponent implements OnInit,AfterViewInit {

  constructor() { }


  list: Todo[] = JSON.parse(localStorage.getItem('list') || '[]') ;
  @ViewChild('input',{read:ElementRef}) input!: ElementRef;
  @ViewChild('man',{read:ViewContainerRef}) completed!: ViewContainerRef;




  ngOnInit(): void {

  }
  ngAfterViewInit():void {
  }
  addTodolist(){
    if(this.input.nativeElement.value == ''){
      alert('Please Enter Task')
    }
    else{
      this.list.push({task:this.input.nativeElement.value});
      localStorage.setItem('list',JSON.stringify(this.list));
      this.input.nativeElement.value = '';
    }

  }

  enter(x:any){
    let key = x.keyCode;
    if(key == 13){
      this.addTodolist();
    }
  }
  // completedTask(x:Todo){
  //   this.removeTask(x);
  //   this.componentRef.instance.completedlist =[x];
  //   localStorage.setItem('completed',JSON.stringify(this.componentRef.instance.completedlist));

  // }

  removeTask(x:Todo){
    this.list = this.list.filter((item) => item !== x);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
}
