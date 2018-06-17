import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = [];
  pageName = 'People';

  constructor() { }

  ngOnInit() {
    this.people = JSON.parse(localStorage.getItem('people'));
    document.getElementById('pageName').innerHTML = this.pageName;
  }

}
