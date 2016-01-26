Template.createCourse.helpers({
	courseVerbatim: function () {
    return Session.get("verbatim");
  }
});


Template.createCourse.events({
	'click .btn': function (event, template) {
		var verbatim = template.find('#verbatim').value;
		var userRole = "instructor";
		Session.set({	
			verbatim : verbatim,
			userRole : userRole
		 });
		
		if(!Meteor.userId()) {
			Router.go('/signin');
		} else {

			

				var query = {
					vendor : Meteor.userId(),
					duration : template.find('#duration').value-0,
					price : template.find('#price').value-0
				};

				var
					subject = template.find('#subject').value
					, target = template.find('#target').value;

				var expertise = {
							"verbatim": verbatim,
							"subject": subject,
							"target": target,
				};
			
				Meteor.call('updateProducts',query, expertise, function(error,result){
					if (error) {throw error;}
					else {
						var course = _.extend(expertise,{
								product: result,
								owner: Meteor.userId()
						});
						Meteor.call('updateCourses',course,function(error,result){
							if (error) {throw error}
								else {
									Session.set({verbatim : null});
									Router.go('/');
								}
						});
						
					}
				});
		}
	} // click .btn
}); // events

Template.itemProduct.helpers({
	products: function(pid){
		return products.findOne({_id: pid});
	}
});

