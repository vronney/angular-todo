import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../cards';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private projects = '/assets/data/projectData.json';

  getData(): Observable<Cards[]> {
    return this.http.get<Cards[]>(this.projects);
  }

  constructor(private http: HttpClient) { }
}
