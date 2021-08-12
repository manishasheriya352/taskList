import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  subjectTask: Subject<any> = new Subject();
  constructor() { }

  taskList = [];
  saveTask(objTask){
    this.taskList.push(objTask);
    console.log("this is taskList after updating the service array"+ this.taskList);
  /*   this.subjectTask.next(this.taskList); */

  }
}
