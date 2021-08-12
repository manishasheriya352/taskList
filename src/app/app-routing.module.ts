import { TaskListComponent } from './task-list/task-list.component';

import { CreateTaskComponent } from './create-task/create-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:'',redirectTo:'/createTask',pathMatch:'full'},
  {path:'createTask/:id', component:CreateTaskComponent},
  {path:'createTask', component:CreateTaskComponent},
{path:'taskList', component:TaskListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
