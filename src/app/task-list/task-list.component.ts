import { TaskService } from './../task.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TaskListComponent implements OnInit {
  currentItem = 'manushi';
  openTask = [];
  inProgressTask = [];
  doneTask = [];
  allTask = [];
  constructor(private taskServiceClass: TaskService) { }

  ngOnInit(): void {
    //    this.taskServiceClass.subjectTask.asObservable().subscribe(taskArray=>{
    this.allTask = this.taskServiceClass.taskList;
    this.openTask = [...this.allTask.filter(task => task.status == 'open')];
    this.inProgressTask = [...this.allTask.filter(task => task.status == 'inprogress')];
    this.doneTask = [...this.allTask.filter(task => task.status == 'completed')];
    //});
  }

}
