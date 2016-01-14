Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'not-found'
});

//Homepage route
Router.route("/", {
	name : "homeIndex"
});

//USER PROFILE VIEWS

//Instructor's COURSE views
Router.route("/new-course", {
	name : "expertiseNew"
});

Router.route("/courses/:course", {
	name : "expertiseEdit",
	data : function(){
		
		return Courses.findOne({id : this.params.course});
	}
});

Router.route("/my-courses", {
	name : "expertiseList",
	data : function(){
		return Courses.list();
	}
});

//Instructor Profile
//Router.route("/newinstructor", {
//	name : "instructorCreate"
//});

Router.route("/instructor-signin", {
	name : "instructorCreate"
});