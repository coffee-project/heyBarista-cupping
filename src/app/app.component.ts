import { Component } from '@angular/core';
import { Coffee } from './shared';

@Component({
  selector: 'cupping-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cupping works!';
  coffee: Coffee = {
    id: 1,
    name: 'Mahembe',
    origin: 'Western Province, Rwanda',
    process: 'Washed',
    varietal: 'Red Bourbon',
    producer: 'Justin Musabyiama',
    description: 'Cocoa Nibs, Cherry, Nutmeg',
    roastery: 'The Barn'
  };
}

