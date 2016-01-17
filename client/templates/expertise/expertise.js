Template.expertiseNew.helpers({
	courseVerbatim: function () {
    return Session.get("verbatim");
  }
 

});



Template.expertiseNew.events({
'click .btn': function (event, template) {
	

var verbatim = template.find('#verbatim').value;
Session.set({	verbatim : verbatim });
	
	if(!Meteor.userId()) {
		
		Router.go('/instructor-signin');

	} else {
		
			var query = {
				userId : Meteor.userId(),
				duration : template.find('#duration').value,
				price : template.find('#price').value
			};

			var
			subject = template.find('#subject').value
			, target = template.find('#target').value;

			var expertise = {
						verbatim: verbatim,
						subject: subject,
						target: target,
						
					};
		
			Meteor.call('updateInstructorTime',query, expertise, function(error,result){
				if (error) {throw error;}
				else {
					
					console.log(result);
					
				}
			});
			

		}

		

		
		
		
		
		
		

			
	
	
} // click .btn
}); // events



