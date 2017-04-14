import { Component, OnInit } from '@angular/core';
import { Coffee, COFFEES } from '../shared';

@Component({
  selector: 'cupping-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  coffees = COFFEES;
  coffee: Coffee;

  constructor() { }

  ngOnInit() {
  }

}
