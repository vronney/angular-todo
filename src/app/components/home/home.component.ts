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

  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.tasks.length;
  }

  addItem(taskText) {
    this.tasks.push(this.taskText);
    this.taskText = '';
    this.itemCounter = this.tasks.length;
  }

  removeTask(i) {
    this.tasks.splice(i, 1);
    this.itemCounter = this.tasks.length;
  }

}
