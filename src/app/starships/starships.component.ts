import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  pageName = 'Starships';
  starships = [];

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.starships = JSON.parse(localStorage.getItem('starships'));
  }

}
