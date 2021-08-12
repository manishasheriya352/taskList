import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListViwerComponent } from './task-list-viwer.component';

describe('TaskListViwerComponent', () => {
  let component: TaskListViwerComponent;
  let fixture: ComponentFixture<TaskListViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListViwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
