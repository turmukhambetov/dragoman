Template.customLogin.events({
	'click #btn-logout' : function(e,t){
		//console.log("clicked");
		Meteor.logout(function(Error){
			if (Error) {
				console.log(Error);
			}
			//console.log("Logged out");
		});

	}
});