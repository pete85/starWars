import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  pageName = 'Films';
  films = [];

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.films = JSON.parse(localStorage.getItem('films'));
  }

}
