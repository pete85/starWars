import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FilmsComponent} from './films/films.component';
import {PeopleComponent} from './people/people.component';
import {PlanetsComponent} from './planets/planets.component';
import {SpeciesComponent} from './species/species.component';
import {StarshipsComponent} from './starships/starships.component';
import {VehiclesComponent} from './vehicles/vehicles.component';


export const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: VehiclesComponent},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
