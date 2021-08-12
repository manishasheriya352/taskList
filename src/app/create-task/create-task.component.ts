import { TaskService } from './../task.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit, AfterViewInit {
  @ViewChild('heroForm') heroForm: NgForm;

  constructor(private taskservice: TaskService, private route: ActivatedRoute) { }
  isEdit: boolean = false;
  title: string;
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      this.title = params['id'];
      if (this.title) {
        const taskObject = this.taskservice.taskList.find((task: any) => {
          if (task.title === this.title) return true;
          else return false;
        });

        setTimeout(() => {
          this.heroForm.setValue(taskObject);
        }, (2000));

      }
    });
  }

  onsubmit() {
    let date = new Date();
    this.heroForm.value.timestamp = date;
    console.log(this.heroForm.value);
    this.taskservice.saveTask(this.heroForm.value);
  }
}
