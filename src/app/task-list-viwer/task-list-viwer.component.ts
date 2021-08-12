import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list-viwer',
  templateUrl: './task-list-viwer.component.html',
  styleUrls: ['./task-list-viwer.component.scss']
})
export class TaskListViwerComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() taskList = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.taskList) {
      console.log(changes.taskList);
    }
  }
}
