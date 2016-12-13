import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.methods({
	  market_filter: function () {
	    return ["India", "Middle East"]
	  }
	})
});