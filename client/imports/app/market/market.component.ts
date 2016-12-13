import { Component} from '@angular/core';
 
import template from './market.component.html';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'market',
  template,
})
export class MarketComponent  {
  private markets

  constructor() {
    MeteorObservable.call('market_filter').subscribe((markets) => {
      this.markets = markets
    }, (error) => {
      console.log(`Failed to receive market_filter due to ${error}`);
    });
    
  }
}