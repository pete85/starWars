import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  openHome(): void {
    this._router.navigateByUrl('');
  }

  openFilms(): void {
    this._router.navigateByUrl('/films');
  }

  openPeople(): void {
    this._router.navigateByUrl('/people');
  }

  openPlanets(): void {
    this._router.navigateByUrl('/planets');
  }

  openSpecies(): void {
    this._router.navigateByUrl('/species');
  }

  openStarships(): void {
    this._router.navigateByUrl('/starships');
  }

  openVehicles(): void {
    this._router.navigateByUrl('/vehicles');
  }

}
