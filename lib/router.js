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

Router.route("/list-course", function(){
	this.render('listCourse', {
		data: function(){
			return {
				courses: courses.find({owner: Meteor.userId()})
				//products: products.findOne({_id: courses.product})
			}
		}
	});
});

Router.route('/products/:_id',{
name: 'itemProduct'
//,data: function(){
//	return products.findOne({_id: this.params._id});
//}
});

Router.route('/items/:_id', function () {
  var product = products.findOne({_id: this.params._id});
  this.render('ShowProduct', {data: product});
});

//Instructor Profile
//Router.route("/newinstructor", {
//	name : "instructorCreate"
//});

Router.route('/signin', {
	name : "createUser"
});

Router.route('/editprofile', {
	name : "editProfile"
});

Router.route('/registration', {
	name: "registerStudent"
});