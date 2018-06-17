import {Component, OnInit} from '@angular/core';
import {StarwarsService} from '../_services/starwars.service';
import {Person} from '../_models/people';
import {Film} from '../_models/film';
import {Planet} from '../_models/planet';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[];
  films: Film[];
  planets: Planet[];
  pageName = 'Home';

  constructor(private _starwarsService: StarwarsService) {
  }

  ngOnInit() {
    document.getElementById('pageName').innerHTML = this.pageName;
    this.getPeople();
    this.getFilms();
    this.getPlanets();
  }

  getFilms() {
    this._starwarsService.getFilms()
      .subscribe(
        data => {
          if (data !== null) {
            this.films = data['results'];
            console.log('Films: ', this.films);
            if (localStorage.getItem('films') === null) {
              localStorage.setItem('films', JSON.stringify(this.films));
            }
          }
        },
        (error) => {
          this.showAlert(JSON.parse(error._body));
        },
        () => {
          console.log('finished retrieving data');
        });
  }

  getPeople() {
    this._starwarsService.getPeople()
      .subscribe(
        data => {
          if (data !== null) {
            this.people = data['results'];
            console.log('People: ', this.people);
            if (localStorage.getItem('people') === null) {
              localStorage.setItem('people', JSON.stringify(this.people));
            }
          }
        },
        (error) => {
          this.showAlert(JSON.parse(error._body));
        },
        () => {
          console.log('finished retrieving data');
        });
  }

  getPlanets() {
    this._starwarsService.getPlanets()
      .subscribe(
        data => {
          if (data !== null) {
            this.planets = data['results'];
            console.log('Planets: ', this.planets);
            if (localStorage.getItem('planets') === null) {
              localStorage.setItem('planets', JSON.stringify(this.planets));
            }
          }
        },
        (error) => {
          this.showAlert(JSON.parse(error._body));
        },
        () => {
          console.log('finished retrieving data');
        });
  }

  private showAlert(message) {
    const status_code = message.request_status;
    const status_message = message.request_msg;
    const error_message = 'Error Code: ' + status_code + ':  ' + status_message;
    alert(error_message);
  }

}
