Template.expertiseNew.helpers({
	courseVerbatim: function () {
    return Session.get("verbatim");
  }
})



Template.expertiseNew.events({
'click .btn': function (event, template) {
	
//console.log(Meteor.userId());
var verbatim = template.find('#verbatim').value;
Session.set({
	verbatim : verbatim
});
	if(!Meteor.userId()) {
		
		Router.go('/instructor-signin');

	} else {
		console.log('Update user collection');
			
	}
	
}
});



