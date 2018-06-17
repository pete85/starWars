import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  pageName = 'Species';
  species = [];

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.species = JSON.parse(localStorage.getItem('species'));
  }

}
