import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCounter: number;
  taskText: string;
  tasks = [];
  currentTasks;
  buttonDisabled = true;
  key;
  value;
  index;

  constructor() { }

  ngOnInit(): void {
    this.getItems();
    this.itemCounter = this.tasks.length;
    if (this.itemCounter === 0) {
      localStorage.removeItem('task-items');
    }
    console.log(this.tasks);
  }

  addItem(taskText) {
    this.tasks.push(this.taskText);
    localStorage.setItem('task-items', JSON.stringify(this.tasks));
    this.taskText = '';
    this.itemCounter = this.tasks.length;
    console.log(this.tasks);
  }

  removeTask(i, task) {
    this.tasks.splice(i, 1);
    this.itemCounter = this.tasks.length;
    this.currentTasks = this.tasks;
    localStorage.removeItem('task-items');
    localStorage.setItem('task-items', JSON.stringify(this.currentTasks));
    if (this.itemCounter === 0) {
      localStorage.removeItem('task-items');
    }
  }

  getItems() {
    if (localStorage.getItem('task-items')) {
      this.tasks = JSON.parse(localStorage.getItem('task-items'));
    } else {
      this.tasks = [];
    }

  }

}
