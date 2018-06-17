import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  pageName = 'Vehicles';
  vehicles = [];

  constructor() { }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.vehicles = JSON.parse(localStorage.getItem('vehicles'));
  }

}
