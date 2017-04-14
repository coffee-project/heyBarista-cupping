import { Component, OnInit } from '@angular/core';
import { Coffee, COFFEES } from '../shared';

@Component({
  selector: 'cupping-coffee-edit',
  templateUrl: './coffee-edit.component.html',
  styleUrls: ['./coffee-edit.component.scss']
})
export class CoffeeEditComponent implements OnInit {
  coffees = COFFEES;
  coffee: Coffee;

  constructor() { }

  ngOnInit() {
  }

}