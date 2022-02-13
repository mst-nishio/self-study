import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Manhattan_West_April_2016_3.JPG',
      149.99
    ),
    new Place(
      'p2',
      // eslint-disable-next-line @typescript-eslint/quotes
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Worth_paris_house.jpg',
      189.99
    ),
    new Place(
      'p3',
      '東京タワー',
      '東京のタワーです。',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/TaroTokyo20110213-TokyoTower-01min.jpg',
      20000.99
    ),
  ];

  get getPlaces() {
    return [...this.places];
  }

  // constructor() {}
}
