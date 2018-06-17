import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  pageName = 'Species';

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
  }

}
