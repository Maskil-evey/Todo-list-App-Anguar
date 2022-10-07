import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
// import { GetTaskComponent } from './get-task/get-task.component';
import { CompletedComponent } from './completed/completed.component';
import { GetTaskComponent } from './get-task/get-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CompletedComponent,
    GetTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
