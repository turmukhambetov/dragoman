getMyCourses = function(){
	//var course  = Meteor.users.find(this.userId,{fields:"course"});
	return Meteor.users.find().fetch();
}