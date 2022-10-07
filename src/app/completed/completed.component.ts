import { Todo } from './../../list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor() { }

  completedlist:Todo[]=[{}];

  ngOnInit(): void {
  }

}
