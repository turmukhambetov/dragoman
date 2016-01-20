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
	name : "createCourse"
});

Router.route("/list-course", {
	name : "listCourse"
});



//Instructor Profile
//Router.route("/newinstructor", {
//	name : "instructorCreate"
//});

Router.route('/signin', {
	name : "createUser"
});