import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {}

  fetchPerson() {
    this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(
        map((resData) => resData.results.map((character) => character.name))
      )
      .subscribe((transformData) => this.personChanged.next(transformData));
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person) => person !== name);
    this.personChanged.next(this.persons);
  }
}
