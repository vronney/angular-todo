import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from './../../service/cards.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [];

  // tslint:disable-next-line: variable-name
  constructor(private route: Router, private _projects: CardsService) { }

  ngOnInit(): void {
    this._projects.getData().subscribe(data => this.projects = data);
  }

  naviHome() {
    this.route.navigate(['home']);
  }

}
