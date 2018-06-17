import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  pageName = 'Planets';
  planets = [];

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.planets = JSON.parse(localStorage.getItem('planets'));
  }

}
