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
  buttonDisabled = true;
  key;
  value;
  index;

  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.tasks.length;
    this.getItems();
    console.log(this.tasks);
  }

  addItem(key: number, taskText) {
    this.tasks.push(this.taskText);
    localStorage.setItem(JSON.stringify(key), JSON.stringify(taskText));
    this.taskText = '';
    this.itemCounter = this.tasks.length;
    console.log(this.tasks);
  }

  removeTask(i, task) {
    this.tasks.splice(i, 1);
    this.itemCounter = this.tasks.length;
    localStorage.removeItem(JSON.stringify(i, task));
    if (this.itemCounter === 0) {
      localStorage.clear();
    }
  }

  getItems() {
    // for (let [key, value] of Object.entries(localStorage)) {
    //   key = JSON.parse(`${key}`);
    //   value = JSON.parse(`${value}`);
    //   this.tasks.push(value);
    //   this.itemCounter = this.tasks.length;
    // }
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
      this.value = JSON.parse(localStorage.getItem(localStorage.key(i)));
      this.tasks.push(this.value);
    }
  }

}
