import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CreateTaskComponent } from './create-task/create-task.component';

import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

import { TaskListViwerComponent } from './task-list-viwer/task-list-viwer.component';

@NgModule({
  declarations: [ 
    AppComponent,
    MainViewComponent,
    CreateTaskComponent,
    TaskListComponent,
   
    TaskListViwerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
