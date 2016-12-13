import { Component} from '@angular/core';
import template from './home.component.html';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'home',
  template
})
@Injectable()
export class HomeComponent {
	constructor(private router:Router){
	}
	direct(): void {
		console.log('calling direct')
	  this.router.navigate(['market']);
	  console.log(this.router)
	}

	meteor_observable(): void {		
		console.log('calling meteor_observable')
		let router = this.router
		MeteorObservable.call('logout').subscribe((markets) => {
      router.navigate(['market']);
    }, (error) => {
      console.log(`Failed to receive market_filter due to ${error}`);
    });
	}
	accounts_package(): void {
		console.log('calling accounts_package')
		let router = this.router
		Meteor.logout(function(){	  	
	  	router.navigate(['market']);
	  });
	}

	meteor_methods(): void {
		console.log('calling meteor_methods')
		Meteor.call('logout', (error,result) => {
			this.router.navigate(['market']);
		})
	}
}