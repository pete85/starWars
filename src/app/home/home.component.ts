import {Component, OnInit} from '@angular/core';
import {StarwarsService} from '../_services/starwars.service';
import {Person} from '../_models/people';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[];

  constructor(private _starwarsService: StarwarsService) {
  }

  ngOnInit() {
    this.getPeople();
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

  private showAlert(message) {
    const status_code = message.request_status;
    const status_message = message.request_msg;
    const error_message = 'Error Code: ' + status_code + ':  ' + status_message;
    alert(error_message);
  }

}
