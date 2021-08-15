import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from './persons.service';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubs: Subscription;

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personList = this.personsService.persons;
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
    this.personListSubs = this.personsService.personChanged.subscribe(
      (persons) => (this.personList = persons)
    );
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
