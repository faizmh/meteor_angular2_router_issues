import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
 
import { MarketComponent } from './market/market.component';
import { HomeComponent } from './home/home.component';


export const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'market', component: MarketComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];