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
    this.personListSubs = this.personsService.personChanged.subscribe(
      (persons) => (this.personList = persons)
    );
    this.personsService.fetchPerson();
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
