Template.customLogin.events({
	'click #btn-logout' : function(e,t){
		//console.log("clicked");
		Meteor.logout(function(Error){
			Session.set({
				verbatim: null,
				userRole: null
			})
		});

	}
});